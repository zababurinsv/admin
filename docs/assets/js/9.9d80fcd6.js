(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{304:function(e,t,o){},344:function(e,t,o){"use strict";o(304)},366:function(e,t,o){"use strict";o.r(t);var a={data:()=>({msg:""}),mounted(){let e=document.createElement("script");e.type="module",e.src="/static/html/components/page-external/page-external.mjs";let t="localhost"===location.hostname?"http://localhost:9876":"https://zababurinsv.github.io";t+="/moderator/import",this.$el.insertAdjacentHTML("beforeend",`<page-external data-url=${t} data-height=100></page-external>`),this.$el.appendChild(e)},methods:{set(e){axios.get(""+location.hostname).then(e=>{console.log("event:",e.data.message)}).catch(e=>{console.log("error",e)})},get(e){axios.get(""+location.hostname).then(e=>{console.log("event:",e.data.message)}).catch(e=>{console.log("error",e)})},del(e){axios.get(""+location.hostname).then(e=>{console.log("event:",e.data.message)}).catch(e=>{console.log("error",e)})},move(e){axios.get(""+location.hostname).then(e=>{console.log("event:",e.data.message)}).catch(e=>{console.log("error",e)})}}},n=(o(344),o(15)),s=Object(n.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=s.exports}}]);