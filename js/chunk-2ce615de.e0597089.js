(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ce615de"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(n(t))}},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var n=r("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"10c3":function(t,e,r){"use strict";var n=r("cd43"),i=r.n(n);i.a},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),a=r("d039"),o=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&n(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),a=r("7dd0"),o="String Iterator",s=i.set,c=i.getterFor(o);a(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4c38":function(t,e,r){"use strict";var n=r("ef91"),i=r.n(n);i.a},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),a=r("9bdd"),o=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,d,f,p,b=i(t),v="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,y=u(b),_=0;if(m&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=s(b.length),r=new v(e);e>_;_++)p=m?g(b[_],_):b[_],c(r,_,p);else for(d=y.call(b),f=d.next,r=new v;!(l=f.call(d)).done;_++)p=m?a(d,g,[l.value,_],!0):l.value,c(r,_,p);return r.length=_,r}},"658f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(e){t.isLoading=e}}}),r("section",{staticClass:"py-5 mb-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb mb-0"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/products"}},[t._v("全部產品")])],1),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.product.title)+" ")])])])]),r("div",{staticClass:"row no-gutters bg-light"},[r("div",{staticClass:"col-md-6 mb-md-0 p-md-4"},[r("div",{staticClass:"h-100 d-flex justify-content-center"},[r("img",{staticClass:"product-img",attrs:{src:t.product.imageUrl,alt:t.product.title}})])]),r("div",{staticClass:"col-md-6 p-4 pl-md-0"},[r("div",{staticClass:"h-100 d-flex flex-column"},[r("h3",{staticClass:"font-weight-bold py-3"},[t._v(t._s(t.product.title))]),r("h3",{staticClass:"pb-3"},[t._v("NT$"+t._s(t.product.price)+"/ "),r("small",[t._v(t._s(t.product.unit))])]),r("p",{staticClass:"pr-5"},[t._v(" "+t._s(t.product.description)+" ")]),t.product.options.match?r("ul",{staticClass:"list-unstyled d-flex"},t._l(t.product.options.match,(function(e,n){return r("li",{key:n+2,staticClass:"mr-2"},[r("span",{staticClass:"badge badge-pill badge-info"},[t._v(" "+t._s(e)+" ")])])})),0):t._e(),"散裝"==t.product.options.packing?r("div",[t._m(0),t._m(1)]):r("div",[t._m(2),t._m(3)]),r("div",{staticClass:"d-flex mt-auto"},[r("input",{staticClass:"text-center num-control-input",attrs:{type:"number",size:"1",value:"1",min:"1"}}),r("button",{staticClass:"btn btn-primary rounded-0 p-2 ml-3",attrs:{type:"button",disabled:t.status.loadingItem===t.product.id},on:{click:function(e){return e.preventDefault(),t.addToCart(t.product.id,t.product.title)}}},[t.status.loadingItem===t.product.id?r("i",{staticClass:"fas fa-circle-notch fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])]),r("div",{staticClass:"p-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-8 col-12"},[r("div",{staticClass:"mb-4"},[t._m(4),r("div",{domProps:{innerHTML:t._s(t.product.content)}})]),t.product.options.recipe?r("div",{staticClass:"mb-4"},[t._m(5),r("div",{domProps:{innerHTML:t._s(t.product.options.recipe)}})]):r("div",{staticClass:"mb-4"})])])])])]),r("section",{staticClass:"related container mb-5 px-5"},[r("h3",{staticClass:"font-weight-bold mb-4"},[t._v("再加點...")]),r("Related",{attrs:{"swiper-list":t.selected},on:{update:t.refreshPage}})],1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h6",{staticClass:"text-danger font-weight-bold"},[r("i",{staticClass:"fas fa-info-circle"}),t._v(" 下單重點 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("span",{staticClass:"text-danger font-weight-bold"},[t._v("散裝")]),t._v(" ，最低出貨量為10g，也就是一單位為10g "),r("br"),t._v(" 若需要20g，商品數量請選擇2個，出貨時會幫你裝成一袋，以此類推")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h6",{staticClass:"text-danger font-weight-bold"},[r("i",{staticClass:"fas fa-info-circle"}),t._v(" 下單重點 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("span",{staticClass:"text-danger font-weight-bold"},[t._v("袋裝")]),t._v(" ，一袋為40g "),r("br"),t._v(" 當日清晨採收，保存最佳香氣 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"pb-3"},[r("span",{staticClass:"text-underline"},[t._v("商品資訊")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"pb-3"},[r("span",{staticClass:"text-underline"},[t._v("料理小撇步")])])}],a=(r("99af"),r("a434"),r("6b75"));function o(t){if(Array.isArray(t))return Object(a["a"])(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=r("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return o(t)||s(t)||Object(c["a"])(t)||u()}var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.swiperList,(function(e){return r("swiper-slide",{key:e.id+"1"},[r("div",{staticClass:"card border-0",on:{click:function(r){return t.changePage(e.id)}}},[r("div",{staticClass:"text-decoration-none"},[r("div",{staticClass:"card-img bg-cover d-flex flex-column\n          justify-content-end p-lg-3 p-md-5 p-6 rounded-0",style:{backgroundImage:"url("+e.imageUrl[0]+")"}}),r("div",{staticClass:"card-body text-center p-2"},[r("div",{staticClass:"position-relative"},[r("span",{staticClass:"badge badge-secondary",staticStyle:{position:"absolute",top:"0",right:"0"}},[t._v(" "+t._s(e.category)+" ")]),r("h4",{staticClass:"card-title mb-1 text-primary-dark font-weight-bold"},[t._v(" "+t._s(e.title)+" ")])]),r("p",{staticClass:"card-text text-primary"},[t._v(" NT$ "+t._s(e.price)+" / "+t._s(e.unit)+" ")])])])])])})),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},f=[],p={data:function(){return{swiperOption:{slidesPerView:"auto",spaceBetween:16,speed:1200,allowTouchMove:!0,autoplay:{delay:2700,disableOnInteraction:!1,stopOnLastSlide:!0},pagination:{el:".swiper-pagination",clickable:!0}}}},props:{swiperList:{}},methods:{changePage:function(t){this.$emit("update",t)}}},b=p,v=(r("10c3"),r("2877")),h=Object(v["a"])(b,d,f,!1,null,"30f5b8d7",null),g=h.exports,m={data:function(){return{product:{options:{match:[]}},quantity:1,status:{loadingItem:""},products:[],tempData:[],selected:[],page_id:"",errorData:[],isLoading:!1}},components:{Related:g},created:function(){this.page_id=this.$route.params.id,this.getProduct(this.page_id)},methods:{addToCart:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.status.loadingItem=t;var i="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/shopping"),a={product:t,quantity:n};this.$http.post(i,a).then((function(){r.$toast.success("".concat(e,"加入購物車")),r.$bus.$emit("update-total"),r.status.loadingItem=""})).catch((function(t){var e=t.response.data.errors;r.$toast.error("".concat(e)),r.status.loadingItem=""}))},getProduct:function(t){var e=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/product/").concat(t)).then((function(t){e.product=t.data.data,e.isLoading=!1})).catch((function(){e.$toast.error("無法取得資料，請重新整理"),e.isLoading=!1})),this.getProducts()},getProducts:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("326aaf6a-8ca5-4a46-b815-11a755b4a30c","/ec/products");this.$http.get(e).then((function(e){t.products=e.data.data,t.tempData=l(t.products),t.filterId()})).catch((function(){t.$toast.error("無法取得資料，請重新整理")}))},filterId:function(){for(var t=0;t<this.tempData.length;t+=1)this.tempData[t].id===this.page_id&&this.tempData.splice(t,1);this.randomAry()},randomAry:function(){for(var t=0;t<6;t+=1){var e=Math.floor(Math.random()*this.tempData.length);this.selected.push(this.tempData.splice(e,1)[0])}},refreshPage:function(t){$("html, body").animate({scrollTop:0},500),this.page_id=t,this.selected=[],this.getProduct(t)}}},y=m,_=(r("4c38"),Object(v["a"])(y,n,i,!1,null,"2b833bdc",null));e["default"]=_.exports},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),o=r("861d"),s=r("7b0b"),c=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),b=f("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!i((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=d("concat"),y=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:a(t)},_=!g||!m;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,i,a,o=s(this),d=l(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?o:arguments[e],y(a)){if(i=c(a.length),f+i>v)throw TypeError(h);for(r=0;r<i;r++,f++)r in a&&u(d,f,a[r])}else{if(f>=v)throw TypeError(h);u(d,f++,a)}return d.length=f,d}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),b=r("825a"),v=r("7b0b"),h=r("fc6a"),g=r("c04e"),m=r("5c6c"),y=r("7c73"),_=r("df75"),w=r("241c"),C=r("057f"),S=r("7418"),x=r("06cf"),O=r("9bf2"),$=r("d1e7"),j=r("9112"),P=r("6eeb"),A=r("5692"),E=r("f772"),k=r("d012"),I=r("90e3"),T=r("b622"),L=r("e538"),D=r("746f"),M=r("d44e"),N=r("69f3"),R=r("b727").forEach,F=E("hidden"),J="Symbol",U="prototype",q=T("toPrimitive"),H=N.set,z=N.getterFor(J),B=Object[U],Q=i.Symbol,V=a("JSON","stringify"),W=x.f,G=O.f,K=C.f,X=$.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=i.QObject,it=!nt||!nt[U]||!nt[U].findChild,at=s&&l((function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(B,e);n&&delete B[e],G(t,e,r),n&&t!==B&&G(B,e,n)}:G,ot=function(t,e){var r=Y[t]=y(Q[U]);return H(r,{type:J,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,r){t===B&&ct(Z,e,r),b(t);var n=g(e,!0);return b(r),d(Y,n)?(r.enumerable?(d(t,F)&&t[F][n]&&(t[F][n]=!1),r=y(r,{enumerable:m(0,!1)})):(d(t,F)||G(t,F,m(1,{})),t[F][n]=!0),at(t,n,r)):G(t,n,r)},ut=function(t,e){b(t);var r=h(e),n=_(r).concat(bt(r));return R(n,(function(e){s&&!dt.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===B&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,F)&&this[F][e])||r)},ft=function(t,e){var r=h(t),n=g(e,!0);if(r!==B||!d(Y,n)||d(Z,n)){var i=W(r,n);return!i||!d(Y,n)||d(r,F)&&r[F][n]||(i.enumerable=!0),i}},pt=function(t){var e=K(h(t)),r=[];return R(e,(function(t){d(Y,t)||d(k,t)||r.push(t)})),r},bt=function(t){var e=t===B,r=K(e?Z:h(t)),n=[];return R(r,(function(t){!d(Y,t)||e&&!d(B,t)||n.push(Y[t])})),n};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===B&&r.call(Z,t),d(this,F)&&d(this[F],e)&&(this[F][e]=!1),at(this,e,m(1,t))};return s&&it&&at(B,e,{configurable:!0,set:r}),ot(e,t)},P(Q[U],"toString",(function(){return z(this).tag})),P(Q,"withoutSetter",(function(t){return ot(I(t),t)})),$.f=dt,O.f=ct,x.f=ft,w.f=C.f=pt,S.f=bt,L.f=function(t){return ot(T(t),t)},s&&(G(Q[U],"description",{configurable:!0,get:function(){return z(this).description}}),o||P(B,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),R(_(rt),(function(t){D(t)})),n({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),V){var vt=!c||l((function(){var t=Q();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,V.apply(null,i)}})}Q[U][q]||j(Q[U],q,Q[U].valueOf),M(Q,J),k[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),a=r("1c7e"),o=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:i})},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},cd43:function(t,e,r){},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("e260"),o=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),l=a.values;for(var d in i){var f=n[d],p=f&&f.prototype;if(p){if(p[c]!==l)try{o(p,c,l)}catch(v){p[c]=l}if(p[u]||o(p,u,d),i[d])for(var b in a)if(p[b]!==a[b])try{o(p,b,a[b])}catch(v){p[b]=a[b]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),a=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),l=a.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var b=p.toString,v="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(o(d,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var n=r("b622");e.f=n},ef91:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),a=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),p=d("slice"),b=f("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),h=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!p||!b},{slice:function(t,e){var r,n,l,d=c(this),f=s(d.length),p=o(t,f),b=o(void 0===e?f:e,f);if(a(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,p,b);for(n=new(void 0===r?Array:r)(g(b-p,0)),l=0;p<b;p++,l++)p in d&&u(n,l,d[p]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-2ce615de.e0597089.js.map