import {
  select,
  scaleBand,
  scaleLinear,
  axisBottom,
  axisLeft,
  range,
  event as d3Event,
} from "d3";

class NightingaleHeatmap extends HTMLElement {
  connectedCallback() {
    this.length = Number(this.getAttribute("length"));
    this._width = Number(this.getAttribute("width")) || 650;
    this._height = Number(this.getAttribute("width")) || 700;
    this.symmetricMap = this.hasAttribute("symmetric");
    if (this._data) this.render();
  }

  static get observedAttributes() {
    return ["length", "width", "height"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal != null && oldVal !== newVal) {
      if (attrName === "width") this._width = newVal;
      if (attrName === "height") this._height = newVal;
      if (attrName === "length") this.length = newVal;
      this.render();
    }
  }

  set data(data) {
    // If length is not specified, the last value from the data is taken as the dimension for the matrix
    if (!this.length) {
      const [lastValue] = data[data.length - 1];
      this.length = lastValue;
    }

    // Filling missing values
    const newArray = [];
    let i = 1;
    let j = 1;
    for (let k = 0; k < data.length; k++) {
      const value = data[k];
      // eslint-disable-next-line no-loop-func
      const fillArray = (newArray) => {
        if (value[0] === i && value[1] === j) {
          // If present, push the existing value
          newArray.push(data[k]);
        } else {
          // If not, push the value as 0 and continue with the last checked index 'k' of data
          newArray.push([i, j, 0]);
          k--;
        }
      };

      if (j <= this.length) {
        fillArray(newArray);
        j++;
      } else {
        i++;
        j = this.symmetricMap ? i : 1;
        fillArray(newArray);
      }
    }
    this._data = newArray;
    this.render();
  }

  render() {
    if (!this._data) {
      return;
    }
    this.style.display = "block";

    // clear all previous vis
    select(this).select(".contact-map").remove();
    select(this).select("svg").remove();
    select(this).select("canvas").remove();

    if (this._data) {
      this.createHeatMap(this._data);
    }
  }

  _dispatchSelectionPoint(type, target, d) {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          type,
          point: d || null,
          target: this,
        },
        bubbles: true,
        cancelable: true,
      })
    );
  }

  createHeatMap(data) {
    const margin = { top: 40, right: 25, bottom: 40, left: 50 };
    this.canvasWidth = this._width - margin.left - margin.right;
    this.canvasHeight = this._height - margin.top - margin.bottom;

    const svg = select(this)
      .append("svg")
      .attr("width", this._width)
      .attr("height", this._height)
      .attr("class", "svg-heatmap")
      .style("position", "absolute")
      .append("g")
      .attr("class", "svg-heatmap-group")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const canvas = select(this)
      .append("canvas")
      .attr("width", this.canvasWidth)
      .attr("height", this.canvasHeight)
      .style("margin-left", `${margin.left}px`)
      .style("margin-top", `${margin.top}px`)
      .attr("class", "canvas-heatmap")
      .style("position", "absolute");

    this.context = canvas.node().getContext("2d");

    // X scale
    this.x = scaleBand()
      .range([0, this.canvasWidth])
      .domain(range(1, this.length));

    // Y scale
    this.y = scaleBand()
      .range([0, this.canvasHeight])
      .domain(range(1, this.length));

    // Ticks interval
    const total = this.x.domain().length;
    const tickValues = [1];
    let position = 50;
    while (total > 0 && position <= total) {
      tickValues.push(Math.min(total, position));
      position += 50;
    }

    // Adding axes
    const xAxis = axisBottom(this.x).tickSize(3).tickValues(tickValues);
    svg
      .append("g")
      .style("font-size", 15)
      .attr("transform", `translate(0,${this.canvasHeight})`)
      .call(xAxis)
      .select(".domain")
      .remove();
    const yAxis = axisLeft(this.y).tickSize(3).tickValues(tickValues);
    svg
      .append("g")
      .style("font-size", 15)
      .call(yAxis)
      .select(".domain")
      .remove();

    // text label for axes
    svg
      .append("text")
      .attr(
        "transform",
        `translate(${this.canvasWidth / 2},${this.canvasHeight + margin.top})`
      )
      .style("text-anchor", "middle")
      .text("Residue");
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - this.canvasHeight / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Residue");

    // Draw on canvas
    this.refreshHeatmap(data);

    const mousemove = () => {
      const xDomainValue = Math.floor(
        (this.x.domain().length * d3Event.offsetX) / this.x.range()[1]
      );
      const yDomainValue = Math.floor(
        (this.y.domain().length * d3Event.offsetY) / this.y.range()[1]
      );
      if (xDomainValue >= 0 && yDomainValue >= 0) {
        const xPoint = this.x.domain()[xDomainValue];
        const yPoint = this.y.domain()[yDomainValue];
        this.refreshHeatmap(data, [xPoint, yPoint]);
        this._dispatchSelectionPoint("mousemove", this, { xPoint, yPoint });
      }
    };

    const mouseout = () => {
      this.refreshHeatmap(data);
      this._dispatchSelectionPoint("mouseout", this);
    };

    select(".canvas-heatmap").on("mousemove", mousemove);
    select(".canvas-heatmap").on("mouseout", mouseout);
  }

  refreshHeatmap(data, highlightPoint = []) {
    // Clear the canvas before repainting
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    data.forEach((point) => {
      this.drawRect(point);
    });

    if (highlightPoint.length === 2) {
      this.drawRect(highlightPoint, true);
    }
  }

  drawRect(value, highlight = false) {
    const colorScale = scaleLinear().domain([0, 1]).range(["orange", "blue"]);
    this.context.beginPath();
    this.context.fillStyle = highlight ? "black" : colorScale(value[2]);
    this.context.fillRect(
      this.x(value[0]),
      this.y(value[1]),
      Math.floor(this.x.bandwidth()),
      Math.floor(this.y.bandwidth())
    );
    // Symmetric half
    if (this.symmetricMap && !highlight)
      // Dont highlight the symmetrical point
      this.context.fillRect(
        this.x(value[1]),
        this.y(value[0]),
        Math.floor(this.x.bandwidth()),
        Math.floor(this.y.bandwidth())
      );
  }
}

export default NightingaleHeatmap;
