import{g as e,h as t,i as n,j as a,r as o,d as s,f as r,c,e as i,N as l,b as u,D as m,V as p,W as f,X as d,Y as v,Z as b,$ as y,a0 as E,a1 as N,a2 as g}from"./index.f5aafbf8.js";var h=function(s){e(c,s);var r=t(c);function c(){var e;return n(this,c),(e=r.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return a(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,s=this.state,r=s.error,c=s.info,i=c&&c.componentStack?c.componentStack:null,l=void 0===t?(r||"").toString():t,u=void 0===n?i:n;return r?o.createElement(k,{type:"error",message:l,description:o.createElement("pre",null,u)}):a}}]),c}(o.Component),x={success:f,info:d,error:v,warning:b},C={success:y,info:E,error:N,warning:g},k=function(e){var t,n,a=e.description,f=e.prefixCls,d=e.message,v=e.banner,b=e.className,y=void 0===b?"":b,E=e.style,N=e.onMouseEnter,g=e.onMouseLeave,h=e.onClick,k=e.afterClose,w=e.showIcon,O=e.closable,S=e.closeText,j=e.action,M=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),L=o.useState(!1),I=s(L,2),P=I[0],A=I[1],D=o.useRef(),H=o.useContext(r),T=H.getPrefixCls,_=H.direction,B=T("alert",f),R=function(e){var t;A(!0),null===(t=M.onClose)||void 0===t||t.call(M,e)},V=!!S||O,W=void 0!==(n=M.type)?n:v?"warning":"info",X=!(!v||void 0!==w)||w,Y=c(B,"".concat(B,"-").concat(W),(i(t={},"".concat(B,"-with-description"),!!a),i(t,"".concat(B,"-no-icon"),!X),i(t,"".concat(B,"-banner"),!!v),i(t,"".concat(B,"-rtl"),"rtl"===_),t),y),Z=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(M);return o.createElement(l,{visible:!P,motionName:"".concat(B,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:k},(function(e){var t,n,s=e.className,r=e.style;return o.createElement("div",u({ref:D,"data-show":!P,className:c(Y,s),style:u(u({},E),r),onMouseEnter:N,onMouseLeave:g,onClick:h,role:"alert"},Z),X?(t=M.icon,n=(a?C:x)[W]||null,t?p(t,o.createElement("span",{className:"".concat(B,"-icon")},t),(function(){return{className:c("".concat(B,"-icon"),i({},t.props.className,t.props.className))}})):o.createElement(n,{className:"".concat(B,"-icon")})):null,o.createElement("div",{className:"".concat(B,"-content")},o.createElement("div",{className:"".concat(B,"-message")},d),o.createElement("div",{className:"".concat(B,"-description")},a)),j?o.createElement("div",{className:"".concat(B,"-action")},j):null,V?o.createElement("button",{type:"button",onClick:R,className:"".concat(B,"-close-icon"),tabIndex:0},S?o.createElement("span",{className:"".concat(B,"-close-text")},S):o.createElement(m,null)):null)}))};k.ErrorBoundary=h;export{k as A};
