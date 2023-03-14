import { property } from "lit/decorators.js";
import {
  scaleLinear,
  zoom as d3zoom,
  zoomIdentity,
  ScaleLinear,
  ZoomBehavior,
  D3ZoomEvent,
  Selection,
} from "d3";

import NightingaleBaseElement, {
  Constructor,
} from "../../nightingale-base-element";
import withDimensions from "../withDimensions";
import withPosition from "../withPosition";
import withMargin from "../withMargin";
import withResizable from "../withResizable";

export declare class WithZoomInterface {
  xScale?: ScaleLinear<number, number>;
  svg?: Selection<
    SVGSVGElement,
    unknown,
    HTMLElement | SVGElement | null,
    unknown
  >;
  updateScaleDomain(): void;
  getSingleBaseWidth(): number;
  getXFromSeqPosition(position: number): number;
  applyZoomTranslation(): void;
}
const ATTRIBUTES_THAT_TRIGGER_REFRESH = ["length", "width", "height"];

const withZoom = <T extends Constructor<NightingaleBaseElement>>(
  superClass: T
  // options: Record<string, unknown> = {}
) => {
  class WithZoom extends withMargin(
    withPosition(withResizable(withDimensions(superClass)))
  ) {
    _applyZoomTranslation: () => void;
    private originXScale?: ScaleLinear<number, number>;
    _xScale?: ScaleLinear<number, number>;
    _zoom?: ZoomBehavior<HTMLElement, unknown>;
    _svg?: Selection<HTMLElement, unknown, HTMLElement, unknown>;
    dontDispatch?: boolean;

    @property({ type: Boolean })
    "use-ctrl-to-zoom" = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);

      this.updateScaleDomain = this.updateScaleDomain.bind(this);
      this._initZoom = this._initZoom.bind(this);
      this.zoomed = this.zoomed.bind(this);
      this._applyZoomTranslation = this.applyZoomTranslation.bind(this);
      let aboutToApply = false;
      // Postponing the zoom translation to the next frame.
      // This helps in case several attributes are changed almost at the same time,
      // in this way, only one refresh will be called.
      this.applyZoomTranslation = () => {
        if (aboutToApply) return;
        aboutToApply = true;
        requestAnimationFrame(() => {
          aboutToApply = false;
          this._applyZoomTranslation();
        });
      };
      // this.scrollFilter = new ScrollFilter(this);
      // this.wheelListener = (event) => this.scrollFilter.wheel(event);
    }

    connectedCallback() {
      this.updateScaleDomain();
      this._initZoom();
      // if (this.hasAttribute("filter-scroll")) {
      //   document.addEventListener("wheel", this.wheelListener, { capture: true });
      // }
      super.connectedCallback();
    }

    disconnectedCallback() {
      // document.removeEventListener("wheel", this.wheelListener);
      super.disconnectedCallback();
    }

    get xScale() {
      return this._xScale;
    }

    set xScale(xScale) {
      this._xScale = xScale;
    }

    get zoom() {
      return this._zoom;
    }

    set svg(svg) {
      if (!svg || !this._zoom) return;
      this._svg = svg;
      svg.call(this._zoom);
      this.applyZoomTranslation();
    }

    get svg() {
      return this._svg;
    }

    updateScaleDomain() {
      this.xScale = scaleLinear()
        // The max width should match the start of the n+1 base
        .domain([1, (this.length || 0) + 1])
        .range([0, this.getWidthWithMargins()]);
      this.originXScale = this.xScale?.copy();
      this.zoom?.translateExtent([
        [0, 0],
        [this.getWidthWithMargins(), 0],
      ]);
    }

    _initZoom() {
      this._zoom = d3zoom<HTMLElement, unknown>()
        .scaleExtent([1, Infinity])
        .translateExtent([
          [0, 0],
          [this.getWidthWithMargins(), 0],
        ])
        .extent([
          [0, 0],
          [this.getWidthWithMargins(), 0],
        ])
        .filter((event) => {
          if (!(event?.type === "wheel")) return true;
          // TODO: deal with event filters
          //   if (this.hasAttribute("scroll-filter")) {
          //     const scrollableAttribute = this.getAttribute("scrollable");
          //     if (scrollableAttribute) return scrollableAttribute === "true";
          //   }
          return !this["use-ctrl-to-zoom"] || event.ctrlKey;
        })
        .on("zoom", this.zoomed);
    }

    attributeChangedCallback(
      name: string,
      oldValue: string | null,
      newValue: string | null
    ): void {
      super.attributeChangedCallback(name, oldValue, newValue);

      const newV = newValue === "null" ? null : newValue;
      if (oldValue !== newV) {
        if (ATTRIBUTES_THAT_TRIGGER_REFRESH.includes(name)) {
          this.updateScaleDomain();
        }
        // One of the observable attributes changed, so the scale needs to be redefined.
        this.applyZoomTranslation();
      }
    }

    zoomed(d3Event: D3ZoomEvent<SVGSVGElement, unknown>) {
      // Redefines the xScale using the original scale and transform it with the captured event data.
      if (this.originXScale)
        this.xScale = d3Event.transform.rescaleX(this.originXScale);

      // New positions based in the updated scale
      const [start, end] = this?.xScale?.domain() || [0, 0];

      if (this.dontDispatch || !this.xScale) return;
      this.dispatchEvent(
        // Dispatches the event so the manager can propagate this changes to other  components
        new CustomEvent("change", {
          detail: {
            "display-start": Math.max(1, start),
            "display-end": Math.min(
              this.length || 0,
              Math.max(end - 1, start + 1) // To make sure it never zooms in deeper than showing 2 bases covering the full width
            ),
          },
          bubbles: true,
          cancelable: true,
        })
      );
    }

    applyZoomTranslation() {
      if (!this.svg || !this.originXScale) return;
      // Calculating the scale factor based in the current start/end coordinates and the length of the sequence.
      const k = Math.max(
        1,
        // +1 because the displayend base should be included
        (this.length || 0) /
          (1 + (this["display-end"] || 0) - (this["display-start"] || 0))
      );
      // The deltaX gets calculated using the position of the first base to display in original scale
      const dx = -this.originXScale(this["display-start"] || 0);
      this.dontDispatch = true; // This is to avoid infinite loops
      if (this.zoom) {
        this.svg.call(
          // We trigger a zoom action
          this.zoom.transform,
          zoomIdentity // Identity transformation
            .scale(k) // Scaled by our scaled factor
            .translate(dx, 0) // Translated by the delta
        );
      }
      this.dontDispatch = false;
      this.zoomRefreshed();
    }
    zoomRefreshed() {
      super.render();
    }

    render() {
      this.applyZoomTranslation();
      return super.render();
    }
    public override onDimensionsChange() {
      super.onDimensionsChange();
      this.svg?.attr("width", this.width);
      this.svg?.attr("height", this.height);
      this.updateScaleDomain();
      this.applyZoomTranslation();
    }

    getXFromSeqPosition(position: number) {
      if (!this.xScale) return -1;
      return this["margin-left"] + this.xScale(position);
    }

    getSingleBaseWidth() {
      if (!this.xScale) return -1;
      return this.xScale(2) - this.xScale(1);
    }
  }
  return WithZoom as Constructor<WithZoomInterface> & T;
};

export default withZoom;
