(this["webpackJsonpreact-machine-learning"]=this["webpackJsonpreact-machine-learning"]||[]).push([[0],{274:function(e,t,n){},280:function(e,t,n){},286:function(e,t){},287:function(e,t){},295:function(e,t){},298:function(e,t){},299:function(e,t){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var a,r,s=n(32),i=n.n(s),c=n(246),u=n.n(c),o=n(114),l=n(47),h=(n(274),n(34)),d=function(){return Object(h.jsxs)("div",{className:"homepage",children:[Object(h.jsx)(o.b,{className:"sections selectSections",to:"/mileage",children:Object(h.jsx)("h1",{className:"name",children:"Mileage Predictor"})}),Object(h.jsx)(o.b,{className:"sections selectSections",to:"/handwriting",children:Object(h.jsx)("h1",{className:"name",children:"Handwriting Predictor"})}),Object(h.jsx)(o.b,{className:"sections",to:"/baseball",children:Object(h.jsx)("h1",{className:"name",children:"Baseball Pitch Predictor"})})]})},f=(n(280),function(){return Object(h.jsxs)("div",{className:"spinner-overlay",children:[Object(h.jsx)("h1",{className:"heading",children:"Getting The Model Ready For Predictions"}),Object(h.jsx)("div",{className:"spinner-container"})]})}),p=n(84),m=n(4),b=n.n(m),j=n(11),x=n(6),g=n(9),v=n(13),O=n(14),w=n(41);function y(){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(b.a.mark((function e(){var t,n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,a=M(),r=T(t),n=r.inputs,s=r.labels,e.next=9,B(a,n,s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t=r,n=t.inputMin,s=t.inputMax,i=t.labelMin,c=t.labelMax;if(e<1||e>400)return 0;var u=(e-n.dataSync())/(s.dataSync()-n.dataSync());return a.predict(w.e([u],[1,1])).mul(c.sub(i)).add(i).dataSync()[0].toFixed(2)}function k(){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://storage.googleapis.com/tfjs-tutorials/carsData.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.map((function(e){return{mpg:e.Miles_per_Gallon,horsepower:e.Horsepower}})).filter((function(e){return null!=e.mpg&&null!=e.horsepower})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){var e=w.d();return e.add(w.b.dense({inputShape:[1],units:64,useBias:!0})),e.add(w.b.dense({units:32,activation:"sigmoid"})),e.add(w.b.dense({units:32,activation:"sigmoid"})),e.add(w.b.dense({units:1,useBias:!0})),e}function T(e){return w.f((function(){w.h.shuffle(e);var t=e.map((function(e){return e.horsepower})),n=e.map((function(e){return e.mpg})),a=w.e(t,[t.length,1]),r=w.e(n,[n.length,1]),s=a.max(),i=a.min(),c=r.max(),u=r.min();return{inputs:a.sub(i).div(s.sub(i)),labels:r.sub(u).div(c.sub(u)),inputMax:s,inputMin:i,labelMax:c,labelMin:u}}))}function B(e,t,n){return P.apply(this,arguments)}function P(){return(P=Object(j.a)(b.a.mark((function e(t,n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.compile({optimizer:w.g.adam(),loss:w.c.meanSquaredError,metrics:["mse"]}),64,100,e.next=5,t.fit(n,a,{batchSize:64,epochs:100,shuffle:!0});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(300);var z,D,C=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(x.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.preventDefault();case 2:e.setState({answer:I(e.state.number)});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.state={loading:!0,number:null,answer:0},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(h.jsx)(f,{}):Object(h.jsxs)("div",{className:"tensorflowmileage",children:[Object(h.jsx)("h1",{children:"Predict Miles Per Gallon From Horsepower"}),Object(h.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(h.jsx)("input",{className:"input",name:"number",type:"number",placeholder:"Horsepower",value:this.state.number,onChange:this.handleChange}),Object(h.jsx)("button",{className:"button",type:"submit",children:Object(h.jsx)("h3",{children:"Enter"})})]}),Object(h.jsxs)("h1",{className:"prediction",children:["Miles per Gallon: ",this.state.answer]})]})}}]),n}(i.a.Component),L=n(5),A=784,F=10,H=55e3,E=function(){function e(){Object(x.a)(this,e),this.shuffledTrainIndex=0,this.shuffledTestIndex=0}return Object(g.a)(e,[{key:"load",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r,s,i,c,u,o,l=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Image,n=document.createElement("canvas"),a=n.getContext("2d"),r=new Promise((function(e,r){t.crossOrigin="",t.onload=function(){t.width=t.naturalWidth,t.height=t.naturalHeight;var r=new ArrayBuffer(20384e4),s=5e3;n.width=t.width,n.height=s;for(var i=0;i<13;i++){var c=new Float32Array(r,i*A*s*4,392e4);a.drawImage(t,0,i*s,t.width,s,0,0,t.width,s);for(var u=a.getImageData(0,0,n.width,n.height),o=0;o<u.data.length/4;o++)c[o]=u.data[4*o]/255}l.datasetImages=new Float32Array(r),e()},t.src="https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png"})),s=fetch("https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8"),e.next=7,Promise.all([r,s]);case 7:return i=e.sent,c=Object(L.a)(i,2),u=c[0],o=c[1],e.t0=Uint8Array,e.next=14,o.arrayBuffer();case 14:return e.t1=e.sent,this.datasetLabels=new e.t0(e.t1),e.t2=Uint8Array,e.next=19,u;case 19:e.t3=e.sent,this.datasetimg=new e.t2(e.t3),this.trainIndices=w.h.createShuffledIndices(H),this.testIndices=w.h.createShuffledIndices(1e4),this.trainImages=this.datasetImages.slice(0,4312e4),this.testImages=this.datasetImages.slice(4312e4),this.trainLabels=this.datasetLabels.slice(0,55e4),this.testLabels=this.datasetLabels.slice(55e4);case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nextTrainBatch",value:function(e){var t=this;return this.nextBatch(e,[this.trainImages,this.trainLabels],(function(){return t.shuffledTrainIndex=(t.shuffledTrainIndex+1)%t.trainIndices.length,t.trainIndices[t.shuffledTrainIndex]}))}},{key:"nextTestBatch",value:function(e){var t=this;return this.nextBatch(e,[this.testImages,this.testLabels],(function(){return t.shuffledTestIndex=(t.shuffledTestIndex+1)%t.testIndices.length,t.testIndices[t.shuffledTestIndex]}))}},{key:"nextBatch",value:function(e,t,n){for(var a=new Float32Array(e*A),r=new Uint8Array(e*F),s=0;s<e;s++){var i=n(),c=t[0].slice(i*A,i*A+A);a.set(c,s*A);var u=t[1].slice(i*F,i*F+F);r.set(u,s*F)}return{xs:w.e(a,[e,A]),labels:w.e(r,[e,F])}}}]),e}();function R(){return U.apply(this,arguments)}function U(){return(U=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z=new E,e.next=3,z.load();case 3:return D=_(),e.next=6,G(D,z);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){var e=w.d();e.add(w.b.conv2d({inputShape:[28,28,1],kernelSize:5,filters:8,strides:1,activation:"relu",kernelInitializer:"varianceScaling"})),e.add(w.b.maxPooling2d({poolSize:[2,2],strides:[2,2]})),e.add(w.b.conv2d({kernelSize:5,filters:16,strides:1,activation:"relu",kernelInitializer:"varianceScaling"})),e.add(w.b.maxPooling2d({poolSize:[2,2],strides:[2,2]})),e.add(w.b.flatten());e.add(w.b.dense({units:10,kernelInitializer:"varianceScaling",activation:"softmax"}));var t=w.g.adam();return e.compile({optimizer:t,loss:"categoricalCrossentropy",metrics:["accuracy"]}),e}function G(e,t){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(b.a.mark((function e(t,n){var a,r,s,i,c,u,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 512,5500,1e3,a=w.f((function(){var e=n.nextTrainBatch(5500);return[e.xs.reshape([5500,28,28,1]),e.labels]})),r=Object(L.a)(a,2),s=r[0],i=r[1],c=w.f((function(){var e=n.nextTestBatch(1e3);return[e.xs.reshape([1e3,28,28,1]),e.labels]})),u=Object(L.a)(c,2),o=u[0],l=u[1],e.abrupt("return",t.fit(s,i,{batchSize:512,validationData:[o,l],epochs:10,shuffle:!0}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){var t=w.a.fromPixels(e).resizeNearestNeighbor([28,28]).mean(2).expandDims(2).expandDims().toFloat(),n=t.div(255),a=D.predict(n).argMax(-1);return t.dispose(),n.dispose(),a.dataSync()[0]}n(301);var V=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(x.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n=new Image;n.src=e.state.image,e.setState({answer:q(n)})},e.handleChange=function(t){t.target.files&&t.target.files[0]&&e.setState({image:URL.createObjectURL(t.target.files[0])})},e.state={loading:!0,image:"https://media3.giphy.com/media/26uf2JHNV0Tq3ugkE/200.gif",answer:null},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(h.jsx)(f,{}):Object(h.jsxs)("div",{className:"tensorflowhandwriting",children:[Object(h.jsx)("h1",{className:"canvas-heading",children:"Digit Recognizer using TensorFlow.js Demo"}),Object(h.jsxs)("h1",{className:"prediction",children:["Prediction: ",this.state.answer]}),Object(h.jsx)("img",{className:"image",src:this.state.image,alt:""}),Object(h.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(h.jsx)("input",{className:"input",onChange:this.handleChange,type:"file"}),Object(h.jsx)("button",{className:"button",type:"submit",children:Object(h.jsx)("h3",{children:"Submit"})})]})]})}}]),n}(i.a.Component),W=(n(302),function(){return Object(h.jsx)("div",{classname:"tensorflowhandwriting",children:Object(h.jsx)("h1",{children:"Tensorflow Baseball Pitch"})})}),K=(n(303),function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(l.c,{children:Object(h.jsxs)(s.Suspense,{fallback:Object(h.jsx)(f,{}),children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:d}),Object(h.jsx)(l.a,{path:"/mileage",component:C}),Object(h.jsx)(l.a,{path:"/handwriting",component:V}),Object(h.jsx)(l.a,{path:"/baseball",component:W})]})})})});u.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(o.a,{basename:"/ReactMachineLearning",children:Object(h.jsx)(K,{})})}),document.getElementById("root"))}},[[304,1,2]]]);
//# sourceMappingURL=main.f89f614e.chunk.js.map