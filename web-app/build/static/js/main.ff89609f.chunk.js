(this["webpackJsonpakerna-ui"]=this["webpackJsonpakerna-ui"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"style_header__2Npjs",quantity:"style_quantity__26dts",quantity__minus:"style_quantity__minus__2rBIT",quantity__plus:"style_quantity__plus__2XM_Z",quantity__input:"style_quantity__input__20Rd1",overlay:"style_overlay__1cRSg"}},45:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n.n(a),i=n(7),s=n(37),o=n(4),u=n(6),l="SET_STATE_PROPERTY",p="INCREASE_DRINK_QUANTITY",d="DECREASE_DRINK_QUANTITY",b="STATE_RESET",j={loading:!1,drinks:[],selectedDrink:{},error:null,quantity:1,response:null},y=Object(s.a)({reducer:{drinks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return t.type===l?Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},t.payload.property,t.payload.payload)):t.type===b?Object(u.a)(Object(u.a)({},e),{},{loading:!1,drinks:[],selectedDrink:{},error:null,quantity:1,response:null}):t.type===p?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):t.type===d?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}}}),f=y,_=(n(45),n(36)),O=n(13),x=n(8),m=n.n(x),v=n(34),h=n.n(v),k=n(17),g=n.n(k),E={baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL)},S=h.a.create(E);S.interceptors.request.use((function(e){return e})),S.interceptors.request.use((function(e){return e})),S.interceptors.request.use((function(e){return g.a.start(),e})),S.interceptors.response.use((function(e){return g.a.done(),e.data}),(function(e){return g.a.done(),Promise.reject(e.response)}));var T=function(){var e=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"drinks"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"caffeineLimit"),{params:{drink:t,quantity:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(C({property:"loading",payload:!0})),e.next=4,T();case 4:n=e.sent,console.log(n),t(C({property:"drinks",payload:n})),t(C({property:"loading",payload:!1})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t(C({property:"error",payload:e.t0})),t(C({property:"loading",payload:!1}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},C=function(e){var t=e.payload,n=e.property;return{type:l,payload:{property:n,payload:t}}},q=function(){return{type:b}},w=n(10),A=n.n(w),P=n(2),D=function(e){e.currentCaffeineLevel;var t=Object(i.c)((function(e){return e.drinks})),n=t.quantity,r=t.selectedDrink,a=Object(i.b)();return Object(P.jsxs)("div",{className:A.a.quantity,children:[Object(P.jsx)("a",{onClick:function(){n>1&&a({type:d})},className:"cursor-pointer ".concat(A.a.quantity__minus),children:Object(P.jsx)("span",{children:"-"})}),Object(P.jsx)("input",{readOnly:!0,value:n,name:"quantity",type:"text",className:"cursor-pointer ".concat(A.a.quantity__input)}),Object(P.jsx)("a",{onClick:function(){if(0===Object.keys(r).length)return a(C({property:"error",payload:"Please select a drink."})),!1;a({type:p})},className:"cursor-pointer ".concat(A.a.quantity__plus),children:Object(P.jsx)("span",{children:"+"})})]})},L=n(14),I=n(15),U=(n(70),n(35)),K=n.n(U),H=function(){var e=Object(i.c)((function(e){return e.drinks})),t=e.drinks,n=e.selectedDrink,a=e.loading,c=(e.error,e.quantity),s=Object(i.b)(),o=n.caffeine_per_serving&&n.caffeine_per_serving*c;Object(r.useEffect)((function(){s(R())}),[s]);var u=t.map((function(e){return{value:e.id,label:e.name,caffeine_per_serving:e.caffeineAmount}}));return Object(P.jsxs)("div",{children:[Object(P.jsxs)("form",{"data-testid":"drinks-select",children:[Object(P.jsx)("label",{htmlFor:"drinks",className:"font-semibold text-sm",children:"Choose your drink"}),Object(P.jsx)(_.a,{inputId:"drinks",className:"mt-2",name:"drinks",value:n,isLoading:a,options:u,onChange:function(e){s(C({property:"selectedDrink",payload:e})),s(C({property:"error",payload:null}))}})]}),Object(P.jsx)("p",{className:"mt-6 mb-2 font-semibold text-sm",children:"Quantity"}),Object(P.jsx)(D,{currentCaffeineLevel:o}),n.caffeine_per_serving&&Object(P.jsxs)("div",{className:"mt-6 flex justify-between",children:[Object(P.jsx)("button",{"data-testid":"submit-drink",onClick:function(){s(function(e,t){return function(){var n=Object(O.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(C({property:"loading",payload:!0})),n.next=4,N(e,t);case 4:a=n.sent,r(C({property:"response",payload:a})),r(C({property:"loading",payload:!1})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r(C({property:"error",payload:n.t0}));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n.value,c))},type:"submit",className:"text-center outline-none w-4/12 md:w-2/12 py-2 px-4 text-sm font-medium rounded text-white bg-pink-500 hover:bg-pink-700",children:a?Object(P.jsx)(K.a,{className:"inline-block",type:"Bars",color:"#fff",height:20,width:20}):"Submit"}),Object(P.jsx)("button",{onClick:function(){s(q()),s(R())},type:"submit",className:" w-2/12 xl:w-1/12 py-2 px-4 text-sm font-medium rounded text-white bg-pink-500 hover:bg-pink-700",children:Object(P.jsx)(L.a,{className:"text-xs",icon:I.a})})]})]})},W=function(){var e=Object(i.c)((function(e){return e.drinks})),t=e.response,n=(e.selectedDrink,e.quantity,Object(i.b)());if(t){var r="text-green-500 font-bold";return"green"==t.alert?r="text-green-500 font-bold":"red"==t.alert?r="text-red-500 font-bold":"amber"==t.alert&&(r="text-pink-500 font-bold"),Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"".concat(A.a.overlay," absolute left-0 top-0 w-full min-h-screen z-10")}),Object(P.jsx)("div",{className:"mobile-side-menu bg-white absolute p-8 pb-6 right-0 top-0 w-full lg:w-2/5 min-h-screen z-20 border-0 border-r border-algo-gray-101",children:Object(P.jsxs)("div",{className:"h-24 border-b-4 border-gray-50",children:[Object(P.jsxs)("p",{children:[Object(P.jsx)("span",{className:"text-xl font-bold text-gray-500",children:"Caffeine Safety Level Response"}),Object(P.jsx)(L.a,{onClick:function(){n(q()),n(R())},"data-testid":"close",className:"float-right text-2xl text-pink-500 cursor-pointer",icon:I.b})]}),Object(P.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:Object(P.jsxs)("span",{className:r,children:["  ",t.message," "]})})]})})]})}return Object(P.jsx)("div",{})};var F=function(){return Object(P.jsx)("div",{className:"w-full min-h-screen relative",children:Object(P.jsx)("div",{className:"w-full h-full",children:Object(P.jsxs)("div",{className:"max-w-xs lg:max-w-2xl mx-auto mt-32",children:[Object(P.jsx)(H,{}),Object(P.jsx)(W,{})]})})})};c.a.render(Object(P.jsx)(i.a,{store:f,children:Object(P.jsx)(F,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ff89609f.chunk.js.map