(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{571:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"b",(function(){return C})),n.d(e,"e",(function(){return P})),n.d(e,"a",(function(){return N})),n.d(e,"d",(function(){return F})),n.d(e,"c",(function(){return q})),n.d(e,"f",(function(){return H}));var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.min,i=void 0===n?-1/0:n,r=e.max,a=void 0===r?1/0:r;o(this,t),this.segments=[],this.max=a,this.min=i,this.regionString=null}var e,n,r;return e=t,(n=[{key:"encode",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.segments.map((function(n){var i=n.start,r=n.end;if(e)return"".concat(i,":").concat(r);var o=i===t.min?"":i,a=r===t.max?"":r;return"".concat(o,":").concat(a)})).join(",")}},{key:"decode",value:function(t){var e=this;void 0!==t&&(this.regionString=t),this.regionString?this.segments=this.regionString.split(",").map((function(t){var n=i(t.split(":"),3),r=n[0],o=n[1];if(void 0!==n[2])throw new Error("there should be at most 1 ':' per region. Region: ".concat(t));var a=r?Number(r):e.min,s=o?Number(o):e.max;if(a>s){var l=[s,a];a=l[0],s=l[1]}if(a<e.min&&(a=e.min),s>e.max&&(s=e.max),Number.isNaN(a))throw new Error("The parsed value of ".concat(r," is NaN. Region: ").concat(t));if(Number.isNaN(s))throw new Error("The parsed value of ".concat(o," is NaN. Region: ").concat(t));return{start:a,end:s}})):this.segments=[]}}])&&a(e.prototype,n),r&&a(e,r),t}();function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(t,e){return t?e?"".concat(t,",").concat(e):t:e},h=function(){function t(e){var n=e.element,i=e.min,r=e.max;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.region=new s({min:i,max:r}),this.fixedHighlight=null}var e,n,i;return e=t,(n=[{key:"setAttributesInElement",value:function(){this.region.decode(this.element.getAttribute("highlight")),0===this.region.segments.length&&(this.element._highlightstart=Number(this.element.getAttribute("highlightstart")),this.element._highlightend=Number(this.element.getAttribute("highlightend")),null!==this.element._highlightstart&&null!==this.element._highlightend&&"number"==typeof this.element._highlightstart&&"number"==typeof this.element._highlightend&&(this.element._highlight="".concat(this.element._highlightstart,":").concat(this.element._highlightend),this.region.decode(c(this.fixedHighlight,this.element._highlight))))}},{key:"setFloatAttribute",value:function(t,e){var n=parseFloat(e);this.element["_".concat(t)]=Number.isNaN(n)?e:n}},{key:"changedCallBack",value:function(t,e){switch(t){case"highlightstart":case"highlightend":this.setFloatAttribute(t,e),this.element._highlight=Number.isNaN(this.element._highlightstart)||Number.isNaN(this.element._highlightend)||void 0===this.element._highlightstart||void 0===this.element._highlightend||null===this.element._highlightstart||null===this.element._highlightend?"":"".concat(Math.max(this.region.min,this.element._highlightstart),":").concat(Math.min(this.region.max,this.element._highlightend));break;default:this.element._highlight=e}this.region.decode(c(this.fixedHighlight,this.element._highlight)),this.element.refresh()}},{key:"setFixedHighlight",value:function(t){this.fixedHighlight=t,this.region.decode(c(t,this.element._highlight)),this.element.refresh()}},{key:"appendHighlightTo",value:function(t){this.highlighted=t.append("g").attr("class","highlighted")}},{key:"updateHighlight",value:function(){var t=this,e=this.highlighted.selectAll("rect").data(this.region.segments);e.enter().append("rect").style("opacity",.5).attr("fill","rgba(255, 235, 59, 0.8)").style("pointer-events","none").merge(e).attr("height",this.element._height).attr("x",(function(e){return t.element.getXFromSeqPosition(e.start)})).attr("width",(function(e){return t.element.getSingleBaseWidth()*(e.end-e.start+1)})),e.exit().remove()}},{key:"max",set:function(t){this.region.max=t}}])&&l(e.prototype,n),i&&l(e,i),t}();function u(t){var e=document.createElement("div");return e.style.borderColor="",e.style.borderColor=t,""!==e.style.borderColor}var f=function(t){return t};function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.timeStampWheelOutside=0,this.resetScrollableTimeout=null}var e,n,i;return e=t,(n=[{key:"setElementScrollable",value:function(t){this.element.setAttribute("scrollable",t)}},{key:"startResetScrollableTimer",value:function(){var t=this;this.resetScrollableTimeout&&clearTimeout(this.resetScrollableTimeout),this.resetScrollableTimeout=setTimeout((function(){t.setElementScrollable(!0),t.resetScrollableTimeout=null}),400)}},{key:"blockScroll",value:function(t){this.timeStampWheelOutside=t,this.setElementScrollable(!1),this.startResetScrollableTimer()}},{key:"isWheelEventInsideElement",value:function(t,e){var n=this.element.getBoundingClientRect(),i=n.height,r=n.width,o=n.x,a=n.y;return t>o&&e<o+r&&e>a&&e<a+i}},{key:"wheel",value:function(t){var e=t.x,n=t.y,i=t.timeStamp;this.isWheelEventInsideElement(e,n)?i<this.timeStampWheelOutside+400?this.blockScroll(i):this.setElementScrollable(!0):this.blockScroll(i)}}])&&g(e.prototype,n),i&&g(e,i),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=b(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function y(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function S(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}function k(t,e,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function x(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=j(t);if(e){var r=j(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return A(this,n)}}function A(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T=["left","right","top","bottom"],R=T.map((function(t){return"margin".concat(t)})),C=s,P=h,N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[],n=[];if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var i=t.split(",").map((function(t){return t.split(":")}));if(i.length<2)throw new Error("There should be at least 2 points to create a scale");e=i.map((function(t){var e=t[0].trim().toUpperCase();if(!u(e))throw new Error("The color '".concat(e," is not valid'"));return e})),n=i.map((function(t,e){var n=parseFloat(t[1]);if(Number.isNaN(n))throw new Error("The second part of every point should be a number. Error in point ".concat(e,": ").concat(t));return n}))}return{range:e,domain:n}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.keyFormatter,i=void 0===n?f:n,r=e.valueFormatter,o=void 0===r?f:r;if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var a=t.split(",").map((function(t){return t.split(":")})),s={};return a.forEach((function(t){if(2!==t.length)throw new Error("Bad block: ".concat(t.join(":"),"\n The blocks of the string should follow the format KEY:VALUE"));s[i(t[0])]=o(t[1])})),s}return{}},q=p,H=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{initialValue:{top:0,bottom:0,left:0,right:0}},i=function(t){x(i,t);var e=O(i);function i(){var t;return _(this,i),(t=e.call(this)).margin=n.initialValue,t}return S(i,[{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&R.includes(t)&&(this[t]=n),k(j(i.prototype),"attributeChangedCallback",this).call(this,t,e,n)}}],[{key:"observedAttributes",get:function(){return[].concat(y(k(j(i),"observedAttributes",this)),y(R))}}]),i}(t),r=m(T);try{var o=function(){var t=e.value;Object.defineProperty(i.prototype,"margin".concat(t),{get:function(){return this.margin[t]||0},set:function(e){this.margin[t]=+e}})};for(r.s();!(e=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}return i}},573:function(t,e,n){"use strict";var i=n(570),r=n(571),o=n(587);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return g(t,arguments,m(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),d(i,t)})(t)}function g(t,e,n){return(g=p()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&d(r,n.prototype),r}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(y,t);var e,n,a,l,f,g=(e=y,n=p(),function(){var t,i=m(e);if(n){var r=m(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return h(this,t)});function y(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),t=g.call(this),y._polyfillElementClosest(),t._updateScaleDomain=t._updateScaleDomain.bind(u(t)),t._initZoom=t._initZoom.bind(u(t)),t.zoomed=t.zoomed.bind(u(t)),t._applyZoomTranslation=t.applyZoomTranslation.bind(u(t)),t._resetEventHandler=t._resetEventHandler.bind(u(t));var e=!1;return t.applyZoomTranslation=function(){e||(e=!0,requestAnimationFrame((function(){e=!1,t._applyZoomTranslation()})))},t._onResize=t._onResize.bind(u(t)),t._listenForResize=t._listenForResize.bind(u(t)),t.trackHighlighter=new r.e({element:u(t),min:1}),t.scrollFilter=new r.c(u(t)),t.wheelListener=function(e){return t.scrollFilter.wheel(e)},t}return a=y,f=[{key:"_getClickCoords",value:function(){return i.event?[i.event.pageX,i.event.pageY]:null}},{key:"_polyfillElementClosest",value:function(){var t=this;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var n=t;do{if(n.matches(e))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null})}},{key:"observedAttributes",get:function(){return["displaystart","displayend","length","highlight"]}}],(l=[{key:"connectedCallback",value:function(){this.style.display="block",this.style.width="100%",this.width=this.offsetWidth,this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this)),this._length=this.getAttribute("length")?parseFloat(this.getAttribute("length")):0,this._displaystart=this.getAttribute("displaystart")?parseFloat(this.getAttribute("displaystart")):1,this._displayend=this.getAttribute("displayend")?parseFloat(this.getAttribute("displayend")):this.length,this._height=this.getAttribute("height")?Number(this.getAttribute("height")):44,this._highlightEvent=this.getAttribute("highlight-event")?this.getAttribute("highlight-event"):"onclick",this.trackHighlighter.setAttributesInElement(this),this._updateScaleDomain(),this._originXScale=this.xScale.copy(),this._initZoom(),this._listenForResize(),this.addEventListener("error",(function(t){console.error(t)})),this.addEventListener("click",this._resetEventHandler),this.hasAttribute("filter-scroll")&&document.addEventListener("wheel",this.wheelListener,{capture:!0})}},{key:"disconnectedCallback",value:function(){this.manager&&this.manager.unregister(this),this._ro?this._ro.unobserve(this):window.removeEventListener("resize",this._onResize),this.removeEventListener("click",this._resetEventHandler),document.removeEventListener("wheel",this.wheelListener)}},{key:"getWidthWithMargins",value:function(){return this.width?this.width-this.margin.left-this.margin.right:0}},{key:"_updateScaleDomain",value:function(){this.xScale=Object(i.scaleLinear)().domain([1,this._length+1]).range([0,this.getWidthWithMargins()])}},{key:"_initZoom",value:function(){var t=this;this._zoom=Object(i.zoom)().scaleExtent([1,1/0]).translateExtent([[0,0],[this.getWidthWithMargins(),0]]).extent([[0,0],[this.getWidthWithMargins(),0]]).filter((function(){if(!(i.event instanceof WheelEvent))return!0;if(t.hasAttribute("scroll-filter")){var e=t.getAttribute("scrollable");if(e)return"true"===e}return!t.hasAttribute("use-ctrl-to-zoom")||i.event.ctrlKey})).on("zoom",this.zoomed)}},{key:"setFloatAttribute",value:function(t,e){var n=parseFloat(e);this["_".concat(t)]=Number.isNaN(n)?e:n}},{key:"attributeChangedCallback",value:function(t,e,n){if("null"===n&&(n=null),e!==n){if(t.startsWith("highlight"))return void this.trackHighlighter.changedCallBack(t,n);this.setFloatAttribute(t,n),"length"===t&&(this._updateScaleDomain(),this._originXScale=this.xScale.copy()),this.applyZoomTranslation()}}},{key:"zoomed",value:function(){if(this.xScale=i.event.transform.rescaleX(this._originXScale),!this.dontDispatch){var t=s(this.xScale.domain(),2),e=t[0],n=t[1];this.dispatchEvent(new CustomEvent("change",{detail:{displaystart:Math.max(1,e),displayend:Math.min(this.length,Math.max(n-1,e+1))},bubbles:!0,cancelable:!0}))}}},{key:"applyZoomTranslation",value:function(){if(this.svg&&this._originXScale){var t=Math.max(1,this.length/(1+this._displayend-this._displaystart)),e=-this._originXScale(this._displaystart);this.dontDispatch=!0,this.svg.call(this.zoom.transform,i.zoomIdentity.scale(t).translate(e,0)),this.dontDispatch=!1,this.refresh()}}},{key:"_onResize",value:function(){this.width=this.offsetWidth,this._updateScaleDomain(),this._originXScale=this.xScale.copy(),this.svg&&this.svg.attr("width",this.width),this._zoom.scaleExtent([1,1/0]).translateExtent([[0,0],[this.getWidthWithMargins(),0]]),this.applyZoomTranslation()}},{key:"_listenForResize",value:function(){this._ro=new o.a(this._onResize),this._ro.observe(this)}},{key:"_resetEventHandler",value:function(t){t.target.closest(".feature")||this.dispatchEvent(this.createEvent("reset",null,!0))}},{key:"getXFromSeqPosition",value:function(t){return this.margin.left+this.xScale(t)}},{key:"getSingleBaseWidth",value:function(){return this.xScale(2)-this.xScale(1)}},{key:"createEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0;e&&(e=e.feature?e.feature:e);var l={eventtype:t,coords:y._getClickCoords(),feature:e,target:s};return n&&(e&&e.fragments?l.highlight=e.fragments.map((function(t){return"".concat(t.start,":").concat(t.end)})).join(","):i.event&&i.event.shiftKey&&this._highlight?l.highlight="".concat(this._highlight,",").concat(o,":").concat(a):l.highlight=o&&a?"".concat(o,":").concat(a):null),r&&(l.selectedid=e&&e.protvistaFeatureId),new CustomEvent("change",{detail:l,bubbles:!0,cancelable:!0})}},{key:"bindEvents",value:function(t,e){t.on("mouseover",(function(t,n,i){e.dispatchEvent(e.createEvent("mouseover",t,"onmouseover"===e._highlightEvent,!1,t.start,t.end,i[n]))})).on("mouseout",(function(){e.dispatchEvent(e.createEvent("mouseout",null,"onmouseover"===e._highlightEvent))})).on("click",(function(t,n,i){e.dispatchEvent(e.createEvent("click",t,"onclick"===e._highlightEvent,!0,t.start,t.end,i[n]))}))}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"height",set:function(t){this._height=t},get:function(){return this._height}},{key:"length",set:function(t){this._length=t,this.trackHighlighter.max=t},get:function(){return this._length}},{key:"xScale",get:function(){return this._xScale},set:function(t){this._xScale=t}},{key:"zoom",get:function(){return this._zoom}},{key:"svg",set:function(t){this._svg=t,t.call(this._zoom),this.applyZoomTranslation()},get:function(){return this._svg}},{key:"fixedHighlight",set:function(t){this.trackHighlighter.setFixedHighlight(t)}}])&&c(a.prototype,l),f&&c(a,f),y}(f(HTMLElement));e.a=Object(r.f)(y,{initialValue:{top:10,right:10,bottom:10,left:10}})},608:function(t,e,n){"use strict";var i=n(570),r=n(573);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n,i){return(l="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,o=h(t,e);if(o){if((r=Object.getOwnPropertyDescriptor(o,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(i,e,n);return!0})(t,e,n,i)}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=h(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(g,t);var e,n,o,h=f(g);function g(){return a(this,g),h.apply(this,arguments)}return e=g,o=[{key:"observedAttributes",get:function(){return r.a.observedAttributes.concat("highlightstart","highlightend")}}],(n=[{key:"connectedCallback",value:function(){var t=this;c(p(g.prototype),"connectedCallback",this).call(this),this.sequence=this.getAttribute("sequence"),this.sequence&&this._createSequence(),this.addEventListener("load",(function(e){t.data=e.detail.payload}))}},{key:"_getCharSize",value:function(){if(this.seq_g){var t=this.seq_g.select("text.base").node();if(t)this.chWidth=.8*t.getBBox().width,this.chHeight=1.6*t.getBBox().height;else{var e=this.seq_g.append("text").attr("class","base").text("T");this.chWidth=.8*e.node().getBBox().width,this.chHeight=1.6*e.node().getBBox().height,e.remove()}}}},{key:"_createSequence",value:function(){!function(t,e,n,i,r){if(!l(t,e,n,i||t)&&r)throw new Error("failed to set property")}(p(g.prototype),"svg",Object(i.select)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",this._height),this,!0),this.seq_bg=c(p(g.prototype),"svg",this).append("g").attr("class","background"),this.axis=c(p(g.prototype),"svg",this).append("g").attr("class","x axis"),this.seq_g=c(p(g.prototype),"svg",this).append("g").attr("class","sequence").attr("transform","translate(0,".concat(.75*this._height,")")),this.trackHighlighter.appendHighlightTo(this.svg),this.refresh()}},{key:"refresh",value:function(){var t=this;if(this._getCharSize(),this.axis){var e=this.getSingleBaseWidth(),n=e-this.chWidth,r=e/2,o=Math.round(Math.max(0,this._displaystart-2)),a=Math.round(Math.min(this.sequence.length,this._displayend+1)),s=n<0?[]:this.sequence.slice(o,a).split("").map((function(t,e){return{start:1+o+e,end:1+o+e,aa:t}}));this.height>this.chHeight&&(this.xAxis=Object(i.axisBottom)(this.xScale).tickFormat((function(t){return Number.isInteger(t)?t:""})).ticks(3,"s"),this.axis.call(this.xAxis)),this.axis.attr("transform","translate(".concat(this.margin.left+r,",0)")),this.axis.select(".domain").remove(),this.axis.selectAll(".tick line").remove(),this.bases=this.seq_g.selectAll("text.base").data(s,(function(t){return t.start})),this.bases.enter().append("text").attr("class","base").attr("text-anchor","middle").attr("x",(function(e){return t.getXFromSeqPosition(e.start)+r})).text((function(t){return t.aa})).style("pointer-events","none").style("font-family","monospace"),this.bases.exit().remove(),this.bases.attr("x",(function(e){return t.getXFromSeqPosition(e.start)+r})),this.background=this.seq_bg.selectAll("rect.base_bg").data(s,(function(t){return t.start})),this.background.enter().append("rect").attr("class","base_bg feature").attr("height",this._height).merge(this.background).attr("width",e).attr("fill",(function(t){return Math.round(t.start)%2?"#ccc":"#eee"})).attr("x",(function(e){return t.getXFromSeqPosition(e.start)})).call(this.bindEvents,this),this.background.exit().remove(),this.seq_g.style("opacity",Math.min(1,n)),this.background.style("opacity",Math.min(1,n)),this._updateHighlight()}}},{key:"_updateHighlight",value:function(){this.trackHighlighter.updateHighlight()}},{key:"data",get:function(){return this.sequence},set:function(t){"string"==typeof t?this.sequence=t:"sequence"in t&&(this.sequence=t.sequence),this.sequence&&!c(p(g.prototype),"svg",this)?this._createSequence():this.refresh()}}])&&s(e.prototype,n),o&&s(e,o),g}(r.a);e.a=d}}]);