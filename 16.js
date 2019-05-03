(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{139:function(t,n,e){"use strict";e.r(n);var r=e(1),i=e.n(r),a=e(454),o=e(453),c=e(437),l=e(438),s=function t(n,e,r){if(!(e.length<=0)){var i=!0,a=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var s=c.value;if(s.name===e[0])return void t(s.children,e.slice(1),s)}}catch(t){a=!0,o=t}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}var u={name:e[0],selected:!1,parent:r,children:[]};n.push(u),t(u.children,e.slice(1),u)}};function u(t,n){var e=t.split(", ");s(n,e)}function d(t,n,e){"number"==typeof e?e++:e=1;var r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;l.depth=e,n(l),l.children.length>0&&d(l.children,n,e)}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}}var f,p,b=e(433);function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(t){return f=[],p={},fetch("https://www.ebi.ac.uk/proteins/api/proteins/interaction/".concat(t,".json")).then(function(t){return t.json().then(function(t){return function(t){t=t.map(function(t){return t.interactions||(t.interactions=[]),t});var n=!0,e=!1,r=void 0;try{for(var i,a=function(){var n=i.value,e=!0,r=!1,a=void 0;try{for(var o,c=function(){var e=o.value,r=t.find(function(t){return t.accession===e.id});if(r&&!r.interactions.find(function(t){return t.id===n.accession})){var i=Object(b.a)(e);i.id=n.accession,r.interactions.push(i)}},l=n.interactions[Symbol.iterator]();!(e=(o=l.next()).done);e=!0)c()}catch(t){r=!0,a=t}finally{try{e||null==l.return||l.return()}finally{if(r)throw a}}},o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)a()}catch(t){e=!0,r=t}finally{try{n||null==o.return||o.return()}finally{if(e)throw r}}var c=!0,l=!1,s=void 0;try{for(var d,v=t[Symbol.iterator]();!(c=(d=v.next()).done);c=!0){var h=d.value;h.filterTerms=[];var m=[],w=!0,g=!1,x=void 0;try{for(var O,k=function(){var n=O.value;"SELF"===n.interactionType?(n.source=h.accession,n.id=h.accession,y(n,m)):t.some(function(t){return t.accession===n.id})&&(n.source=h.accession,y(n,m))},j=h.interactions[Symbol.iterator]();!(w=(O=j.next()).done);w=!0)k()}catch(t){g=!0,x=t}finally{try{w||null==j.return||j.return()}finally{if(g)throw x}}if(h.interactions=m,h.subcellularLocations){var E=!0,_=!1,S=void 0;try{for(var F,A=h.subcellularLocations[Symbol.iterator]();!(E=(F=A.next()).done);E=!0){var T=F.value;if(T.locations){var I=!0,L=!1,R=void 0;try{for(var C,P=T.locations[Symbol.iterator]();!(I=(C=P.next()).done);I=!0){var N=C.value;u(N.location.value,f);var z=N.location.value.split(", ");h.filterTerms=h.filterTerms.concat(z)}}catch(t){L=!0,R=t}finally{try{I||null==P.return||P.return()}finally{if(L)throw R}}}}}catch(t){_=!0,S=t}finally{try{E||null==A.return||A.return()}finally{if(_)throw S}}}if(h.diseases){var D=!0,M=!1,Z=void 0;try{for(var H,J=h.diseases[Symbol.iterator]();!(D=(H=J.next()).done);D=!0){var U=H.value;U.diseaseId&&(p[U.diseaseId]={name:U.diseaseId,selected:!1},h.filterTerms.push(U.diseaseId))}}catch(t){M=!0,Z=t}finally{try{D||null==J.return||J.return()}finally{if(M)throw Z}}}}}catch(t){l=!0,s=t}finally{try{c||null==v.return||v.return()}finally{if(l)throw s}}return t}(t)})})}function y(t,n){var e=n.find(function(n){return t.id===n.id});e?t.isoform&&(e.isoform=t.isoform):n.push(t)}function m(t){for(var n=[],e=Object.entries(t),r=0;r<e.length;r++){var i=v(e[r],2),a=(i[0],i[1]);n.push(a)}return n}function w(){return[{name:"subcellularLocations",label:"Subcellular location",type:"tree",items:f},{name:"diseases",label:"Diseases",items:m(p)}]}e(435);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function k(t){var n="function"==typeof Map?new Map:void 0;return(k=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return j(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),E(r,t)})(t)}function j(t,n,e){return(j=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&E(i,e.prototype),i}).apply(null,arguments)}function E(t,n){return(E=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S,F=[];function A(t,n){if(t){var e="",r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;l.dbReference&&(e+='<p><a href="//www.uniprot.org/uniprot/'.concat(n,"#").concat(l.acronym,'" target="_blank">').concat(l.diseaseId,"</a></p>"))}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return e}return"N/A"}function T(t){if(t){var n='<ul class="tree-list">',e=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;if(l.locations){var s=!0,f=!1,p=void 0;try{for(var b,v=l.locations[Symbol.iterator]();!(s=(b=v.next()).done);s=!0){u(b.value.location.value,e)}}catch(t){f=!0,p=t}finally{try{s||null==v.return||v.return()}finally{if(f)throw p}}}}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return d(e,function(t){return n+='<li style="margin-left:'.concat(t.depth,'em">').concat(t.name,"</li>")}),"".concat(n,"</ul>")}return"N/A"}function I(t){return S.find(function(n){return n.accession===t})}function L(){var t=F.filter(function(t){return t.selected}),n=[];Object(a.c)(".cell").attr("opacity",function(e){var r=I(e.source),i=I(e.id),a=function(t,n,e){if(e.length<=0)return!0;var r=Object(c.a)(t.filterTerms,n.filterTerms);return Object(l.a)(r,e.map(function(t){return t.name})).length===e.length}(r,i,t);return a&&(n.push(r.accession),n.push(i.accession)),a?1:.1}),Object(a.c)(".interaction-viewer text").attr("fill-opacity",function(t){return n.includes(t.accession)?1:.1})}function R(){for(var t=0;t<F.length;t++){var n=F[t];Object(a.b)("#".concat(C(n.name))).classed("active",n.selected)}L()}function C(t){return t.toLowerCase().replace(/\s|,|^\d/g,"_")}function P(t,n){var e;Object(a.c)(".dropdown-pane").style("visibility","hidden"),F.filter(function(t){return t.type===n}).forEach(function(t){return t.selected=!1}),t.selected=!t.selected,Object(a.b)("[data-toggle=iv_".concat(n,"]")).text((e=t.name).length>25?e.substr(0,24)+"...":e),R()}function N(){var t="#".concat(Object(a.b)(this).attr("data-toggle")),n=Object(a.b)(t).style("visibility");Object(a.b)(".dropdown-pane").style("visibility","hidden"),Object(a.b)(t).style("visibility","hidden"===n?"visible":"hidden")}var z=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),O(this,_(n).call(this))}var e,r,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&E(t,n)}(n,k(HTMLElement)),e=n,i=[{key:"observedAttributes",get:function(){return["accession"]}}],(r=[{key:"connectedCallback",value:function(){this._accession=this.getAttribute("accession"),this.render()}},{key:"attributeChangedCallback",value:function(t,n,e){"accession"===t&&null!=n&&n!=e&&(this._accession=e,this.render())}},{key:"render",value:function(){var t=this;this._accession&&(this.style.display="block",this.style.minHeight="6em",Object(a.b)(this).select(".interaction-title").remove(),Object(a.b)(this).select("svg").remove(),Object(a.b)(this).select(".interaction-tooltip").remove(),Object(a.b)(this).append("div").attr("class","loader"),h(this._accession).then(function(n){!function(t,n,e){Object(a.b)(t).select(".loader").remove(),S=e;var r=Object(a.b)(t).append("div").attr("class","interaction-tooltip").style("display","none").style("opacity",0);r.append("span").attr("class","close-interaction-tooltip").text("Close ✖").on("click",function(){Object(a.c)(".interaction-tooltip").style("opacity",0).style("display","none")}),r.append("div").attr("class","tooltip-content"),Object(a.b)(t).append("p").attr("class","interaction-title").text("".concat(n," has binary interactions with ").concat(S.length-1," proteins")),function(t,n){Object(a.b)(t).selectAll(".interaction-filter-container").remove();var e=Object(a.b)(t).append("div").attr("class","interaction-filter-container"),r=!0,i=!1,o=void 0;try{for(var c,l=function(){var t=c.value;if(t.items.length>0)if((u=e.append("div").attr("class","interaction-filter")).append("a").text(t.label).attr("class","button dropdown").attr("data-toggle","iv_".concat(t.name)).on("click",N),(f=u.append("ul").attr("id","iv_".concat(t.name)).attr("class","dropdown-pane")).append("li").text("None").on("click",function(){return n=t.name,e=t.label,Object(a.c)(".dropdown-pane").style("visibility","hidden"),F.filter(function(t){return t.type===n}).forEach(function(t){return t.selected=!1}),Object(a.b)("[data-toggle=iv_".concat(n,"]")).text(e),void R();var n,e}),"tree"===t.type)d(t.items,function(n){n.type=t.name,F.push(n),f.datum(n).append("li").style("padding-left",n.depth+"em").attr("id",function(t){return C(t.name)}).text(function(t){return t.name}).on("click",function(n){return P(n,t.name)})});else{var n=!0,r=!1,i=void 0;try{for(var o,l=t.items[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;s.type=t.name,F.push(s)}}catch(t){r=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}f.selectAll("li").data(t.items).enter().append("li").attr("id",function(t){return C(t.name)}).text(function(t){return t.name.toLowerCase()}).on("click",function(n){P(n,t.name)})}},s=n[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var u,f;l()}}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}e.append("button").attr("class","iv_reset").text("Reset filters").on("click",function(t){return F.filter(function(t){return t.selected}).forEach(function(t){return t.selected=!1}),w().forEach(function(t){Object(a.b)("[data-toggle=iv_".concat(t.name,"]")).text(t.label)}),R(),!1})}(t,w());var i={top:100,right:0,bottom:10,left:100},c=18*S.length,l=c,s=Object(o.a)().rangeRound([0,c]),u=Object(o.b)().range([.2,1]),f=Object(a.b)(t).append("svg").attr("width",c+i.left+i.right).attr("height",l+i.top+i.bottom).attr("class","interaction-viewer").append("g").attr("class","interaction-viewer-group").attr("transform","translate("+i.left+","+i.top+")");s.domain(S.map(function(t){return t.accession})),u.domain([0,10]);var p=f.selectAll(".interaction-row").data(S).enter().append("g").attr("class","interaction-row").attr("transform",function(t){return"translate(0,".concat(s(t.accession),")")}).each(function(t){if(!t.interactions)return;var n=Object(a.b)(this).selectAll(".cell").data(t.interactions);n.enter().append("circle").attr("class","cell").attr("cx",function(t){return s(t.id)+s.bandwidth()/2}).attr("cy",function(t){return s.bandwidth()/2}).attr("r",s.bandwidth()/3).style("fill-opacity",function(t){return u(t.experiments)}).style("display",function(n){return s(t.accession)<s(n.id)?"none":""}).on("click",y).on("mouseover",h).on("mouseout",g),n.exit().remove()});p.append("rect").attr("x",-i.left).attr("width",i.left).attr("height",s.bandwidth()).attr("class","text-highlight"),p.append("text").attr("y",s.bandwidth()/2).attr("dy",".32em").attr("text-anchor","end").text(function(t,n){return S[n].name}).attr("class",function(t,e){return S[e].accession===n?"main-accession":""});var b=f.selectAll(".column").data(S).enter().append("g").attr("class","column").attr("transform",function(t){return"translate(".concat(s(t.accession),", 0)rotate(-90)")});b.append("rect").attr("x",6).attr("width",i.top).attr("height",s.bandwidth()).attr("class","text-highlight"),b.append("text").attr("x",6).attr("y",s.bandwidth()/2).attr("dy",".32em").attr("text-anchor","start").text(function(t,n){return S[n].name}).attr("class",function(t,e){return S[e].accession===n?"main-accession":""});var v="".concat(s(S[1].accession)," 0,").concat(s(S[S.length-1].accession)," 0,").concat(s(S[S.length-1].accession)," ").concat(s(S[S.length-1].accession),",").concat(s(S[0].accession)," 0");function h(t){Object(a.b)(this).classed("active-cell",!0),Object(a.c)(".interaction-row").classed("active",function(n){return n.accession===t.id}),Object(a.c)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0").attr("x1",0).attr("y1",s(t.source)+s.bandwidth()/2).attr("x2",s(t.id)).attr("y2",s(t.source)+s.bandwidth()/2),Object(a.c)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0").attr("x1",s(t.id)+s.bandwidth()/2).attr("y1",0).attr("x2",s(t.id)+s.bandwidth()/2).attr("y2",s(t.source))}function y(n){!function(t,n){t.html("");var e=S.find(function(t){return t.accession===n.source}),r=S.find(function(t){return t.accession===n.id});t.append("h3").text("Interaction"),t.append("p").append("a").attr("href",m(n.interactor1,n.interactor2)).attr("target","_blank").text("Confirmed by ".concat(n.experiments," experiment(s)"));var i=t.append("table").attr("class","interaction-viewer-table"),a=i.append("tr");a.append("th"),a.append("th").text("Interactor 1"),a.append("th").text("Interactor 2");var o=i.append("tr");o.append("td").text("Name").attr("class","interaction-viewer-table_row-header"),o.append("td").text("".concat(e.name)),o.append("td").text("".concat(r.name));var c=i.append("tr");c.append("td").text("UniProtKB").attr("class","interaction-viewer-table_row-header"),c.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(e.accession)).text("".concat(e.accession)),c.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(r.accession)).text("".concat(r.accession));var l=i.append("tr");l.append("td").text("Pathology").attr("class","interaction-viewer-table_row-header"),l.append("td").html(A(e.diseases,e.accession)),l.append("td").html(A(r.diseases,r.accession));var s=i.append("tr");s.append("td").text("Subcellular location").attr("class","interaction-viewer-table_row-header"),s.append("td").html(T(e.subcellularLocations)),s.append("td").html(T(r.subcellularLocations));var u=i.append("tr");u.append("td").text("IntAct").attr("class","interaction-viewer-table_row-header"),u.append("td").attr("colspan",2).append("a").attr("href",m(n.interactor1,n.interactor2)).attr("target","_blank").text("".concat(n.interactor1,";").concat(n.interactor2))}(Object(a.c)(".tooltip-content"),n),r.style("opacity",.9).style("display","inline").style("left",Object(a.a)(t)[0]+10+"px").style("top",Object(a.a)(t)[1]-15+"px")}function m(t,n){return"//www.ebi.ac.uk/intact/query/id:".concat(t," AND id:").concat(n)}function g(){Object(a.c)("g").classed("active",!1),Object(a.c)("circle").classed("active-cell",!1),Object(a.c)(".active-row").remove()}f.append("polyline").attr("points",v).attr("class","hidden-side").attr("transform",function(t){return"translate(".concat(s(S[1].accession),", 0)")})}(t,t._accession,n)}))}},{key:"accession",set:function(t){this._accession=t},get:function(){return this._accession}}])&&x(e.prototype,r),i&&x(e,i),n}(),D=e(327);n.default=function(t){return Object(D.a)("interaction-viewer",z),i.a.createElement(r.Fragment,null,i.a.createElement("interaction-viewer",{accession:"O60941"}))}},327:function(t,n,e){"use strict";n.a=function(t,n){window.customElements.get(t)||window.customElements.define(t,n)}},435:function(t,n,e){var r=e(436);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(92)(r,i);r.locals&&(t.exports=r.locals)},436:function(t,n,e){(t.exports=e(91)(!1)).push([t.i,"@charset \"UTF-8\";\ninteraction-viewer {\n    position: relative;\n}\n\ninteraction-viewer text {\n    font-family: \"Open Sans\", sans-serif;\n    fill: black;\n    opacity: .75;\n    font-size: 12px;\n}\n\ninteraction-viewer .active text {\n    opacity: 1;\n}\n\ninteraction-viewer .active-row {\n    stroke: #4A90E2;\n}\n\ninteraction-viewer .interaction-tooltip {\n    z-index: 99999;\n    position: absolute;\n    background: #FFFFFF;\n    padding: 0.5em 1em;\n    border: 1px #979797 solid;\n    box-shadow: 2px 2px 2px #333333;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.25s;\n    min-width: 36em;\n}\n\ninteraction-viewer .interaction-tooltip .close-interaction-tooltip {\n    cursor: pointer;\n    float: right;\n    margin-bottom: .8em;\n}\n\ninteraction-viewer .interaction-tooltip .tooltip-content {\n    clear: both;\n}\n\ninteraction-viewer .interaction-filter-container {\n    text-align: left;\n}\n\ninteraction-viewer .interaction-filter-container #filter-display .filter-selected {\n    margin: .2em .5em;\n    padding: .3em .1em;\n    background-color: #F2F2F2;\n    border: 1px solid #E8E8E8;\n    cursor: pointer;\n    white-space: nowrap;\n    display: inline-block;\n}\n\ninteraction-viewer .interaction-filter-container #filter-display .filter-selected::after {\n    content: '\\2716';\n    margin: 0 .3em;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter {\n    vertical-align: top;\n    margin-bottom: .5em;\n    display: inline-block;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul {\n    border: #E8E8E8 1px solid;\n    max-height: 15em;\n    overflow-y: auto;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li {\n    cursor: pointer;\n    padding: .5em .5em;\n    border-bottom: #E8E8E8 1px solid;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li:hover {\n    background-color: #F2F2F2;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li.active {\n    font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .cell {\n    fill: #4A90E2;\n}\n\ninteraction-viewer .interaction-viewer .cell.active-cell {\n    r: 0.8em;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer .hidden-side {\n    fill: #E8E8E8;\n}\n\ninteraction-viewer .interaction-viewer .main-accession {\n    font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .text-highlight {\n    fill: #FFF;\n    opacity: 0;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer-table tr:nth-child(even) {\n    background: #F2F2F2;\n}\n\ninteraction-viewer .interaction-viewer-table td,\ninteraction-viewer .interaction-viewer-table th {\n    padding: .5em;\n    text-align: center;\n}\n\ninteraction-viewer .interaction-viewer-table th {\n    background-color: #E8E8E8;\n    white-space: nowrap;\n}\n\ninteraction-viewer .interaction-viewer-table .interaction-viewer-table_row-header {\n    font-weight: bold;\n    text-align: right;\n}\n\ninteraction-viewer .button {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 1em 0 0;\n    padding: 0.85em 1em;\n    -webkit-appearance: none;\n    border: 1px solid transparent;\n    border-radius: 0;\n    -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;\n    transition: background-color 0.25s ease-out, color 0.25s ease-out;\n    line-height: 1;\n    text-align: center;\n    cursor: pointer;\n    background-color: #F2F2F2 !important;\n    color: #3a343a;\n    border: 1px solid #E8E8E8;\n}\n\ninteraction-viewer .iv_reset {\n    display: block;\n}\n\ninteraction-viewer .button:hover {\n    color: #3a343a;\n}\n\ninteraction-viewer .button.dropdown::after {\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    content: '';\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-color: #3a343a transparent transparent;\n    position: relative;\n    top: 0.4em;\n    display: inline-block;\n    float: right;\n    margin-left: 1em;\n}\n\ninteraction-viewer .dropdown-pane {\n    position: absolute;\n    z-index: 10;\n    display: block;\n    width: 300px;\n    padding: 1rem;\n    visibility: hidden;\n    border: 1px solid #cacaca;\n    border-radius: 0;\n    background-color: #fefefe;\n}\n\ninteraction-viewer .tree-list {\n    text-align: left;\n    list-style: none;\n}\n\ninteraction-viewer .tree-list li {\n    margin: .5em 0;\n}\n\n.loader,\n.loader:before,\n.loader:after {\n    background: #cbcbcb;\n    -webkit-animation: load1 1s infinite ease-in-out;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n}\n\n.loader {\n    color: #cbcbcb;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n.loader:before,\n.loader:after {\n    position: absolute;\n    top: 0;\n    content: '';\n}\n\n.loader:before {\n    left: -1.5em;\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.loader:after {\n    left: 1.5em;\n}\n\n@-webkit-keyframes load1 {\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 0;\n        height: 4em;\n    }\n    40% {\n        box-shadow: 0 -2em;\n        height: 5em;\n    }\n}\n\n@keyframes load1 {\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 0;\n        height: 4em;\n    }\n    40% {\n        box-shadow: 0 -2em;\n        height: 5em;\n    }\n}",""])}}]);