(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(79)},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(19),r=n.n(i),c=(n(35),n(20)),l=n(21),s=n(24),u=n(22),m=n(25),g=(n(37),function(e){var t=e.imageUrl,n=e.box;return a.a.createElement("div",{className:"center ma"},a.a.createElement("div",{className:"absolute mt2"},a.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),a.a.createElement("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})))}),d=(n(39),function(e){var t=e.onInputChange,n=e.onButtonSubmit,o=e.gap;return a.a.createElement("div",{style:o},a.a.createElement("p",{className:"f3"},"Enter URL of your image and I will detect faces in your pictures. Give it a try"),a.a.createElement("div",{className:"center"},a.a.createElement("div",{className:"form pa4 center br3 shadow-5 "},a.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),a.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white",type:"text",onClick:n},"Detect"))))}),p=n(23),f=n.n(p),h=n(10),w=n.n(h),b=(n(75),new w.a.App({apiKey:"d459a3dd44594bdeb0be0f8bd7af363c"})),v={particles:{number:{value:130,density:{enable:!0,value_area:800}}}},E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),o=Number(n.width),a=Number(n.height);return{leftCol:t.left_col*o,topRow:t.top_row*a,rightCol:o-t.right_col*o,bottomRow:a-t.bottom_row*a}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input,gap:{marginTop:"2%"}}),b.models.predict(w.a.FACE_DETECT_MODEL,e.state.input).then(function(t){return e.displayFaceBox(e.calculateFaceLocation(t))}).catch(function(e){return console.log(e)})},e.state={input:"",imageUrl:" ",box:{},gap:{marginTop:"15%"}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f.a,{className:"particles",params:v}),a.a.createElement("div",null,a.a.createElement(d,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit,gap:this.state.gap}),a.a.createElement(g,{box:this.state.box,imageUrl:this.state.imageUrl})))}}]),t}(o.Component),y=(n(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/FaceRecognition",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/FaceRecognition","/service-worker.js");y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[26,2,1]]]);
//# sourceMappingURL=main.66903894.chunk.js.map