webpackJsonp([65],{"+qHF":function(t,e,n){var r=n("VU/8")(n("hUIt"),n("2Bvi"),!1,function(t){n("fkBa")},null,null);t.exports=r.exports},"2Bvi":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.sources,function(e){return n("li",{key:e.id},[n("a",{attrs:{href:"/sources/"+e.id}},[t._v("\n            "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n            ")])])}))])},staticRenderFns:[]}},Pu0U:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".has-lateral-borders{border-left:1px solid rgba(0,0,0,.2);border-right:1px solid rgba(0,0,0,.2)}.stat-value{font-size:2em;padding-top:12px}.stat-key{font-size:1.4em;font-weight:200;padding-bottom:8px}.level.user-controls{margin-bottom:0}.source-content{-webkit-transition:all 1s ease;transition:all 1s ease}",""])},fkBa:function(t,e,n){var r=n("Pu0U");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("7c350fb0",r,!0,{})},hUIt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("QxPg"),o=n("EQBe");r.library.add([o._20,o._23,o._7,o.F,o.J,o._2,o._0]),e.default={components:{},data:function(){return{sources:null}},mounted:function(){var t=this;axios.get(route(this.$route.name,this.$route.params.id)).then(function(e){t.sources=e.data}).catch(function(e){return t.handleError(e)})}}}});
//# sourceMappingURL=65.js.map