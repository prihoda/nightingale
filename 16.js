(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{161:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(675),i=n(113),c=n(724),s=n.n(c),l=n(37);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b="MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAVIAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP",m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(y,e);var t,n,c,u=f(y);function y(){return h(this,y),u.apply(this,arguments)}return t=y,(n=[{key:"componentDidMount",value:function(){document.querySelector("#seq1").data=b,document.querySelector("#seq2").data=b,document.querySelector("#seq3").data=b,document.querySelector("#seq4").data=b,document.querySelector("#seq5").data=b}},{key:"render",value:function(){return Object(i.a)("protvista-coloured-sequence",a.a),o.a.createElement(r.Fragment,null,o.a.createElement(l.default,{content:s.a}),o.a.createElement("h4",null,"Same Scale - different levels of zoom"),o.a.createElement("protvista-coloured-sequence",{id:"seq1",length:"223",displaystart:"1",displayend:"223",height:"10",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq2",length:"223",height:"10",displaystart:"10",displayend:"150",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq3",length:"223",height:"10",displaystart:"50",displayend:"70",highlightStart:"23",highlightEnd:"45",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq4",length:"223",height:"10",displaystart:"50",displayend:"70",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq5",length:"223",height:"10",displaystart:"203",displayend:"220",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",height:"10",displaystart:"1",displayend:"4",scale:"hydrophobicity-scale"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Testing Scales"),o.a.createElement("h5",null,"hydrophobicity-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale"}),o.a.createElement("h5",null,"hydrophobicity-interface-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-interface-scale"}),o.a.createElement("h5",null,"hydrophobicity-octanol-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-octanol-scale"}),o.a.createElement("h5",null,"isoelectric-point-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"isoelectric-point-scale",color_range:"white:0,dodgerblue:11"}),o.a.createElement("h5",null,"custom-scale"),o.a.createElement("pre",null,'"T:-2,R:-2,Y:-2,F:2,A:2,I:2,L:2"'),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"T:-2,R:-2,Y:-2,F:2,A:2,I:2,L:2"}),o.a.createElement("h4",null,"Testing other colors"),o.a.createElement("h5",null,"hydrophobicity-scale - same colors on a wider scale"),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale",color_range:"#ffdd00:-5,#0000FF:5"}),o.a.createElement("h5",null,"hydrophobicity-scale - same colors but white inzero values"),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale",color_range:"#ffdd00:-2,#FFFFFF:0,#0000FF:2"}),o.a.createElement("h5",null,"hydrophobicity-scale - changing completely the color scale. "),o.a.createElement("pre",null,'"red:-3,#FFFFFF:0,#00FF00:3"'),o.a.createElement("protvista-coloured-sequence",{sequence:b,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale",color_range:"red:-3,#FFFFFF:0,#00FF00:3"}))}}])&&d(t.prototype,n),c&&d(t,c),y}(r.Component);t.default=m},675:function(e,t,n){"use strict";var r=n(570),o=n(608),a=n(571),i=n(676),c=n(677),s=n(678),l=n(679);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=["hydrophobicity-interface-scale","hydrophobicity-octanol-scale","hydrophobicity-scale","isoelectric-point-scale"],m={domain:[-2,2],range:["#ffdd00","#0000FF"]},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(g,e);var t,n,u,y=f(g);function g(){return h(this,g),y.apply(this,arguments)}return t=g,u=[{key:"observedAttributes",get:function(){return o.a.observedAttributes.concat("scale","color_range")}}],(n=[{key:"_createSequence",value:function(){this.svg=Object(r.select)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",this._height),this.uniqueID=Math.random().toString(36).substring(7),this.gradient=this.svg.append("defs").append("linearGradient").attr("id","scale-gradient-".concat(this.uniqueID)),this.seq_g=this.svg.append("g").attr("class","background"),this.seq_greadient=this.svg.append("rect").attr("class","seq-gradient").style("pointer-events","none"),this._getCharSize(),this.trackHighlighter.appendHighlightTo(this.svg),this.refresh()}},{key:"getScaleFromAttribute",value:function(){var e=null;if(b.indexOf(this._scale)>=0)switch(this._scale){case"hydrophobicity-scale":return s;case"hydrophobicity-interface-scale":return i;case"isoelectric-point-scale":return l;case"hydrophobicity-octanol-scale":return c;default:return null}if(/([ILFVMPWHTEQCYASNDRGK]:-?\d+\.?\d*)(,[ILFVMPWHTEQCYASNDRGK]:-?\d+\.?\d*)*/.test(this._scale))try{e=Object(a.d)(this._scale,{keyFormatter:function(e){return e.toUpperCase()},valueFormatter:function(e){return parseFloat(e)}})}catch(e){console.error("Couldn't parse the given scale ".concat(this._scale),e)}return e}},{key:"refresh",value:function(){var e=this;if(this.seq_g){var t=this.getScaleFromAttribute();if(null===t)return void console.error("The attribute scale is not valid.");var n=Object(r.scaleLinear)();this.colorScale=m,this._color_range&&(this.colorScale=Object(a.a)(this._color_range)),n.domain(this.colorScale.domain).range(this.colorScale.range);var o=this.getSingleBaseWidth(),i=Math.round(Math.max(0,this._displaystart-2)),c=Math.round(Math.min(this.sequence.length,this._displayend+1)),s=this.sequence.slice(i,c).split("").map((function(e,r){var o=e.toUpperCase()in t?t[e.toUpperCase()]:0;return{start:1+i+r,end:1+i+r,aa:e,value:o,colour:n(o)}}));this.residues=this.seq_g.selectAll("rect.base_bg").data(o<8?[]:s,(function(e){return e.start})),this.residues.enter().append("rect").attr("class","base_bg feature").attr("data-base",(function(e){return e.aa})).attr("data-pos",(function(e){return e.start})).attr("height",this._height).merge(this.residues).attr("width",o).attr("fill",(function(e){return e.colour})).attr("x",(function(t){var n=t.start;return e.getXFromSeqPosition(n)})).call(this.bindEvents,this),this.residues.exit().remove();var l=this.gradient.selectAll("stop").data(this.sequence.split(""));l.enter().append("stop").merge(l).attr("offset",(function(t,n){return(n+.5)/e.sequence.length})).attr("stop-color",(function(e){return n(e.toUpperCase()in t?t[e.toUpperCase()]:0)})),this.gradient.exit().remove(),this.seq_greadient.attr("x",this.getXFromSeqPosition(1)).attr("y",0).attr("height",this._height).attr("width",this.getXFromSeqPosition(this.sequence.length)-this.getXFromSeqPosition(0)).style("opacity",o<8?1:8/o).attr("fill","url(#scale-gradient-".concat(this.uniqueID,")")),this._updateHighlight()}}}])&&d(t.prototype,n),u&&d(t,u),g}(o.a);t.a=v},676:function(e){e.exports=JSON.parse('{"I":-0.31,"L":-0.56,"F":-1.13,"V":0.07,"M":-0.23,"P":0.45,"W":-1.85,"H":0.17,"T":0.14,"E":-0.01,"Q":0.58,"C":-0.24,"Y":-0.94,"A":0.17,"S":0.13,"N":0.42,"D":-0.07,"R":0.81,"G":0.01,"K":0.99}')},677:function(e){e.exports=JSON.parse('{"I":-1.12,"L":-1.25,"F":-1.71,"V":-0.46,"M":-0.67,"P":0.14,"W":-2.09,"H":0.11,"T":0.25,"E":0.11,"Q":0.77,"C":-0.02,"Y":-0.71,"A":0.5,"S":0.46,"N":0.85,"D":0.43,"R":1.15,"G":3.63,"K":3.64}')},678:function(e){e.exports=JSON.parse('{"I":-0.81,"L":-0.69,"F":-0.58,"V":-0.53,"M":-0.44,"P":-0.31,"W":-0.24,"H":-0.06,"T":0.11,"E":0.12,"Q":0.19,"C":0.22,"Y":0.23,"A":0.33,"S":0.33,"N":0.43,"D":0.5,"R":1.14,"G":1.61,"K":2.41}')},679:function(e){e.exports=JSON.parse('{"I":6.04,"L":6.04,"F":5.91,"V":6.02,"M":5.74,"P":6.3,"W":5.88,"H":7.64,"T":5.6,"E":3.08,"Q":5.65,"C":5.02,"Y":5.63,"A":6.11,"S":5.68,"N":5.41,"D":2.87,"R":10.76,"G":6.06,"K":9.47}')},724:function(e,t){e.exports='<h1 id="protvista-coloured-sequence">protvista-coloured-sequence</h1>\n<p><a href="https://www.npmjs.com/package/protvista-coloured-sequence"><img src="https://img.shields.io/npm/v/protvista-coloured-sequence.svg" alt="Published on NPM"></a></p>\n<p>Use this component to paint a track that uses the sequence to paint a color depending on each residue.</p>\n<p>Useful to display hydrophobicity, isoelectric points, or any feature were a color can represent a residue.</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;protvista-coloured-sequence length=&quot;770&quot; scale=&quot;hydrophobicity-scale&quot; /&gt;</code></pre>\n<h2 id="api-reference">API Reference</h2>\n<h3 id="properties">Properties</h3>\n<h4 id="data-string"><code>data: string</code></h4>\n<p>The sequence to use for the track.</p>\n<h4 id="scale-string"><code>scale: string</code></h4>\n<p>The scale attribute is the mapping between a residue and a numeric value.</p>\n<p>The value of this parameter could be either one of the predifined scales, or a custom scale indicating the values.</p>\n<p>The list of predefined scales:</p>\n<ul>\n<li>hydrophobicity-scale</li>\n<li>hydrophobicity-interface-scale</li>\n<li>hydrophobicity-octanol-scale</li>\n<li>isoelectric-point-scale</li>\n</ul>\n<p>The format for the custom scale is a comma separated list of pairs. Where each pair is a [KEY]:[VALUE].\nFor example:</p>\n<p><code>A:0.5,M:-3,P:3</code></p>\n<p>If a residue in the sequence is not defined in the used scale, the value used will be 0.</p>\n<h4 id="color_range-string"><code>color_range: string</code></h4>\n<p>The color range attribute allow to define the colors to use when painting the values.</p>\n<p>The component will use this range to create a scale that can be interpolated.</p>\n<p>The default color_range is <code>#ffdd00:-2,#0000FF:2</code> indicating that a value of <code>-2</code> should be painted Yellow (<code>#ffdd00</code>) and\na value of <code>2</code> should be blue (<code>#0000FF</code>). And values in between will be interpolated.</p>\n<p>The format requires at least 2 points, and if more than 2 are given, the interpolation would be calculated in between segments.\nFor example, <code>#ffdd00:-2,white:0,#0000FF:2</code> where <code>white</code> is now representing the value<code>0</code>.</p>\n<p>Notice that HTML color names are also supported, as in the example above.</p>\n<h4 id="start-number-optional"><code>start: number (optional)</code></h4>\n<p>The start position of the selected region.</p>\n<h4 id="end-number-optional"><code>end: number (optional)</code></h4>\n<p>The end position of the selected region.</p>\n<h4 id="highlight-string-optional"><code>highlight: string (optional)</code></h4>\n<p>A comma separated list of regions to highlight.</p>\n<p>Each region follows the format: <code>[start]:[end]</code>, where both <code>[start]</code> and <code>[end]</code> are optional numbers.</p>\n<h3 id="events">Events</h3>\n<h4 id="listens-to">Listens to</h4>\n<p>--</p>\n<h4 id="emits">Emits</h4>\n<p><code>change</code> event with highlight start and end in the payload</p>\n'}}]);