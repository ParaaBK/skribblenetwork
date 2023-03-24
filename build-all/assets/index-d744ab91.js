(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var us={},jw={get exports(){return us},set exports(t){us=t}},sl={},Ie={},zw={get exports(){return Ie},set exports(t){Ie=t}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),Hw=Symbol.for("react.portal"),Kw=Symbol.for("react.fragment"),qw=Symbol.for("react.strict_mode"),Ww=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Qw=Symbol.for("react.context"),Yw=Symbol.for("react.forward_ref"),Xw=Symbol.for("react.suspense"),Jw=Symbol.for("react.memo"),Zw=Symbol.for("react.lazy"),xf=Symbol.iterator;function eE(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function yi(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}yi.prototype.isReactComponent={};yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=yi.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}var Ch=kh.prototype=new gg;Ch.constructor=kh;pg(Ch,yi.prototype);Ch.isPureReactComponent=!0;var Pf=Array.isArray,yg=Object.prototype.hasOwnProperty,Nh={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,r)&&!vg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:js,type:t,key:s,ref:o,props:i,_owner:Nh.current}}function tE(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function nE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lf=/\/+/g;function iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nE(""+t.key):e.toString(36)}function Ho(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case js:case Hw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+iu(o,0):r,Pf(i)?(n="",t!=null&&(n=t.replace(Lf,"$&/")+"/"),Ho(i,e,n,"",function(u){return u})):i!=null&&(Ah(i)&&(i=tE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+iu(s,a);o+=Ho(s,e,n,l,i)}else if(l=eE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+iu(s,a++),o+=Ho(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(t,e,n){if(t==null)return t;var r=[],i=0;return Ho(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},Ko={transition:null},iE={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:Nh};K.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!Ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=yi;K.Fragment=Kw;K.Profiler=Ww;K.PureComponent=kh;K.StrictMode=qw;K.Suspense=Xw;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yg.call(e,l)&&!vg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:js,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:Qw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gw,_context:t},t.Consumer=t};K.createElement=wg;K.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:Yw,render:t}};K.isValidElement=Ah;K.lazy=function(t){return{$$typeof:Zw,_payload:{_status:-1,_result:t},_init:rE}};K.memo=function(t,e){return{$$typeof:Jw,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return Qe.current.useCallback(t,e)};K.useContext=function(t){return Qe.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};K.useEffect=function(t,e){return Qe.current.useEffect(t,e)};K.useId=function(){return Qe.current.useId()};K.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Qe.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};K.useRef=function(t){return Qe.current.useRef(t)};K.useState=function(t){return Qe.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Qe.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(zw);const sE=dg(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=Ie,aE=Symbol.for("react.element"),lE=Symbol.for("react.fragment"),uE=Object.prototype.hasOwnProperty,cE=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hE={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uE.call(e,r)&&!hE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aE,type:t,key:s,ref:o,props:i,_owner:cE.current}}sl.Fragment=lE;sl.jsx=Eg;sl.jsxs=Eg;(function(t){t.exports=sl})(jw);const dE=us.Fragment,M=us.jsx,Tt=us.jsxs;var Qu={},Yu={},fE={get exports(){return Yu},set exports(t){Yu=t}},ut={},Xu={},pE={get exports(){return Xu},set exports(t){Xu=t}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,B){var j=N.length;N.push(B);e:for(;0<j;){var ce=j-1>>>1,Se=N[ce];if(0<i(Se,B))N[ce]=B,N[j]=Se,j=ce;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],j=N.pop();if(j!==B){N[0]=j;e:for(var ce=0,Se=N.length,mo=Se>>>1;ce<mo;){var zn=2*(ce+1)-1,ru=N[zn],Hn=zn+1,go=N[Hn];if(0>i(ru,j))Hn<Se&&0>i(go,ru)?(N[ce]=go,N[Hn]=j,ce=Hn):(N[ce]=ru,N[zn]=j,ce=zn);else if(Hn<Se&&0>i(go,j))N[ce]=go,N[Hn]=j,ce=Hn;else break e}}return B}function i(N,B){var j=N.sortIndex-B.sortIndex;return j!==0?j:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(N){if(v=!1,m(N),!y)if(n(l)!==null)y=!0,tu(I);else{var B=n(u);B!==null&&nu(E,B.startTime-N)}}function I(N,B){y=!1,v&&(v=!1,p(x),x=-1),g=!0;var j=h;try{for(m(B),d=n(l);d!==null&&(!(d.expirationTime>B)||N&&!vt());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var Se=ce(d.expirationTime<=B);B=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&r(l),m(B)}else r(l);d=n(l)}if(d!==null)var mo=!0;else{var zn=n(u);zn!==null&&nu(E,zn.startTime-B),mo=!1}return mo}finally{d=null,h=j,g=!1}}var C=!1,A=null,x=-1,Z=5,z=-1;function vt(){return!(t.unstable_now()-z<Z)}function Ai(){if(A!==null){var N=t.unstable_now();z=N;var B=!0;try{B=A(!0,N)}finally{B?Ri():(C=!1,A=null)}}else C=!1}var Ri;if(typeof f=="function")Ri=function(){f(Ai)};else if(typeof MessageChannel<"u"){var Df=new MessageChannel,Bw=Df.port2;Df.port1.onmessage=Ai,Ri=function(){Bw.postMessage(null)}}else Ri=function(){D(Ai,0)};function tu(N){A=N,C||(C=!0,Ri())}function nu(N,B){x=D(function(){N(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,tu(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var j=h;h=B;try{return N()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=h;h=N;try{return B()}finally{h=j}},t.unstable_scheduleCallback=function(N,B,j){var ce=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=j+Se,N={id:c++,callback:B,priorityLevel:N,startTime:j,expirationTime:Se,sortIndex:-1},j>ce?(N.sortIndex=j,e(u,N),n(l)===null&&N===n(u)&&(v?(p(x),x=-1):v=!0,nu(E,j-ce))):(N.sortIndex=Se,e(l,N),y||g||(y=!0,tu(I))),N},t.unstable_shouldYield=vt,t.unstable_wrapCallback=function(N){var B=h;return function(){var j=h;h=B;try{return N.apply(this,arguments)}finally{h=j}}}})(Sg);(function(t){t.exports=Sg})(pE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g=Ie,at=Xu;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tg=new Set,cs={};function gr(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(cs[t]=e,t=0;t<e.length;t++)Tg.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,mE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},$f={};function gE(t){return Ju.call($f,t)?!0:Ju.call(Mf,t)?!1:mE.test(t)?$f[t]=!0:(Mf[t]=!0,!1)}function yE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vE(t,e,n,r){if(e===null||typeof e>"u"||yE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rh,Oh);xe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rh,Oh);xe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rh,Oh);xe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dh(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vE(e,n,i,r)&&(n=null),r||i===null?gE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=_g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),kg=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=bf&&t[bf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,su;function Fi(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function au(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fi(t):""}function wE(t){switch(t.tag){case 5:return Fi(t.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ar:return"Fragment";case Nr:return"Portal";case Zu:return"Profiler";case xh:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kg:return(t.displayName||"Context")+".Consumer";case Ig:return(t._context.displayName||"Context")+".Provider";case Ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lh:return e=t.displayName||null,e!==null?e:nc(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return nc(t(e))}catch{}}return null}function EE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(e);case 8:return e===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SE(t){var e=Ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=SE(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ng(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rg(t,e){e=e.checked,e!=null&&Dh(t,"checked",e,!1)}function ic(t,e){Rg(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&sc(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ff(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sc(t,e,n){(e!=="number"||ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vi=Array.isArray;function jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Vi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function Og(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_E=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){_E.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function Lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TE=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(t,e){if(e){if(TE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cc=null;function Mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hc=null,zr=null,Hr=null;function jf(t){if(t=Ks(t)){if(typeof hc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=cl(e),hc(t.stateNode,t.type,e))}}function Mg(t){zr?Hr?Hr.push(t):Hr=[t]:zr=t}function $g(){if(zr){var t=zr,e=Hr;if(Hr=zr=null,jf(t),e)for(t=0;t<e.length;t++)jf(e[t])}}function bg(t,e){return t(e)}function Ug(){}var lu=!1;function Fg(t,e,n){if(lu)return t(e,n);lu=!0;try{return bg(t,e,n)}finally{lu=!1,(zr!==null||Hr!==null)&&(Ug(),$g())}}function ds(t,e){var n=t.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var dc=!1;if(Xt)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{dc=!1}function IE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Gi=!1,ha=null,da=!1,fc=null,kE={onError:function(t){Gi=!0,ha=t}};function CE(t,e,n,r,i,s,o,a,l){Gi=!1,ha=null,IE.apply(kE,arguments)}function NE(t,e,n,r,i,s,o,a,l){if(CE.apply(this,arguments),Gi){if(Gi){var u=ha;Gi=!1,ha=null}else throw Error(S(198));da||(da=!0,fc=u)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zf(t){if(yr(t)!==t)throw Error(S(188))}function AE(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zf(i),t;if(s===r)return zf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Bg(t){return t=AE(t),t!==null?jg(t):null}function jg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jg(t);if(e!==null)return e;t=t.sibling}return null}var zg=at.unstable_scheduleCallback,Hf=at.unstable_cancelCallback,RE=at.unstable_shouldYield,OE=at.unstable_requestPaint,he=at.unstable_now,DE=at.unstable_getCurrentPriorityLevel,$h=at.unstable_ImmediatePriority,Hg=at.unstable_UserBlockingPriority,fa=at.unstable_NormalPriority,xE=at.unstable_LowPriority,Kg=at.unstable_IdlePriority,ol=null,Pt=null;function PE(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:$E,LE=Math.log,ME=Math.LN2;function $E(t){return t>>>=0,t===0?32:31-(LE(t)/ME|0)|0}var So=64,_o=4194304;function Bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bi(a):(s&=o,s!==0&&(r=Bi(s)))}else o=n&~i,o!==0?r=Bi(o):s!==0&&(r=Bi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kt(e),i=1<<n,r|=t[n],e&=~i;return r}function bE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=bE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qg(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kt(e),t[e]=n}function FE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Uh,Qg,Yg,Xg,mc=!1,To=[],Sn=null,_n=null,Tn=null,fs=new Map,ps=new Map,fn=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,e){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ks(e),e!==null&&Uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BE(t,e,n,r,i){switch(e){case"focusin":return Sn=xi(Sn,t,e,n,r,i),!0;case"dragenter":return _n=xi(_n,t,e,n,r,i),!0;case"mouseover":return Tn=xi(Tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fs.set(s,xi(fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ps.set(s,xi(ps.get(s)||null,t,e,n,r,i)),!0}return!1}function Jg(t){var e=Gn(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Vg(n),e!==null){t.blockedOn=e,Xg(t.priority,function(){Qg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cc=r,n.target.dispatchEvent(r),cc=null}else return e=Ks(n),e!==null&&Uh(e),t.blockedOn=n,!1;e.shift()}return!0}function qf(t,e,n){qo(t)&&n.delete(e)}function jE(){mc=!1,Sn!==null&&qo(Sn)&&(Sn=null),_n!==null&&qo(_n)&&(_n=null),Tn!==null&&qo(Tn)&&(Tn=null),fs.forEach(qf),ps.forEach(qf)}function Pi(t,e){t.blockedOn===e&&(t.blockedOn=null,mc||(mc=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,jE)))}function ms(t){function e(i){return Pi(i,t)}if(0<To.length){Pi(To[0],t);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sn!==null&&Pi(Sn,t),_n!==null&&Pi(_n,t),Tn!==null&&Pi(Tn,t),fs.forEach(e),ps.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&fn.shift()}var Kr=an.ReactCurrentBatchConfig,ma=!0;function zE(t,e,n,r){var i=Y,s=Kr.transition;Kr.transition=null;try{Y=1,Fh(t,e,n,r)}finally{Y=i,Kr.transition=s}}function HE(t,e,n,r){var i=Y,s=Kr.transition;Kr.transition=null;try{Y=4,Fh(t,e,n,r)}finally{Y=i,Kr.transition=s}}function Fh(t,e,n,r){if(ma){var i=gc(t,e,n,r);if(i===null)wu(t,e,r,ga,n),Kf(t,r);else if(BE(i,t,e,n,r))r.stopPropagation();else if(Kf(t,r),e&4&&-1<VE.indexOf(t)){for(;i!==null;){var s=Ks(i);if(s!==null&&Gg(s),s=gc(t,e,n,r),s===null&&wu(t,e,r,ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wu(t,e,r,null,n)}}var ga=null;function gc(t,e,n,r){if(ga=null,t=Mh(r),t=Gn(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ga=t,null}function Zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DE()){case $h:return 1;case Hg:return 4;case fa:case xE:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var wn=null,Vh=null,Wo=null;function ey(){if(Wo)return Wo;var t,e=Vh,n=e.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wo=i.slice(t,1<r?1-r:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Wf(){return!1}function ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:Wf,this.isPropagationStopped=Wf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=ct(vi),Hs=ae({},vi,{view:0,detail:0}),KE=ct(Hs),cu,hu,Li,al=ae({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Li&&(Li&&t.type==="mousemove"?(cu=t.screenX-Li.screenX,hu=t.screenY-Li.screenY):hu=cu=0,Li=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),Gf=ct(al),qE=ae({},al,{dataTransfer:0}),WE=ct(qE),GE=ae({},Hs,{relatedTarget:0}),du=ct(GE),QE=ae({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),YE=ct(QE),XE=ae({},vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JE=ct(XE),ZE=ae({},vi,{data:0}),Qf=ct(ZE),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nS[t])?!!e[t]:!1}function jh(){return rS}var iS=ae({},Hs,{key:function(t){if(t.key){var e=eS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=ct(iS),oS=ae({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=ct(oS),aS=ae({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),lS=ct(aS),uS=ae({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=ct(uS),hS=ae({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=ct(hS),fS=[9,13,27,32],zh=Xt&&"CompositionEvent"in window,Qi=null;Xt&&"documentMode"in document&&(Qi=document.documentMode);var pS=Xt&&"TextEvent"in window&&!Qi,ty=Xt&&(!zh||Qi&&8<Qi&&11>=Qi),Xf=String.fromCharCode(32),Jf=!1;function ny(t,e){switch(t){case"keyup":return fS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function mS(t,e){switch(t){case"compositionend":return ry(e);case"keypress":return e.which!==32?null:(Jf=!0,Xf);case"textInput":return t=e.data,t===Xf&&Jf?null:t;default:return null}}function gS(t,e){if(Rr)return t==="compositionend"||!zh&&ny(t,e)?(t=ey(),Wo=Vh=wn=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ty&&e.locale!=="ko"?null:e.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yS[t.type]:e==="textarea"}function iy(t,e,n,r){Mg(r),e=ya(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,gs=null;function vS(t){my(t,0)}function ll(t){var e=xr(t);if(Ag(e))return t}function wS(t,e){if(t==="change")return e}var sy=!1;if(Xt){var fu;if(Xt){var pu="oninput"in document;if(!pu){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),pu=typeof ep.oninput=="function"}fu=pu}else fu=!1;sy=fu&&(!document.documentMode||9<document.documentMode)}function tp(){Yi&&(Yi.detachEvent("onpropertychange",oy),gs=Yi=null)}function oy(t){if(t.propertyName==="value"&&ll(gs)){var e=[];iy(e,gs,t,Mh(t)),Fg(vS,e)}}function ES(t,e,n){t==="focusin"?(tp(),Yi=e,gs=n,Yi.attachEvent("onpropertychange",oy)):t==="focusout"&&tp()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(gs)}function _S(t,e){if(t==="click")return ll(e)}function TS(t,e){if(t==="input"||t==="change")return ll(e)}function IS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:IS;function ys(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ju.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=np(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function ay(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ay(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ly(){for(var t=window,e=ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ca(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kS(t){var e=ly(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ay(n.ownerDocument.documentElement,n)){if(r!==null&&Hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rp(n,s);var o=rp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CS=Xt&&"documentMode"in document&&11>=document.documentMode,Or=null,yc=null,Xi=null,vc=!1;function ip(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||Or==null||Or!==ca(r)||(r=Or,"selectionStart"in r&&Hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&ys(Xi,r)||(Xi=r,r=ya(yc,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Or)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},mu={},uy={};Xt&&(uy=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function ul(t){if(mu[t])return mu[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uy)return mu[t]=e[n];return t}var cy=ul("animationend"),hy=ul("animationiteration"),dy=ul("animationstart"),fy=ul("transitionend"),py=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){py.set(t,e),gr(e,[t])}for(var gu=0;gu<sp.length;gu++){var yu=sp[gu],NS=yu.toLowerCase(),AS=yu[0].toUpperCase()+yu.slice(1);Un(NS,"on"+AS)}Un(cy,"onAnimationEnd");Un(hy,"onAnimationIteration");Un(dy,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(fy,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function op(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NE(r,e,void 0,t),t.currentTarget=null}function my(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;op(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;op(i,a,u),s=l}}}if(da)throw t=fc,da=!1,fc=null,t}function ee(t,e){var n=e[Tc];n===void 0&&(n=e[Tc]=new Set);var r=t+"__bubble";n.has(r)||(gy(e,t,2,!1),n.add(r))}function vu(t,e,n){var r=0;e&&(r|=4),gy(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function vs(t){if(!t[Co]){t[Co]=!0,Tg.forEach(function(n){n!=="selectionchange"&&(RS.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,vu("selectionchange",!1,e))}}function gy(t,e,n,r){switch(Zg(e)){case 1:var i=zE;break;case 4:i=HE;break;default:i=Fh}n=i.bind(null,e,n,t),i=void 0,!dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fg(function(){var u=s,c=Mh(n),d=[];e:{var h=py.get(t);if(h!==void 0){var g=Bh,y=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":g=sS;break;case"focusin":y="focus",g=du;break;case"focusout":y="blur",g=du;break;case"beforeblur":case"afterblur":g=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=WE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lS;break;case cy:case hy:case dy:g=YE;break;case fy:g=cS;break;case"scroll":g=KE;break;case"wheel":g=dS;break;case"copy":case"cut":case"paste":g=JE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yf}var v=(e&4)!==0,D=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=ds(f,p),E!=null&&v.push(ws(f,E,m)))),D)break;f=f.return}0<v.length&&(h=new g(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==cc&&(y=n.relatedTarget||n.fromElement)&&(Gn(y)||y[Jt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Gn(y):null,y!==null&&(D=yr(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Gf,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Yf,E="onPointerLeave",p="onPointerEnter",f="pointer"),D=g==null?h:xr(g),m=y==null?h:xr(y),h=new v(E,f+"leave",g,n,c),h.target=D,h.relatedTarget=m,E=null,Gn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=D,E=v),D=E,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=_r(m))f++;for(m=0,E=p;E;E=_r(E))m++;for(;0<f-m;)v=_r(v),f--;for(;0<m-f;)p=_r(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=_r(v),p=_r(p)}v=null}else v=null;g!==null&&ap(d,h,g,v,!1),y!==null&&D!==null&&ap(d,D,y,v,!0)}}e:{if(h=u?xr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=wS;else if(Zf(h))if(sy)I=TS;else{I=SS;var C=ES}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=_S);if(I&&(I=I(t,u))){iy(d,I,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&sc(h,"number",h.value)}switch(C=u?xr(u):window,t){case"focusin":(Zf(C)||C.contentEditable==="true")&&(Or=C,yc=u,Xi=null);break;case"focusout":Xi=yc=Or=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,ip(d,n,c);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":ip(d,n,c)}var A;if(zh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rr?ny(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ty&&n.locale!=="ko"&&(Rr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Rr&&(A=ey()):(wn=c,Vh="value"in wn?wn.value:wn.textContent,Rr=!0)),C=ya(u,x),0<C.length&&(x=new Qf(x,t,null,n,c),d.push({event:x,listeners:C}),A?x.data=A:(A=ry(n),A!==null&&(x.data=A)))),(A=pS?mS(t,n):gS(t,n))&&(u=ya(u,"onBeforeInput"),0<u.length&&(c=new Qf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}my(d,e)})}function ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ds(t,n),s!=null&&r.unshift(ws(t,s,i)),s=ds(t,e),s!=null&&r.push(ws(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ap(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ds(n,s),l!=null&&o.unshift(ws(n,l,a))):i||(l=ds(n,s),l!=null&&o.push(ws(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function lp(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(DS,"")}function No(t,e,n){if(e=lp(e),lp(t)!==e&&n)throw Error(S(425))}function va(){}var wc=null,Ec=null;function Sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(LS)}:_c;function LS(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Dt="__reactFiber$"+wi,Es="__reactProps$"+wi,Jt="__reactContainer$"+wi,Tc="__reactEvents$"+wi,MS="__reactListeners$"+wi,$S="__reactHandles$"+wi;function Gn(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cp(t);t!==null;){if(n=t[Dt])return n;t=cp(t)}return e}t=n,n=t.parentNode}return null}function Ks(t){return t=t[Dt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function cl(t){return t[Es]||null}var Ic=[],Pr=-1;function Fn(t){return{current:t}}function ne(t){0>Pr||(t.current=Ic[Pr],Ic[Pr]=null,Pr--)}function X(t,e){Pr++,Ic[Pr]=t.current,t.current=e}var Ln={},ze=Fn(Ln),Ze=Fn(!1),or=Ln;function ti(t,e){var n=t.type.contextTypes;if(!n)return Ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function wa(){ne(Ze),ne(ze)}function hp(t,e,n){if(ze.current!==Ln)throw Error(S(168));X(ze,e),X(Ze,n)}function yy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,EE(t)||"Unknown",i));return ae({},n,r)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,or=ze.current,X(ze,t),X(Ze,Ze.current),!0}function dp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=yy(t,e,or),r.__reactInternalMemoizedMergedChildContext=t,ne(Ze),ne(ze),X(ze,t)):ne(Ze),X(Ze,n)}var jt=null,hl=!1,Su=!1;function vy(t){jt===null?jt=[t]:jt.push(t)}function bS(t){hl=!0,vy(t)}function Vn(){if(!Su&&jt!==null){Su=!0;var t=0,e=Y;try{var n=jt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jt=null,hl=!1}catch(i){throw jt!==null&&(jt=jt.slice(t+1)),zg($h,Vn),i}finally{Y=e,Su=!1}}return null}var Lr=[],Mr=0,Sa=null,_a=0,ht=[],dt=0,ar=null,Ht=1,Kt="";function Kn(t,e){Lr[Mr++]=_a,Lr[Mr++]=Sa,Sa=t,_a=e}function wy(t,e,n){ht[dt++]=Ht,ht[dt++]=Kt,ht[dt++]=ar,ar=t;var r=Ht;t=Kt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var s=32-kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-kt(e)+i|n<<i|r,Kt=s+t}else Ht=1<<s|n<<i|r,Kt=t}function Kh(t){t.return!==null&&(Kn(t,1),wy(t,1,0))}function qh(t){for(;t===Sa;)Sa=Lr[--Mr],Lr[Mr]=null,_a=Lr[--Mr],Lr[Mr]=null;for(;t===ar;)ar=ht[--dt],ht[dt]=null,Kt=ht[--dt],ht[dt]=null,Ht=ht[--dt],ht[dt]=null}var st=null,it=null,re=!1,_t=null;function Ey(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,it=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:Ht,overflow:Kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,it=null,!0):!1;default:return!1}}function kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(re){var e=it;if(e){var n=e;if(!fp(t,e)){if(kc(t))throw Error(S(418));e=In(n.nextSibling);var r=st;e&&fp(t,e)?Ey(r,n):(t.flags=t.flags&-4097|2,re=!1,st=t)}}else{if(kc(t))throw Error(S(418));t.flags=t.flags&-4097|2,re=!1,st=t}}}function pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Ao(t){if(t!==st)return!1;if(!re)return pp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sc(t.type,t.memoizedProps)),e&&(e=it)){if(kc(t))throw Sy(),Error(S(418));for(;e;)Ey(t,e),e=In(e.nextSibling)}if(pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=st?In(t.stateNode.nextSibling):null;return!0}function Sy(){for(var t=it;t;)t=In(t.nextSibling)}function ni(){it=st=null,re=!1}function Wh(t){_t===null?_t=[t]:_t.push(t)}var US=an.ReactCurrentBatchConfig;function Et(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ta=Fn(null),Ia=null,$r=null,Gh=null;function Qh(){Gh=$r=Ia=null}function Yh(t){var e=Ta.current;ne(Ta),t._currentValue=e}function Nc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qr(t,e){Ia=t,Gh=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function gt(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(Ia===null)throw Error(S(308));$r=t,Ia.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var Qn=null;function Xh(t){Qn===null?Qn=[t]:Qn.push(t)}function _y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zt(t,r)}function Zt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ty(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zt(t,n)}return i=r.interleaved,i===null?(e.next=e,Xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zt(t,n)}function Qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bh(t,n)}}function mp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ka(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=ae({},d,h);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=d}}function gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Iy=new _g.Component().refs;function Ac(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Nn(t),s=Qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Ct(e,t,i,r),Qo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Nn(t),s=Qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Ct(e,t,i,r),Qo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Nn(t),i=Qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(Ct(e,t,r,n),Qo(e,t,r))}};function yp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ys(n,r)||!ys(i,s):!0}function ky(t,e,n){var r=!1,i=Ln,s=e.contextType;return typeof s=="object"&&s!==null?s=gt(s):(i=et(e)?or:ze.current,r=e.contextTypes,s=(r=r!=null)?ti(t,i):Ln),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function Rc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Iy,Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gt(s):(s=et(e)?or:ze.current,i.context=ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ac(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dl.enqueueReplaceState(i,i.state,null),ka(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Iy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ro(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wp(t){var e=t._init;return e(t._payload)}function Cy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=An(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,E){return f===null||f.tag!==6?(f=Au(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,E){var I=m.type;return I===Ar?c(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===hn&&wp(I)===f.type)?(E=i(f,m.props),E.ref=Mi(p,f,m),E.return=p,E):(E=ta(m.type,m.key,m.props,null,p.mode,E),E.ref=Mi(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ru(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,E,I){return f===null||f.tag!==7?(f=tr(m,p.mode,E,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Au(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vo:return m=ta(f.type,f.key,f.props,null,p.mode,m),m.ref=Mi(p,null,f),m.return=p,m;case Nr:return f=Ru(f,p.mode,m),f.return=p,f;case hn:var E=f._init;return d(p,E(f._payload),m)}if(Vi(f)||Oi(f))return f=tr(f,p.mode,m,null),f.return=p,f;Ro(p,f)}return null}function h(p,f,m,E){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:return m.key===I?l(p,f,m,E):null;case Nr:return m.key===I?u(p,f,m,E):null;case hn:return I=m._init,h(p,f,I(m._payload),E)}if(Vi(m)||Oi(m))return I!==null?null:c(p,f,m,E,null);Ro(p,m)}return null}function g(p,f,m,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(f,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case vo:return p=p.get(E.key===null?m:E.key)||null,l(f,p,E,I);case Nr:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,I);case hn:var C=E._init;return g(p,f,m,C(E._payload),I)}if(Vi(E)||Oi(E))return p=p.get(m)||null,c(f,p,E,I,null);Ro(f,E)}return null}function y(p,f,m,E){for(var I=null,C=null,A=f,x=f=0,Z=null;A!==null&&x<m.length;x++){A.index>x?(Z=A,A=null):Z=A.sibling;var z=h(p,A,m[x],E);if(z===null){A===null&&(A=Z);break}t&&A&&z.alternate===null&&e(p,A),f=s(z,f,x),C===null?I=z:C.sibling=z,C=z,A=Z}if(x===m.length)return n(p,A),re&&Kn(p,x),I;if(A===null){for(;x<m.length;x++)A=d(p,m[x],E),A!==null&&(f=s(A,f,x),C===null?I=A:C.sibling=A,C=A);return re&&Kn(p,x),I}for(A=r(p,A);x<m.length;x++)Z=g(A,p,x,m[x],E),Z!==null&&(t&&Z.alternate!==null&&A.delete(Z.key===null?x:Z.key),f=s(Z,f,x),C===null?I=Z:C.sibling=Z,C=Z);return t&&A.forEach(function(vt){return e(p,vt)}),re&&Kn(p,x),I}function v(p,f,m,E){var I=Oi(m);if(typeof I!="function")throw Error(S(150));if(m=I.call(m),m==null)throw Error(S(151));for(var C=I=null,A=f,x=f=0,Z=null,z=m.next();A!==null&&!z.done;x++,z=m.next()){A.index>x?(Z=A,A=null):Z=A.sibling;var vt=h(p,A,z.value,E);if(vt===null){A===null&&(A=Z);break}t&&A&&vt.alternate===null&&e(p,A),f=s(vt,f,x),C===null?I=vt:C.sibling=vt,C=vt,A=Z}if(z.done)return n(p,A),re&&Kn(p,x),I;if(A===null){for(;!z.done;x++,z=m.next())z=d(p,z.value,E),z!==null&&(f=s(z,f,x),C===null?I=z:C.sibling=z,C=z);return re&&Kn(p,x),I}for(A=r(p,A);!z.done;x++,z=m.next())z=g(A,p,x,z.value,E),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?x:z.key),f=s(z,f,x),C===null?I=z:C.sibling=z,C=z);return t&&A.forEach(function(Ai){return e(p,Ai)}),re&&Kn(p,x),I}function D(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Ar&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:e:{for(var I=m.key,C=f;C!==null;){if(C.key===I){if(I=m.type,I===Ar){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===hn&&wp(I)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=Mi(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Ar?(f=tr(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=ta(m.type,m.key,m.props,null,p.mode,E),E.ref=Mi(p,f,m),E.return=p,p=E)}return o(p);case Nr:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ru(m,p.mode,E),f.return=p,p=f}return o(p);case hn:return C=m._init,D(p,f,C(m._payload),E)}if(Vi(m))return y(p,f,m,E);if(Oi(m))return v(p,f,m,E);Ro(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Au(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return D}var ri=Cy(!0),Ny=Cy(!1),qs={},Lt=Fn(qs),Ss=Fn(qs),_s=Fn(qs);function Yn(t){if(t===qs)throw Error(S(174));return t}function Zh(t,e){switch(X(_s,e),X(Ss,t),X(Lt,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ac(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ac(e,t)}ne(Lt),X(Lt,e)}function ii(){ne(Lt),ne(Ss),ne(_s)}function Ay(t){Yn(_s.current);var e=Yn(Lt.current),n=ac(e,t.type);e!==n&&(X(Ss,t),X(Lt,n))}function ed(t){Ss.current===t&&(ne(Lt),ne(Ss))}var se=Fn(0);function Ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function td(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Yo=an.ReactCurrentDispatcher,Tu=an.ReactCurrentBatchConfig,lr=0,oe=null,ge=null,Te=null,Na=!1,Ji=!1,Ts=0,FS=0;function Le(){throw Error(S(321))}function nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function rd(t,e,n,r,i,s){if(lr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?zS:HS,t=n(r,i),Ji){s=0;do{if(Ji=!1,Ts=0,25<=s)throw Error(S(301));s+=1,Te=ge=null,e.updateQueue=null,Yo.current=KS,t=n(r,i)}while(Ji)}if(Yo.current=Aa,e=ge!==null&&ge.next!==null,lr=0,Te=ge=oe=null,Na=!1,e)throw Error(S(300));return t}function id(){var t=Ts!==0;return Ts=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?oe.memoizedState=Te=t:Te=Te.next=t,Te}function yt(){if(ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Te===null?oe.memoizedState:Te.next;if(e!==null)Te=e,ge=t;else{if(t===null)throw Error(S(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Te===null?oe.memoizedState=Te=t:Te=Te.next=t}return Te}function Is(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=yt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,oe.lanes|=c,ur|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(Je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=yt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ry(){}function Oy(t,e){var n=oe,r=yt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,sd(Py.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ks(9,xy.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(S(349));lr&30||Dy(n,e,i)}return i}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,Ly(e)&&My(t)}function Py(t,e,n){return n(function(){Ly(e)&&My(t)})}function Ly(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function My(t){var e=Zt(t,1);e!==null&&Ct(e,t,1,-1)}function Ep(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=jS.bind(null,oe,t),[e.memoizedState,t]}function ks(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $y(){return yt().memoizedState}function Xo(t,e,n,r){var i=Ot();oe.flags|=t,i.memoizedState=ks(1|e,n,void 0,r===void 0?null:r)}function fl(t,e,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&nd(r,o.deps)){i.memoizedState=ks(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ks(1|e,n,s,r)}function Sp(t,e){return Xo(8390656,8,t,e)}function sd(t,e){return fl(2048,8,t,e)}function by(t,e){return fl(4,2,t,e)}function Uy(t,e){return fl(4,4,t,e)}function Fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vy(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,Fy.bind(null,e,t),n)}function od(){}function By(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jy(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zy(t,e,n){return lr&21?(Nt(n,e)||(n=qg(),oe.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function VS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Tu.transition;Tu.transition={};try{t(!1),e()}finally{Y=n,Tu.transition=r}}function Hy(){return yt().memoizedState}function BS(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ky(t))qy(e,n);else if(n=_y(t,e,n,r),n!==null){var i=Ge();Ct(n,t,r,i),Wy(n,e,r)}}function jS(t,e,n){var r=Nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ky(t))qy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var l=e.interleaved;l===null?(i.next=i,Xh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=_y(t,e,i,r),n!==null&&(i=Ge(),Ct(n,t,r,i),Wy(n,e,r))}}function Ky(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function qy(t,e){Ji=Na=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bh(t,n)}}var Aa={readContext:gt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},zS={readContext:gt,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:gt,useEffect:Sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,Fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:od,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=VS.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Ot();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ke===null)throw Error(S(349));lr&30||Dy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sp(Py.bind(null,r,s,t),[t]),r.flags|=2048,ks(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=ke.identifierPrefix;if(re){var n=Kt,r=Ht;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HS={readContext:gt,useCallback:By,useContext:gt,useEffect:sd,useImperativeHandle:Vy,useInsertionEffect:by,useLayoutEffect:Uy,useMemo:jy,useReducer:Iu,useRef:$y,useState:function(){return Iu(Is)},useDebugValue:od,useDeferredValue:function(t){var e=yt();return zy(e,ge.memoizedState,t)},useTransition:function(){var t=Iu(Is)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Oy,useId:Hy,unstable_isNewReconciler:!1},KS={readContext:gt,useCallback:By,useContext:gt,useEffect:sd,useImperativeHandle:Vy,useInsertionEffect:by,useLayoutEffect:Uy,useMemo:jy,useReducer:ku,useRef:$y,useState:function(){return ku(Is)},useDebugValue:od,useDeferredValue:function(t){var e=yt();return ge===null?e.memoizedState=t:zy(e,ge.memoizedState,t)},useTransition:function(){var t=ku(Is)[0],e=yt().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Oy,useId:Hy,unstable_isNewReconciler:!1};function si(t,e){try{var n="",r=e;do n+=wE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function Gy(t,e,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oa||(Oa=!0,Vc=r),Oc(t,e)},n}function Qy(t,e,n){n=Qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oc(t,e),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _p(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=o_.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var WS=an.ReactCurrentOwner,Je=!1;function qe(t,e,n,r){e.child=t===null?Ny(e,null,n,r):ri(e,t.child,n,r)}function kp(t,e,n,r,i){n=n.render;var s=e.ref;return qr(e,i),r=rd(t,e,n,r,s,i),n=id(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,en(t,e,i)):(re&&n&&Kh(e),e.flags|=1,qe(t,e,r,i),e.child)}function Cp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yy(t,e,s,r,i)):(t=ta(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ys,n(o,r)&&t.ref===e.ref)return en(t,e,i)}return e.flags|=1,t=An(s,r),t.ref=e.ref,t.return=e,e.child=t}function Yy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ys(s,r)&&t.ref===e.ref)if(Je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,en(t,e,i)}return Dc(t,e,n,r,i)}function Xy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Ur,rt),rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Ur,rt),rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Ur,rt),rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Ur,rt),rt|=r;return qe(t,e,i,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dc(t,e,n,r,i){var s=et(n)?or:ze.current;return s=ti(e,s),qr(e,i),n=rd(t,e,n,r,s,i),r=id(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,en(t,e,i)):(re&&r&&Kh(e),e.flags|=1,qe(t,e,n,i),e.child)}function Np(t,e,n,r,i){if(et(n)){var s=!0;Ea(e)}else s=!1;if(qr(e,i),e.stateNode===null)Jo(t,e),ky(e,n,r),Rc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=et(n)?or:ze.current,u=ti(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vp(e,o,r,u),dn=!1;var h=e.memoizedState;o.state=h,ka(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ze.current||dn?(typeof c=="function"&&(Ac(e,n,c,r),l=e.memoizedState),(a=dn||yp(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ty(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Et(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gt(l):(l=et(n)?or:ze.current,l=ti(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&vp(e,o,r,l),dn=!1,h=e.memoizedState,o.state=h,ka(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ze.current||dn?(typeof g=="function"&&(Ac(e,n,g,r),y=e.memoizedState),(u=dn||yp(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return xc(t,e,n,r,s,i)}function xc(t,e,n,r,i,s){Jy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dp(e,n,!1),en(t,e,s);r=e.stateNode,WS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,s),e.child=ri(e,null,a,s)):qe(t,e,a,s),e.memoizedState=r.state,i&&dp(e,n,!0),e.child}function Zy(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Zh(t,e.containerInfo)}function Ap(t,e,n,r,i){return ni(),Wh(i),e.flags|=256,qe(t,e,n,r),e.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Lc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ev(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(se,i&1),t===null)return Cc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,r,0,null),t=tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lc(n),e.memoizedState=Pc,t):ad(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=An(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=An(a,s):(s=tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pc,r}return s=t.child,t=s.sibling,r=An(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ad(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oo(t,e,n,r){return r!==null&&Wh(r),ri(e,t.child,null,n),t=ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cu(Error(S(422))),Oo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gl({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=Lc(o),e.memoizedState=Pc,s);if(!(e.mode&1))return Oo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Cu(s,r,void 0),Oo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Je||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zt(t,i),Ct(r,t,i,-1))}return fd(),r=Cu(Error(S(421))),Oo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=a_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=In(i.nextSibling),st=e,re=!0,_t=null,t!==null&&(ht[dt++]=Ht,ht[dt++]=Kt,ht[dt++]=ar,Ht=t.id,Kt=t.overflow,ar=e),e=ad(e,r.children),e.flags|=4096,e)}function Rp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nc(t.return,e,n)}function Nu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,n,e);else if(t.tag===19)Rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ca(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ca(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nu(e,!0,n,null,s);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function en(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=An(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=An(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QS(t,e,n){switch(e.tag){case 3:Zy(e),ni();break;case 5:Ay(e);break;case 1:et(e.type)&&Ea(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Ta,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?ev(t,e,n):(X(se,se.current&1),t=en(t,e,n),t!==null?t.sibling:null);X(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Xy(t,e,n)}return en(t,e,n)}var nv,Mc,rv,iv;nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};rv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(Lt.current);var s=null;switch(n){case"input":i=rc(t,i),r=rc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=oc(t,i),r=oc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=va)}lc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iv=function(t,e,n,r){n!==r&&(e.flags|=4)};function $i(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YS(t,e,n){var r=e.pendingProps;switch(qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return et(e.type)&&wa(),Me(e),null;case 3:return r=e.stateNode,ii(),ne(Ze),ne(ze),td(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(zc(_t),_t=null))),Mc(t,e),Me(e),null;case 5:ed(e);var i=Yn(_s.current);if(n=e.type,t!==null&&e.stateNode!=null)rv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Me(e),null}if(t=Yn(Lt.current),Ao(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dt]=e,r[Es]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<ji.length;i++)ee(ji[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Uf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Vf(r,s),ee("invalid",r)}lc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&No(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&No(r.textContent,a,t),i=["children",""+a]):cs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":wo(r),Ff(r,s,!0);break;case"textarea":wo(r),Bf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=va)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[Es]=r,nv(t,e,!1,!1),e.stateNode=t;e:{switch(o=uc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<ji.length;i++)ee(ji[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Uf(t,r),i=rc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Vf(t,r),i=oc(t,r),ee("invalid",t);break;default:i=r}lc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hs(t,l):typeof l=="number"&&hs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Dh(t,s,l,o))}switch(n){case"input":wo(t),Ff(t,r,!1);break;case"textarea":wo(t),Bf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)iv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Yn(_s.current),Yn(Lt.current),Ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(s=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:No(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Me(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&it!==null&&e.mode&1&&!(e.flags&128))Sy(),ni(),e.flags|=98560,s=!1;else if(s=Ao(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Dt]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else _t!==null&&(zc(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ye===0&&(ye=3):fd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return ii(),Mc(t,e),t===null&&vs(e.stateNode.containerInfo),Me(e),null;case 10:return Yh(e.type._context),Me(e),null;case 17:return et(e.type)&&wa(),Me(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$i(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ca(t),o!==null){for(e.flags|=128,$i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>oi&&(e.flags|=128,r=!0,$i(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Me(e),null}else 2*he()-s.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,$i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,X(se,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return dd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function XS(t,e){switch(qh(e),e.tag){case 1:return et(e.type)&&wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ii(),ne(Ze),ne(ze),td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ed(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return ii(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var Do=!1,Ue=!1,JS=typeof WeakSet=="function"?WeakSet:Set,k=null;function br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function $c(t,e,n){try{n()}catch(r){le(t,e,r)}}var Op=!1;function ZS(t,e){if(wc=ma,t=ly(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:t,selectionRange:n},ma=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Et(e.type,v),D);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=Op,Op=!1,y}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$c(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sv(t){var e=t.alternate;e!==null&&(t.alternate=null,sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[Es],delete e[Tc],delete e[MS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ov(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=va));else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function Fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}var Ne=null,St=!1;function un(t,e,n){for(n=n.child;n!==null;)av(t,e,n),n=n.sibling}function av(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ue||br(n,e);case 6:var r=Ne,i=St;Ne=null,un(t,e,n),Ne=r,St=i,Ne!==null&&(St?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(St?(t=Ne,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),ms(t)):Eu(Ne,n.stateNode));break;case 4:r=Ne,i=St,Ne=n.stateNode.containerInfo,St=!0,un(t,e,n),Ne=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$c(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Ue&&(br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,un(t,e,n),Ue=r):un(t,e,n);break;default:un(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JS),e.forEach(function(r){var i=l_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,St=!1;break e;case 3:Ne=a.stateNode.containerInfo,St=!0;break e;case 4:Ne=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ne===null)throw Error(S(160));av(s,o,i),Ne=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lv(e,t),e=e.sibling}function lv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),Rt(t),r&4){try{Zi(3,t,t.return),pl(3,t)}catch(v){le(t,t.return,v)}try{Zi(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:wt(e,t),Rt(t),r&512&&n!==null&&br(n,n.return);break;case 5:if(wt(e,t),Rt(t),r&512&&n!==null&&br(n,n.return),t.flags&32){var i=t.stateNode;try{hs(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rg(i,s),uc(a,o);var u=uc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Lg(i,d):c==="dangerouslySetInnerHTML"?xg(i,d):c==="children"?hs(i,d):Dh(i,c,d,u)}switch(a){case"input":ic(i,s);break;case"textarea":Og(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?jr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?jr(i,!!s.multiple,s.defaultValue,!0):jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Es]=s}catch(v){le(t,t.return,v)}}break;case 6:if(wt(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(wt(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:wt(e,t),Rt(t);break;case 13:wt(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cd=he())),r&4&&xp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,wt(e,t),Ue=u):wt(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:Zi(4,h,h.return);break;case 1:br(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:br(h,h.return);break;case 22:if(h.memoizedState!==null){Lp(d);continue}}g!==null?(g.return=h,k=g):Lp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pg("display",o))}catch(v){le(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){le(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wt(e,t),Rt(t),r&4&&xp(t);break;case 21:break;default:wt(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ov(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hs(i,""),r.flags&=-33);var s=Dp(t);Fc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dp(t);Uc(t,a,o);break;default:throw Error(S(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e_(t,e,n){k=t,uv(t)}function uv(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Do;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=Do;var u=Ue;if(Do=o,(Ue=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Mp(i):l!==null?(l.return=o,k=l):Mp(i);for(;s!==null;)k=s,uv(s),s=s.sibling;k=i,Do=a,Ue=u}Pp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Pp(t)}}function Pp(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ms(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ue||e.flags&512&&bc(e)}catch(h){le(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Lp(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Mp(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{bc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{bc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var t_=Math.ceil,Ra=an.ReactCurrentDispatcher,ld=an.ReactCurrentOwner,mt=an.ReactCurrentBatchConfig,W=0,ke=null,pe=null,Oe=0,rt=0,Ur=Fn(0),ye=0,Cs=null,ur=0,ml=0,ud=0,es=null,Xe=null,cd=0,oi=1/0,Bt=null,Oa=!1,Vc=null,Cn=null,xo=!1,En=null,Da=0,ts=0,Bc=null,Zo=-1,ea=0;function Ge(){return W&6?he():Zo!==-1?Zo:Zo=he()}function Nn(t){return t.mode&1?W&2&&Oe!==0?Oe&-Oe:US.transition!==null?(ea===0&&(ea=qg()),ea):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Zg(t.type)),t):1}function Ct(t,e,n,r){if(50<ts)throw ts=0,Bc=null,Error(S(185));zs(t,n,r),(!(W&2)||t!==ke)&&(t===ke&&(!(W&2)&&(ml|=n),ye===4&&pn(t,Oe)),tt(t,r),n===1&&W===0&&!(e.mode&1)&&(oi=he()+500,hl&&Vn()))}function tt(t,e){var n=t.callbackNode;UE(t,e);var r=pa(t,t===ke?Oe:0);if(r===0)n!==null&&Hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hf(n),e===1)t.tag===0?bS($p.bind(null,t)):vy($p.bind(null,t)),PS(function(){!(W&6)&&Vn()}),n=null;else{switch(Wg(r)){case 1:n=$h;break;case 4:n=Hg;break;case 16:n=fa;break;case 536870912:n=Kg;break;default:n=fa}n=yv(n,cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cv(t,e){if(Zo=-1,ea=0,W&6)throw Error(S(327));var n=t.callbackNode;if(Wr()&&t.callbackNode!==n)return null;var r=pa(t,t===ke?Oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xa(t,r);else{e=r;var i=W;W|=2;var s=dv();(ke!==t||Oe!==e)&&(Bt=null,oi=he()+500,er(t,e));do try{i_();break}catch(a){hv(t,a)}while(1);Qh(),Ra.current=s,W=i,pe!==null?e=0:(ke=null,Oe=0,e=ye)}if(e!==0){if(e===2&&(i=pc(t),i!==0&&(r=i,e=jc(t,i))),e===1)throw n=Cs,er(t,0),pn(t,r),tt(t,he()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!n_(i)&&(e=xa(t,r),e===2&&(s=pc(t),s!==0&&(r=s,e=jc(t,s))),e===1))throw n=Cs,er(t,0),pn(t,r),tt(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:qn(t,Xe,Bt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=cd+500-he(),10<e)){if(pa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_c(qn.bind(null,t,Xe,Bt),e);break}qn(t,Xe,Bt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t_(r/1960))-r,10<r){t.timeoutHandle=_c(qn.bind(null,t,Xe,Bt),r);break}qn(t,Xe,Bt);break;case 5:qn(t,Xe,Bt);break;default:throw Error(S(329))}}}return tt(t,he()),t.callbackNode===n?cv.bind(null,t):null}function jc(t,e){var n=es;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=xa(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&zc(e)),t}function zc(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function n_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~ud,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kt(e),r=1<<n;t[n]=-1,e&=~r}}function $p(t){if(W&6)throw Error(S(327));Wr();var e=pa(t,0);if(!(e&1))return tt(t,he()),null;var n=xa(t,e);if(t.tag!==0&&n===2){var r=pc(t);r!==0&&(e=r,n=jc(t,r))}if(n===1)throw n=Cs,er(t,0),pn(t,e),tt(t,he()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qn(t,Xe,Bt),tt(t,he()),null}function hd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(oi=he()+500,hl&&Vn())}}function cr(t){En!==null&&En.tag===0&&!(W&6)&&Wr();var e=W;W|=1;var n=mt.transition,r=Y;try{if(mt.transition=null,Y=1,t)return t()}finally{Y=r,mt.transition=n,W=e,!(W&6)&&Vn()}}function dd(){rt=Ur.current,ne(Ur)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xS(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wa();break;case 3:ii(),ne(Ze),ne(ze),td();break;case 5:ed(r);break;case 4:ii();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Yh(r.type._context);break;case 22:case 23:dd()}n=n.return}if(ke=t,pe=t=An(t.current,null),Oe=rt=e,ye=0,Cs=null,ud=ml=ur=0,Xe=es=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function hv(t,e){do{var n=pe;try{if(Qh(),Yo.current=Aa,Na){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Na=!1}if(lr=0,Te=ge=oe=null,Ji=!1,Ts=0,ld.current=null,n===null||n.return===null){ye=1,Cs=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Tp(o);if(g!==null){g.flags&=-257,Ip(g,o,a,s,e),g.mode&1&&_p(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){_p(s,u,e),fd();break e}l=Error(S(426))}}else if(re&&a.mode&1){var D=Tp(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ip(D,o,a,s,e),Wh(si(l,a));break e}}s=l=si(l,a),ye!==4&&(ye=2),es===null?es=[s]:es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Gy(s,l,e);mp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Cn===null||!Cn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Qy(s,a,e);mp(s,E);break e}}s=s.return}while(s!==null)}pv(n)}catch(I){e=I,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function dv(){var t=Ra.current;return Ra.current=Aa,t===null?Aa:t}function fd(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(ur&268435455)&&!(ml&268435455)||pn(ke,Oe)}function xa(t,e){var n=W;W|=2;var r=dv();(ke!==t||Oe!==e)&&(Bt=null,er(t,e));do try{r_();break}catch(i){hv(t,i)}while(1);if(Qh(),W=n,Ra.current=r,pe!==null)throw Error(S(261));return ke=null,Oe=0,ye}function r_(){for(;pe!==null;)fv(pe)}function i_(){for(;pe!==null&&!RE();)fv(pe)}function fv(t){var e=gv(t.alternate,t,rt);t.memoizedProps=t.pendingProps,e===null?pv(t):pe=e,ld.current=null}function pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XS(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,pe=null;return}}else if(n=YS(n,e,rt),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ye===0&&(ye=5)}function qn(t,e,n){var r=Y,i=mt.transition;try{mt.transition=null,Y=1,s_(t,e,n,r)}finally{mt.transition=i,Y=r}return null}function s_(t,e,n,r){do Wr();while(En!==null);if(W&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FE(t,s),t===ke&&(pe=ke=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,yv(fa,function(){return Wr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mt.transition,mt.transition=null;var o=Y;Y=1;var a=W;W|=4,ld.current=null,ZS(t,n),lv(n,t),kS(Ec),ma=!!wc,Ec=wc=null,t.current=n,e_(n),OE(),W=a,Y=o,mt.transition=s}else t.current=n;if(xo&&(xo=!1,En=t,Da=i),s=t.pendingLanes,s===0&&(Cn=null),PE(n.stateNode),tt(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oa)throw Oa=!1,t=Vc,Vc=null,t;return Da&1&&t.tag!==0&&Wr(),s=t.pendingLanes,s&1?t===Bc?ts++:(ts=0,Bc=t):ts=0,Vn(),null}function Wr(){if(En!==null){var t=Wg(Da),e=mt.transition,n=Y;try{if(mt.transition=null,Y=16>t?16:t,En===null)var r=!1;else{if(t=En,En=null,Da=0,W&6)throw Error(S(331));var i=W;for(W|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Zi(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var h=c.sibling,g=c.return;if(sv(c),c===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(I){le(a,a.return,I)}if(a===o){k=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,k=E;break e}k=a.return}}if(W=i,Vn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{Y=n,mt.transition=e}}return!1}function bp(t,e,n){e=si(n,e),e=Gy(t,e,1),t=kn(t,e,1),e=Ge(),t!==null&&(zs(t,1,e),tt(t,e))}function le(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){t=si(n,t),t=Qy(e,t,1),e=kn(e,t,1),t=Ge(),e!==null&&(zs(e,1,t),tt(e,t));break}}e=e.return}}function o_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Oe&n)===n&&(ye===4||ye===3&&(Oe&130023424)===Oe&&500>he()-cd?er(t,0):ud|=n),tt(t,e)}function mv(t,e){e===0&&(t.mode&1?(e=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):e=1);var n=Ge();t=Zt(t,e),t!==null&&(zs(t,e,n),tt(t,n))}function a_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mv(t,n)}function l_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),mv(t,n)}var gv;gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,QS(t,e,n);Je=!!(t.flags&131072)}else Je=!1,re&&e.flags&1048576&&wy(e,_a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jo(t,e),t=e.pendingProps;var i=ti(e,ze.current);qr(e,n),i=rd(null,e,r,t,i,n);var s=id();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,Ea(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jh(e),i.updater=dl,e.stateNode=i,i._reactInternals=e,Rc(e,r,t,n),e=xc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Kh(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=c_(r),t=Et(r,t),i){case 0:e=Dc(null,e,r,t,n);break e;case 1:e=Np(null,e,r,t,n);break e;case 11:e=kp(null,e,r,t,n);break e;case 14:e=Cp(null,e,r,Et(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),Dc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),Np(t,e,r,i,n);case 3:e:{if(Zy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ty(t,e),ka(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=si(Error(S(423)),e),e=Ap(t,e,r,n,i);break e}else if(r!==i){i=si(Error(S(424)),e),e=Ap(t,e,r,n,i);break e}else for(it=In(e.stateNode.containerInfo.firstChild),st=e,re=!0,_t=null,n=Ny(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){e=en(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Ay(e),t===null&&Cc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sc(r,i)?o=null:s!==null&&Sc(r,s)&&(e.flags|=32),Jy(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&Cc(e),null;case 13:return ev(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),kp(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Ta,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Ze.current){e=en(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qr(e,n),i=gt(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=Et(r,e.pendingProps),i=Et(r.type,i),Cp(t,e,r,i,n);case 15:return Yy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),Jo(t,e),e.tag=1,et(r)?(t=!0,Ea(e)):t=!1,qr(e,n),ky(e,r,i),Rc(e,r,i,n),xc(null,e,r,!0,t,n);case 19:return tv(t,e,n);case 22:return Xy(t,e,n)}throw Error(S(156,e.tag))};function yv(t,e){return zg(t,e)}function u_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new u_(t,e,n,r)}function pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c_(t){if(typeof t=="function")return pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ph)return 11;if(t===Lh)return 14}return 2}function An(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ta(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ar:return tr(n.children,i,s,e);case xh:o=8,i|=8;break;case Zu:return t=pt(12,n,e,i|2),t.elementType=Zu,t.lanes=s,t;case ec:return t=pt(13,n,e,i),t.elementType=ec,t.lanes=s,t;case tc:return t=pt(19,n,e,i),t.elementType=tc,t.lanes=s,t;case Cg:return gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ig:o=10;break e;case kg:o=9;break e;case Ph:o=11;break e;case Lh:o=14;break e;case hn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tr(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function gl(t,e,n,r){return t=pt(22,t,r,e),t.elementType=Cg,t.lanes=n,t.stateNode={isHidden:!1},t}function Au(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function h_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function md(t,e,n,r,i,s,o,a,l){return t=new h_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function d_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vv(t){if(!t)return Ln;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(et(n))return yy(t,n,e)}return e}function wv(t,e,n,r,i,s,o,a,l){return t=md(n,r,!0,t,i,s,o,a,l),t.context=vv(null),n=t.current,r=Ge(),i=Nn(n),s=Qt(r,i),s.callback=e??null,kn(n,s,i),t.current.lanes=i,zs(t,i,r),tt(t,r),t}function yl(t,e,n,r){var i=e.current,s=Ge(),o=Nn(i);return n=vv(n),e.context===null?e.context=n:e.pendingContext=n,e=Qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(Ct(t,i,o,s),Qo(t,i,o)),o}function Pa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gd(t,e){Up(t,e),(t=t.alternate)&&Up(t,e)}function f_(){return null}var Ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function yd(t){this._internalRoot=t}vl.prototype.render=yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));yl(t,e,null,null)};vl.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cr(function(){yl(null,t,null,null)}),e[Jt]=null}};function vl(t){this._internalRoot=t}vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&Jg(t)}};function vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function p_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pa(o);s.call(u)}}var o=wv(e,r,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=o,t[Jt]=o.current,vs(t.nodeType===8?t.parentNode:t),cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pa(l);a.call(u)}}var l=md(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=l,t[Jt]=l.current,vs(t.nodeType===8?t.parentNode:t),cr(function(){yl(e,l,n,r)}),l}function El(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pa(o);a.call(l)}}yl(e,o,t,i)}else o=p_(n,e,t,i,r);return Pa(o)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bi(e.pendingLanes);n!==0&&(bh(e,n|1),tt(e,he()),!(W&6)&&(oi=he()+500,Vn()))}break;case 13:cr(function(){var r=Zt(t,1);if(r!==null){var i=Ge();Ct(r,t,1,i)}}),gd(t,1)}};Uh=function(t){if(t.tag===13){var e=Zt(t,134217728);if(e!==null){var n=Ge();Ct(e,t,134217728,n)}gd(t,134217728)}};Qg=function(t){if(t.tag===13){var e=Nn(t),n=Zt(t,e);if(n!==null){var r=Ge();Ct(n,t,e,r)}gd(t,e)}};Yg=function(){return Y};Xg=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};hc=function(t,e,n){switch(e){case"input":if(ic(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cl(r);if(!i)throw Error(S(90));Ag(r),ic(r,i)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&jr(t,!!n.multiple,e,!1)}};bg=hd;Ug=cr;var m_={usingClientEntryPoint:!1,Events:[Ks,xr,cl,Mg,$g,hd]},bi={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},g_={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bg(t),t===null?null:t.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{ol=Po.inject(g_),Pt=Po}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m_;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(e))throw Error(S(200));return d_(t,e,null,n)};ut.createRoot=function(t,e){if(!vd(t))throw Error(S(299));var n=!1,r="",i=Ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=md(t,1,!1,null,null,n,!1,r,i),t[Jt]=e.current,vs(t.nodeType===8?t.parentNode:t),new yd(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Bg(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return cr(t)};ut.hydrate=function(t,e,n){if(!wl(e))throw Error(S(200));return El(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!vd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wv(e,null,t,1,n??null,i,!1,s,o),t[Jt]=e.current,vs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vl(e)};ut.render=function(t,e,n){if(!wl(e))throw Error(S(200));return El(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!wl(t))throw Error(S(40));return t._reactRootContainer?(cr(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};ut.unstable_batchedUpdates=hd;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return El(t,e,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ut})(fE);var Vp=Yu;Qu.createRoot=Vp.createRoot,Qu.hydrateRoot=Vp.hydrateRoot;var Sv={},Sl={},La={},y_={get exports(){return La},set exports(t){La=t}},v_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w_=v_,E_=w_;function _v(){}function Tv(){}Tv.resetWarningCache=_v;var S_=function(){function t(r,i,s,o,a,l){if(l!==E_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Tv,resetWarningCache:_v};return n.PropTypes=n,n};y_.exports=S_();var _l={},Re={};Object.defineProperty(Re,"__esModule",{value:!0});Re.disabledIconStyle=Re.disabledStyle=Re.hoverStyle=Re.svgStyle=Re.iconStyle=Re.lightStyle=Re.darkStyle=void 0;function Bp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Iv(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bp(Object(n),!0).forEach(function(r){__(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function __(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var kv={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},T_=Iv({backgroundColor:"#4285f4",color:"#fff"},kv);Re.darkStyle=T_;var I_=Iv({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},kv);Re.lightStyle=I_;var k_={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};Re.iconStyle=k_;var C_={width:"48px",height:"48px",display:"block"};Re.svgStyle=C_;var N_={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};Re.hoverStyle=N_;var A_={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};Re.disabledStyle=A_;var R_={backgroundColor:"transparent"};Re.disabledIconStyle=R_;Object.defineProperty(_l,"__esModule",{value:!0});_l.GoogleIcon=void 0;var T=Cv(Ie),jp=Cv(La),Gr=Re;function Cv(t){return t&&t.__esModule?t:{default:t}}function zp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zp(Object(n),!0).forEach(function(r){D_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function D_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x_=T.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:Gr.svgStyle},T.default.createElement("defs",null,T.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},T.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),T.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),T.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),T.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),T.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),T.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),T.default.createElement("feMerge",null,T.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),T.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),T.default.createElement("feMergeNode",{in:"SourceGraphic"}))),T.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),T.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),T.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},T.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),T.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},T.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},T.default.createElement("g",{id:"button-bg"},T.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}))),T.default.createElement("g",{id:"button-bg-copy"},T.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"})),T.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},T.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),T.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),T.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),T.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),T.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),T.default.createElement("g",{id:"handles_square"})))),P_=T.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:Gr.svgStyle},T.default.createElement("defs",null,T.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},T.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),T.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),T.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),T.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),T.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),T.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),T.default.createElement("feMerge",null,T.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),T.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),T.default.createElement("feMergeNode",{in:"SourceGraphic"}))),T.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),T.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},T.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),T.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},T.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},T.default.createElement("g",{id:"button-bg"},T.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}))),T.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},T.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),T.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),T.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),T.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),T.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),T.default.createElement("g",{id:"handles_square"})))),L_=T.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:Gr.svgStyle},T.default.createElement("defs",null,T.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),T.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},T.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),T.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},T.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},T.default.createElement("g",{id:"button-bg"},T.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}),T.default.createElement("use",{fill:"none"}))),T.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),T.default.createElement("g",{id:"handles_square"})))),wd=function(e){var n=e.disabled,r=e.type;return T.default.createElement("div",{style:n?O_({},Gr.iconStyle,{},Gr.disabledIconStyle):Gr.iconStyle},n?L_:r==="dark"?x_:P_)};_l.GoogleIcon=wd;wd.propTypes={disabled:jp.default.bool,type:jp.default.oneOf(["light","dark"])};wd.defaultProps={type:"dark"};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.default=void 0;var Lo=b_(Ie),Tr=$_(La),M_=_l,Mo=Re;function $_(t){return t&&t.__esModule?t:{default:t}}function Nv(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Nv=function(){return t},t}function b_(t){if(t&&t.__esModule)return t;if(t===null||ns(t)!=="object"&&typeof t!="function")return{default:t};var e=Nv();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=r?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function ns(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ns=function(n){return typeof n}:ns=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ns(t)}function Hc(){return Hc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hc.apply(this,arguments)}function U_(t,e){if(t==null)return{};var n=F_(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function F_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Hp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ou(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hp(Object(n),!0).forEach(function(r){mn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function V_(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Kp(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function B_(t,e,n){return e&&Kp(t.prototype,e),n&&Kp(t,n),t}function j_(t){return function(){var e=Ma(t),n;if(H_()){var r=Ma(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return z_(this,n)}}function z_(t,e){return e&&(ns(e)==="object"||typeof e=="function")?e:Ir(t)}function Ir(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ma(t){return Ma=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ma(t)}function K_(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Kc(t,e)}function Kc(t,e){return Kc=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Kc(t,e)}function mn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ed=function(t){K_(n,t);var e=j_(n);function n(){var r;V_(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),mn(Ir(r),"state",{hovered:!1}),mn(Ir(r),"getStyle",function(a){var l=r.props.type==="dark"?Mo.darkStyle:Mo.lightStyle;return r.state.hovered?Ou({},l,{},Mo.hoverStyle,{},a):r.props.disabled?Ou({},l,{},Mo.disabledStyle,{},a):Ou({},l,{},a)}),mn(Ir(r),"mouseOver",function(){r.props.disabled||r.setState({hovered:!0})}),mn(Ir(r),"mouseOut",function(){r.props.disabled||r.setState({hovered:!1})}),mn(Ir(r),"click",function(a){r.props.disabled||r.props.onClick(a)}),r}return B_(n,[{key:"render",value:function(){var i=this.props,s=i.label,o=i.style,a=U_(i,["label","style"]);return Lo.default.createElement("div",Hc({},a,{role:"button",onClick:this.click,style:this.getStyle(o),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),Lo.default.createElement(M_.GoogleIcon,this.props),Lo.default.createElement("span",null,s))}}]),n}(Lo.PureComponent);Sl.default=Ed;mn(Ed,"propTypes",{label:Tr.default.string,disabled:Tr.default.bool,tabIndex:Tr.default.number,onClick:Tr.default.func,type:Tr.default.oneOf(["light","dark"]),style:Tr.default.object});mn(Ed,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GoogleButton",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.default}});var e=n(Sl);function n(r){return r&&r.__esModule?r:{default:r}}})(Sv);const q_=dg(Sv);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},W_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):W_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new G_;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q_=function(t){const e=Av(t);return Rv.encodeByteArray(e,!0)},$a=function(t){return Q_(t).replace(/\./g,"")},Ov=function(t){try{return Rv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=()=>Y_().__FIREBASE_DEFAULTS__,J_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ov(t[1]);return e&&JSON.parse(e)},Sd=()=>{try{return X_()||J_()||Z_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dv=t=>{var e,n;return(n=(e=Sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eT=t=>{const e=Dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tT=()=>{var t;return(t=Sd())===null||t===void 0?void 0:t.config},xv=t=>{var e;return(e=Sd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$a(JSON.stringify(n)),$a(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function sT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aT(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lT(){try{return typeof indexedDB=="object"}catch{return!1}}function uT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cT,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function hT(t,e){return t.replace(dT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dT=/\{\$([^}]+)}/g;function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qp(s)&&qp(o)){if(!ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pT(t,e){const n=new mT(t,e);return n.subscribe.bind(n)}class mT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Du),i.error===void 0&&(i.error=Du),i.complete===void 0&&(i.complete=Du);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Du(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vT(t){return t===Wn?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const ST={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},_T=G.INFO,TT={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},IT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=_T,this._logHandler=IT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ST[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const kT=(t,e)=>e.some(n=>t instanceof n);let Wp,Gp;function CT(){return Wp||(Wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NT(){return Gp||(Gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pv=new WeakMap,qc=new WeakMap,Lv=new WeakMap,xu=new WeakMap,Td=new WeakMap;function AT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pv.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function RT(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OT(t){Wc=t(Wc)}function DT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pu(this),e,...n);return Lv.set(r,e.sort?e.sort():[e]),Rn(r)}:NT().includes(t)?function(...e){return t.apply(Pu(this),e),Rn(Pv.get(this))}:function(...e){return Rn(t.apply(Pu(this),e))}}function xT(t){return typeof t=="function"?DT(t):(t instanceof IDBTransaction&&RT(t),kT(t,CT())?new Proxy(t,Wc):t)}function Rn(t){if(t instanceof IDBRequest)return AT(t);if(xu.has(t))return xu.get(t);const e=xT(t);return e!==t&&(xu.set(t,e),Td.set(e,t)),e}const Pu=t=>Td.get(t);function PT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const LT=["get","getKey","getAll","getAllKeys","count"],MT=["put","add","delete","clear"],Lu=new Map;function Qp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lu.get(e))return Lu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Lu.set(e,s),s}OT(t=>({...t,get:(e,n,r)=>Qp(e,n)||t.get(e,n,r),has:(e,n)=>!!Qp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gc="@firebase/app",Yp="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new _d("@firebase/app"),UT="@firebase/app-compat",FT="@firebase/analytics-compat",VT="@firebase/analytics",BT="@firebase/app-check-compat",jT="@firebase/app-check",zT="@firebase/auth",HT="@firebase/auth-compat",KT="@firebase/database",qT="@firebase/database-compat",WT="@firebase/functions",GT="@firebase/functions-compat",QT="@firebase/installations",YT="@firebase/installations-compat",XT="@firebase/messaging",JT="@firebase/messaging-compat",ZT="@firebase/performance",eI="@firebase/performance-compat",tI="@firebase/remote-config",nI="@firebase/remote-config-compat",rI="@firebase/storage",iI="@firebase/storage-compat",sI="@firebase/firestore",oI="@firebase/firestore-compat",aI="firebase",lI="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",uI={[Gc]:"fire-core",[UT]:"fire-core-compat",[VT]:"fire-analytics",[FT]:"fire-analytics-compat",[jT]:"fire-app-check",[BT]:"fire-app-check-compat",[zT]:"fire-auth",[HT]:"fire-auth-compat",[KT]:"fire-rtdb",[qT]:"fire-rtdb-compat",[WT]:"fire-fn",[GT]:"fire-fn-compat",[QT]:"fire-iid",[YT]:"fire-iid-compat",[XT]:"fire-fcm",[JT]:"fire-fcm-compat",[ZT]:"fire-perf",[eI]:"fire-perf-compat",[tI]:"fire-rc",[nI]:"fire-rc-compat",[rI]:"fire-gcs",[iI]:"fire-gcs-compat",[sI]:"fire-fst",[oI]:"fire-fst-compat","fire-js":"fire-js",[aI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Map,Yc=new Map;function cI(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(Yc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,t);for(const n of Ua.values())cI(n,t);return!0}function Id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new Ws("app","Firebase",hI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=lI;function Mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=tT()),!n)throw On.create("no-options");const s=Ua.get(i);if(s){if(ba(n,s.options)&&ba(r,s.config))return s;throw On.create("duplicate-app",{appName:i})}const o=new ET(i);for(const l of Yc.values())o.addComponent(l);const a=new dI(n,r,o);return Ua.set(i,a),a}function $v(t=Qc){const e=Ua.get(t);if(!e&&t===Qc)return Mv();if(!e)throw On.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let i=(r=uI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}ai(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebase-heartbeat-database",pI=1,Ns="firebase-heartbeat-store";let Mu=null;function bv(){return Mu||(Mu=PT(fI,pI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),Mu}async function mI(t){try{return(await bv()).transaction(Ns).objectStore(Ns).get(Uv(t))}catch(e){if(e instanceof ln)dr.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Xp(t,e){try{const r=(await bv()).transaction(Ns,"readwrite");return await r.objectStore(Ns).put(e,Uv(t)),r.done}catch(n){if(n instanceof ln)dr.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function Uv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=1024,yI=30*24*60*60*1e3;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jp(),{heartbeatsToSend:n,unsentEntries:r}=wI(this._heartbeatsCache.heartbeats),i=$a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jp(){return new Date().toISOString().substring(0,10)}function wI(t,e=gI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lT()?uT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zp(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){ai(new hr("platform-logger",e=>new $T(e),"PRIVATE")),ai(new hr("heartbeat",e=>new vI(e),"PRIVATE")),Dn(Gc,Yp,t),Dn(Gc,Yp,"esm2017"),Dn("fire-js","")}SI("");var _I="firebase",TI="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(_I,TI,"app");function kd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Fv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=Fv,Vv=new Ws("auth","Firebase",Fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new _d("@firebase/auth");function na(t,...e){em.logLevel<=G.ERROR&&em.error(`Auth (${Qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Cd(t,...e)}function Mt(t,...e){return Cd(t,...e)}function Bv(t,e,n){const r=Object.assign(Object.assign({},II()),{[e]:n});return new Ws("auth","Firebase",r).create(e,{appName:t.name})}function kI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ut(t,"argument-error"),Bv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vv.create(t,...e)}function b(t,e,...n){if(!t)throw Cd(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function tn(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=new Map;function Wt(t){tn(t instanceof Function,"Expected a class definition");let e=tm.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){const n=Id(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ba(s,e??{}))return i;Ut(i,"already-initialized")}return n.initialize({options:e})}function NI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AI(){return nm()==="http:"||nm()==="https:"}function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AI()||sT()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=iT()||oT()}get(){return RI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Ys(3e4,6e4);function PI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tl(t,e,n,r,i={}){return zv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jv.fetch()(Hv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DI),e);try{const i=new MI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $o(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bv(t,c,u);Ut(t,c)}}catch(i){if(i instanceof ln)throw i;Ut(t,"internal-error",{message:String(i)})}}async function LI(t,e,n,r,i={}){const s=await Tl(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nd(t.config,i):`${t.config.apiScheme}://${i}`}class MI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),xI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e){return Tl(t,"POST","/v1/accounts:delete",e)}async function bI(t,e){return Tl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UI(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=Ad(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rs($u(i.auth_time)),issuedAtTime:rs($u(i.iat)),expirationTime:rs($u(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function Ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ov(n);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function FI(t){const e=Ad(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&VI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await As(t,bI(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HI(s.providerUserInfo):[],a=zI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Kv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function jI(t){const e=nt(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HI(t){return t.map(e=>{var{providerId:n}=e,r=kd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e){const n=await zv(t,{},async()=>{const r=Gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rs;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await As(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await As(this,$I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:C,stsTokenManager:A}=n;b(m&&A,e,"internal-error");const x=Rs.fromJSON(this.name,A);b(typeof m=="string",e,"internal-error"),cn(d,e.name),cn(h,e.name),b(typeof E=="boolean",e,"internal-error"),b(typeof I=="boolean",e,"internal-error"),cn(g,e.name),cn(y,e.name),cn(v,e.name),cn(D,e.name),cn(p,e.name),cn(f,e.name);const Z=new nr({uid:m,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(Z.providerData=C.map(z=>Object.assign({},z))),D&&(Z._redirectEventId=D),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const s=new nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fa(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qv.type="NONE";const rm=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(Wt(rm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(rm);const o=ra(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=nr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xv(e))return"Blackberry";if(Jv(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||Gv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wv(t=He()){return/firefox\//i.test(t)}function Rd(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gv(t=He()){return/crios\//i.test(t)}function Qv(t=He()){return/iemobile/i.test(t)}function Yv(t=He()){return/android/i.test(t)}function Xv(t=He()){return/blackberry/i.test(t)}function Jv(t=He()){return/webos/i.test(t)}function Il(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qI(t=He()){var e;return Il(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WI(){return aT()&&document.documentMode===10}function Zv(t=He()){return Il(t)||Yv(t)||Jv(t)||Xv(t)||/windows phone/i.test(t)||Qv(t)}function GI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e=[]){let n;switch(t){case"Browser":n=im(He());break;case"Worker":n=`${im(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new QI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function kl(t){return nt(t)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=pT(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XI(t,e,n){const r=kl(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=t0(e),{host:o,port:a}=JI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZI()}function t0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JI(t){const e=t0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:om(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:om(o)}}}function om(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return LI(t,"POST","/v1/accounts:signInWithIdp",PI(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="http://localhost";class fr extends n0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:ek,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Xs{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Xs{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Xs{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await nr._fromIdTokenResponse(e,r,i),o=am(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=am(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function am(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Va(e,n,r,i)}}function r0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(t,s,e,r):s})}async function tk(t,e,n=!1){const r=await As(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await As(t,r0(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Ad(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e,n=!1){const r="signIn",i=await r0(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function ik(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function sk(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function ok(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}const Ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){const t=He();return Rd(t)||Il(t)}const lk=1e3,uk=10;class s0 extends i0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ak()&&GI(),this.fallbackToPolling=Zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s0.type="LOCAL";const ck=s0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0 extends i0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o0.type="SESSION";const a0=o0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Dd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function fk(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function pk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gk(){return l0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="firebaseLocalStorageDb",yk=1,ja="firebaseLocalStorage",c0="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function vk(){const t=indexedDB.deleteDatabase(u0);return new Js(t).toPromise()}function Jc(){const t=indexedDB.open(u0,yk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:c0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await vk(),e(await Jc()))})})}async function lm(t,e,n){const r=Nl(t,!0).put({[c0]:e,value:n});return new Js(r).toPromise()}async function wk(t,e){const n=Nl(t,!1).get(e),r=await new Js(n).toPromise();return r===void 0?null:r.value}function um(t,e){const n=Nl(t,!0).delete(e);return new Js(n).toPromise()}const Ek=800,Sk=3;class h0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(gk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pk(),!this.activeServiceWorker)return;this.sender=new dk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await lm(e,Ba,"1"),await um(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nl(i,!1).getAll();return new Js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h0.type="LOCAL";const _k=h0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ik(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tk().appendChild(r)})}function kk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t,e){return e?Wt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends n0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ck(t){return rk(t.auth,new xd(t),t.bypassAuthState)}function Nk(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),nk(n,new xd(t),t.bypassAuthState)}async function Ak(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),tk(n,new xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ck;case"linkViaPopup":case"linkViaRedirect":return Ak;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:Ut(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Ys(2e3,1e4);class Fr extends f0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Rk.get())};e()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="pendingRedirect",ia=new Map;class Dk extends f0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await xk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xk(t,e){const n=m0(e),r=p0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Pk(t,e){return p0(t)._set(m0(e),"true")}function Lk(t,e){ia.set(t._key(),e)}function p0(t){return Wt(t._redirectPersistence)}function m0(t){return ra(Ok,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e,n){return $k(t,e,n)}async function $k(t,e,n){const r=kl(t);kI(t,e,Od),await r._initializationPromise;const i=d0(r,n);return await Pk(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function bk(t,e,n=!1){const r=kl(t),i=d0(r,e),o=await new Dk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=10*60*1e3;class Fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))}saveEventToCache(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()}}function cm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e={}){return Tl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zk=/^https?/;async function Hk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bk(t);for(const n of e)try{if(Kk(n))return}catch{}Ut(t,"unauthorized-domain")}function Kk(t){const e=Xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zk.test(n))return!1;if(jk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new Ys(3e4,6e4);function hm(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wk(t){return new Promise((e,n)=>{var r,i,s;function o(){hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hm(),n(Mt(t,"network-request-failed"))},timeout:qk.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const a=kk("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},Ik(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sa=null,e})}let sa=null;function Gk(t){return sa=sa||Wk(t),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new Ys(5e3,15e3),Yk="__/auth/iframe",Xk="emulator/auth/iframe",Jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eC(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nd(e,Xk):`https://${t.config.authDomain}/${Yk}`,r={apiKey:e.apiKey,appName:t.name,v:Qs},i=Zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gs(r).slice(1)}`}async function tC(t){const e=await Gk(t),n=$t().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:eC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=$t().setTimeout(()=>{s(o)},Qk.get());function l(){$t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rC=500,iC=600,sC="_blank",oC="http://localhost";class dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aC(t,e,n,r=rC,i=iC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=Gv(u)?sC:n),Wv(u)&&(e=e||oC,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(qI(u)&&a!=="_self")return lC(e||"",a),new dm(null);const d=window.open(e||"",a,c);b(d,t,"popup-blocked");try{d.focus()}catch{}return new dm(d)}function lC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="__/auth/handler",cC="emulator/auth/handler";function fm(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qs,eventId:i};if(e instanceof Od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Xs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${hC(t)}?${Gs(a).slice(1)}`}function hC({config:t}){return t.emulator?Nd(t,cC):`https://${t.authDomain}/${uC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="webStorageSupport";class dC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a0,this._completeRedirectFn=bk,this._overrideRedirectResult=Lk}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=fm(e,n,r,Xc(),i);return aC(e,o,Dd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),fk(fm(e,n,r,Xc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tC(e),r=new Fk(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bu];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zv()||Rd()||Il()}}const fC=dC;var pm="@firebase/auth",mm="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gC(t){ai(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{b(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),b(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e0(t)},c=new YI(a,l,u);return NI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new hr("auth-internal",e=>{const n=kl(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(pm,mm,mC(t)),Dn(pm,mm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=5*60,vC=xv("authIdTokenMaxAge")||yC;let gm=null;const wC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vC)return;const i=n==null?void 0:n.token;gm!==i&&(gm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function EC(t=$v()){const e=Id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CI(t,{popupRedirectResolver:fC,persistence:[_k,ck,a0]}),r=xv("authTokenSyncURL");if(r){const s=wC(r);sk(n,s,()=>s(n.currentUser)),ik(n,o=>s(o))}const i=Dv("auth");return i&&XI(n,`http://${i}`),n}gC("Browser");var SC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Pd=Pd||{},U=SC||self;function za(){}function Al(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _C(t){return Object.prototype.hasOwnProperty.call(t,Uu)&&t[Uu]||(t[Uu]=++TC)}var Uu="closure_uid_"+(1e9*Math.random()>>>0),TC=0;function IC(t,e,n){return t.call.apply(t.bind,arguments)}function kC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=IC:Be=kC,Be.apply(null,arguments)}function bo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var CC=0;Bn.prototype.s=!1;Bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CC!=0)&&_C(this)};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const y0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ld(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ym(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Al(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var NC=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",za,e),U.removeEventListener("test",za,e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}var vm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fu(t,e){return t<e?-1:t>e?1:0}function Rl(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return Rl().indexOf(t)!=-1}function Md(t){return Md[" "](t),t}Md[" "]=za;function AC(t){var e=DC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var RC=xt("Opera"),ui=xt("Trident")||xt("MSIE"),v0=xt("Edge"),Zc=v0||ui,w0=xt("Gecko")&&!(Rl().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),OC=Rl().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function E0(){var t=U.document;return t?t.documentMode:void 0}var Ka;e:{var Vu="",Bu=function(){var t=Rl();if(w0)return/rv:([^\);]+)(\)|;)/.exec(t);if(v0)return/Edge\/([\d\.]+)/.exec(t);if(ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OC)return/WebKit\/(\S+)/.exec(t);if(RC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bu&&(Vu=Bu?Bu[1]:""),ui){var ju=E0();if(ju!=null&&ju>parseFloat(Vu)){Ka=String(ju);break e}}Ka=Vu}var DC={};function xC(){return AC(function(){let t=0;const e=vm(String(Ka)).split("."),n=vm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Fu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Fu(i[2].length==0,s[2].length==0)||Fu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var eh;if(U.document&&ui){var wm=E0();eh=wm||parseInt(Ka,10)||void 0}else eh=void 0;var PC=eh;function Os(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(w0){e:{try{Md(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Os.X.h.call(this)}}Pe(Os,je);var LC={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var eo="closure_listenable_"+(1e6*Math.random()|0),MC=0;function $C(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++MC,this.ba=this.ea=!1}function Ol(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $d(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function S0(t){const e={};for(const n in t)e[n]=t[n];return e}const Em="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Em.length;s++)n=Em[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Dl(t){this.src=t,this.g={},this.h=0}Dl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=nh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new $C(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function th(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=y0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ol(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var bd="closure_lm_"+(1e6*Math.random()|0),zu={};function T0(t,e,n,r,i){if(r&&r.once)return k0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)T0(t,e[s],n,r,i);return null}return n=Vd(n),t&&t[eo]?t.N(e,n,Zs(r)?!!r.capture:!!r,i):I0(t,e,n,!1,r,i)}function I0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zs(i)?!!i.capture:!!i,a=Fd(t);if(a||(t[bd]=a=new Dl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(N0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bC(){function t(n){return e.call(t.src,t.listener,n)}const e=UC;return t}function k0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)k0(t,e[s],n,r,i);return null}return n=Vd(n),t&&t[eo]?t.O(e,n,Zs(r)?!!r.capture:!!r,i):I0(t,e,n,!0,r,i)}function C0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)C0(t,e[s],n,r,i);else r=Zs(r)?!!r.capture:!!r,n=Vd(n),t&&t[eo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=nh(s,n,r,i),-1<n&&(Ol(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nh(e,n,r,i)),(n=-1<t?e[t]:null)&&Ud(n))}function Ud(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[eo])th(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(N0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fd(e))?(th(n,t),n.h==0&&(n.src=null,e[bd]=null)):Ol(t)}}}function N0(t){return t in zu?zu[t]:zu[t]="on"+t}function UC(t,e){if(t.ba)t=!0;else{e=new Os(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ud(t),t=n.call(r,e)}return t}function Fd(t){return t=t[bd],t instanceof Dl?t:null}var Hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vd(t){return typeof t=="function"?t:(t[Hu]||(t[Hu]=function(e){return t.handleEvent(e)}),t[Hu])}function Ce(){Bn.call(this),this.i=new Dl(this),this.P=this,this.I=null}Pe(Ce,Bn);Ce.prototype[eo]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){C0(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var i=e;e=new je(r,t),_0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Uo(o,r,!0,e)&&i}if(o=e.g=t,i=Uo(o,r,!0,e)&&i,i=Uo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Uo(o,r,!1,e)&&i}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ol(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Uo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&th(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Bd=U.JSON.stringify;function FC(){var t=O0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VC{constructor(){this.h=this.g=null}add(e,n){const r=A0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var A0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new BC,t=>t.reset());class BC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jC(t){U.setTimeout(()=>{throw t},0)}function R0(t,e){rh||zC(),ih||(rh(),ih=!0),O0.add(t,e)}var rh;function zC(){var t=U.Promise.resolve(void 0);rh=function(){t.then(HC)}}var ih=!1,O0=new VC;function HC(){for(var t;t=FC();){try{t.h.call(t.g)}catch(n){jC(n)}var e=A0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ih=!1}function xl(t,e){Ce.call(this),this.h=t||1,this.g=e||U,this.j=Be(this.lb,this),this.l=Date.now()}Pe(xl,Ce);O=xl.prototype;O.ca=!1;O.R=null;O.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(jd(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}O.M=function(){xl.X.M.call(this),jd(this),delete this.g};function zd(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function D0(t){t.g=zd(()=>{t.g=null,t.i&&(t.i=!1,D0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KC extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:D0(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){Bn.call(this),this.h=t,this.g={}}Pe(Ds,Bn);var Sm=[];function x0(t,e,n,r){Array.isArray(n)||(n&&(Sm[0]=n.toString()),n=Sm);for(var i=0;i<n.length;i++){var s=T0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function P0(t){$d(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ud(e)},t),t.g={}}Ds.prototype.M=function(){Ds.X.M.call(this),P0(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pl(){this.g=!0}Pl.prototype.Aa=function(){this.g=!1};function qC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function WC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QC(t,n)+(r?" "+r:"")})}function GC(t,e){t.info(function(){return"TIMEOUT: "+e})}Pl.prototype.info=function(){};function QC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bd(n)}catch{return e}}var vr={},_m=null;function Ll(){return _m=_m||new Ce}vr.Pa="serverreachability";function L0(t){je.call(this,vr.Pa,t)}Pe(L0,je);function xs(t){const e=Ll();De(e,new L0(e))}vr.STAT_EVENT="statevent";function M0(t,e){je.call(this,vr.STAT_EVENT,t),this.stat=e}Pe(M0,je);function We(t){const e=Ll();De(e,new M0(e,t))}vr.Qa="timingevent";function $0(t,e){je.call(this,vr.Qa,t),this.size=e}Pe($0,je);function to(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Ml={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},b0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Hd(){}Hd.prototype.h=null;function Tm(t){return t.h||(t.h=t.i())}function U0(){}var no={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Kd(){je.call(this,"d")}Pe(Kd,je);function qd(){je.call(this,"c")}Pe(qd,je);var sh;function $l(){}Pe($l,Hd);$l.prototype.g=function(){return new XMLHttpRequest};$l.prototype.i=function(){return{}};sh=new $l;function ro(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ds(this),this.O=YC,t=Zc?125:void 0,this.T=new xl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new F0}function F0(){this.i=null,this.g="",this.h=!1}var YC=45e3,oh={},qa={};O=ro.prototype;O.setTimeout=function(t){this.O=t};function ah(t,e,n){t.K=1,t.v=Ul(nn(e)),t.s=n,t.P=!0,V0(t,null)}function V0(t,e){t.F=Date.now(),io(t),t.A=nn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),G0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new F0,t.g=m1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KC(Be(t.La,t,t.g),t.N)),x0(t.S,t.g,"readystatechange",t.ib),e=t.H?S0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),xs(),qC(t.j,t.u,t.A,t.m,t.U,t.s)}O.ib=function(t){t=t.target;const e=this.L;e&&Gt(t)==3?e.l():this.La(t)};O.La=function(t){try{if(t==this.g)e:{const c=Gt(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||Zc||this.g&&(this.h.h||this.g.fa()||Nm(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?xs(3):xs(2)),bl(this);var n=this.g.aa();this.Y=n;t:if(B0(this)){var r=Nm(this.g);t="";var i=r.length,s=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),is(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,WC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var u=a;break t}}u=null}if(n=u)Vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lh(this,n);else{this.i=!1,this.o=3,We(12),Xn(this),is(this);break e}}this.P?(j0(this,c,o),Zc&&this.i&&c==3&&(x0(this.S,this.T,"tick",this.hb),this.T.start())):(Vr(this.j,this.m,o,null),lh(this,o)),c==4&&Xn(this),this.i&&!this.I&&(c==4?h1(this.l,this):(this.i=!1,io(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),Xn(this),is(this)}}}catch{}finally{}};function B0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function j0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=XC(t,n),i==qa){e==4&&(t.o=4,We(14),r=!1),Vr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==oh){t.o=4,We(15),Vr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vr(t.j,t.m,i,null),lh(t,i);B0(t)&&i!=qa&&i!=oh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zd(e),e.K=!0,We(11))):(Vr(t.j,t.m,n,"[Invalid Chunked Response]"),Xn(t),is(t))}O.hb=function(){if(this.g){var t=Gt(this.g),e=this.g.fa();this.C<e.length&&(bl(this),j0(this,t,e),this.i&&t!=4&&io(this))}};function XC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qa:(n=Number(e.substring(n,r)),isNaN(n)?oh:(r+=1,r+n>e.length?qa:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.I=!0,Xn(this)};function io(t){t.V=Date.now()+t.O,z0(t,t.O)}function z0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=to(Be(t.gb,t),e)}function bl(t){t.B&&(U.clearTimeout(t.B),t.B=null)}O.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(GC(this.j,this.A),this.K!=2&&(xs(),We(17)),Xn(this),this.o=2,is(this)):z0(this,this.V-t)};function is(t){t.l.G==0||t.I||h1(t.l,t)}function Xn(t){bl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jd(t.T),P0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||uh(n.h,t))){if(!t.J&&uh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Qa(n),Bl(n);else break e;Jd(n),We(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=to(Be(n.cb,n),6e3));if(1>=X0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Jn(n,11)}else if((t.J||n.g==t)&&Qa(n),!Ha(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=p1(r,r.H?r.ka:null,r.V),o.J){J0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(bl(a),io(a)),r.g=o}else u1(r);0<n.i.length&&jl(n)}else u[0]!="stop"&&u[0]!="close"||Jn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jn(n,7):Xd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}xs(4)}catch{}}function JC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Al(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Al(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function H0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Al(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZC(t),r=JC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var K0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rr){this.h=e!==void 0?e:t.h,Wa(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l,e=t.i;var n=new Ps;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Im(this,n),this.o=t.o}else t&&(n=String(t).match(K0))?(this.h=!!e,Wa(this,n[1]||"",!0),this.s=zi(n[2]||""),this.g=zi(n[3]||"",!0),Ga(this,n[4]),this.l=zi(n[5]||"",!0),Im(this,n[6]||"",!0),this.o=zi(n[7]||"")):(this.h=!!e,this.i=new Ps(null,this.h))}rr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hi(e,km,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hi(e,km,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hi(n,n.charAt(0)=="/"?rN:nN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hi(n,sN)),t.join("")};function nn(t){return new rr(t)}function Wa(t,e,n){t.j=n?zi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Im(t,e,n){e instanceof Ps?(t.i=e,oN(t.i,t.h)):(n||(e=Hi(e,iN)),t.i=new Ps(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function Ul(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var km=/[#\/\?@]/g,nN=/[#\?:]/g,rN=/[#\?]/g,iN=/[#\?@]/g,sN=/#/g;function Ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jn(t){t.g||(t.g=new Map,t.h=0,t.i&&eN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Ps.prototype;O.add=function(t,e){jn(this),this.i=null,t=Ei(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function q0(t,e){jn(t),e=Ei(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function W0(t,e){return jn(t),e=Ei(t,e),t.g.has(e)}O.forEach=function(t,e){jn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.oa=function(){jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.W=function(t){jn(this);let e=[];if(typeof t=="string")W0(this,t)&&(e=e.concat(this.g.get(Ei(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return jn(this),this.i=null,t=Ei(this,t),W0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function G0(t,e,n){q0(t,e),0<n.length&&(t.i=null,t.g.set(Ei(t,e),Ld(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ei(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oN(t,e){e&&!t.j&&(jn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(q0(this,r),G0(this,i,n))},t)),t.j=e}var aN=class{constructor(e,n){this.h=e,this.g=n}};function Q0(t){this.l=t||lN,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lN=10;function Y0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function X0(t){return t.h?1:t.g?t.g.size:0}function uh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wd(t,e){t.g?t.g.add(e):t.h=e}function J0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Q0.prototype.cancel=function(){if(this.i=Z0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Z0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ld(t.i)}function Gd(){}Gd.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Gd.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function uN(){this.g=new Gd}function cN(t,e,n){const r=n||"";try{H0(t,function(i,s){let o=i;Zs(i)&&(o=Bd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function hN(t,e){const n=new Pl;if(U.Image){const r=new Image;r.onload=bo(Fo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=bo(Fo,n,r,"TestLoadImage: error",!1,e),r.onabort=bo(Fo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=bo(Fo,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function so(t){this.l=t.ac||null,this.j=t.jb||!1}Pe(so,Hd);so.prototype.g=function(){return new Fl(this.l,this.j)};so.prototype.i=function(t){return function(){return t}}({});function Fl(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Fl,Ce);var Qd=0;O=Fl.prototype;O.open=function(t,e){if(this.readyState!=Qd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=Qd};O.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;e1(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function e1(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}O.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oo(this):Ls(this),this.readyState==3&&e1(this)}};O.Va=function(t){this.g&&(this.response=this.responseText=t,oo(this))};O.Ua=function(t){this.g&&(this.response=t,oo(this))};O.ga=function(){this.g&&oo(this)};function oo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dN=U.JSON.parse;function ue(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=t1,this.K=this.L=!1}Pe(ue,Ce);var t1="",fN=/^https?$/i,pN=["POST","PUT"];O=ue.prototype;O.Ka=function(t){this.L=t};O.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sh.g(),this.C=this.u?Tm(this.u):Tm(sh),this.g.onreadystatechange=Be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Cm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=y0(pN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{i1(this),0<this.B&&((this.K=mN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.qa,this)):this.A=zd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cm(this,s)}};function mN(t){return ui&&xC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.qa=function(){typeof Pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Cm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,n1(t),Vl(t)}function n1(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Vl(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vl(this,!0)),ue.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?r1(this):this.fb())};O.fb=function(){r1(this)};function r1(t){if(t.h&&typeof Pd<"u"&&(!t.C[1]||Gt(t)!=4||t.aa()!=2)){if(t.v&&Gt(t)==4)zd(t.Ha,0,t);else if(De(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(K0)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!fN.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",n1(t)}}finally{Vl(t)}}}}function Vl(t,e){if(t.g){i1(t);const n=t.g,r=t.C[0]?za:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function i1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function Gt(t){return t.g?t.g.readyState:0}O.aa=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dN(e)}};function Nm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case t1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function s1(t){let e="";return $d(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=s1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Ui(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function o1(t){this.Ca=0,this.i=[],this.j=new Pl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ui("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ui("baseRetryDelayMs",5e3,t),this.bb=Ui("retryDelaySeedMs",1e4,t),this.$a=Ui("forwardChannelMaxRetries",2,t),this.ta=Ui("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Q0(t&&t.concurrentRequestLimit),this.Fa=new uN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=o1.prototype;O.ma=8;O.G=1;function Xd(t){if(a1(t),t.G==3){var e=t.U++,n=nn(t.F);ie(n,"SID",t.I),ie(n,"RID",e),ie(n,"TYPE","terminate"),ao(t,n),e=new ro(t,t.j,e,void 0),e.K=2,e.v=Ul(nn(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=m1(e.l,null),e.g.da(e.v)),e.F=Date.now(),io(e)}f1(t)}function Bl(t){t.g&&(Zd(t),t.g.cancel(),t.g=null)}function a1(t){Bl(t),t.u&&(U.clearTimeout(t.u),t.u=null),Qa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function jl(t){Y0(t.h)||t.m||(t.m=!0,R0(t.Ja,t),t.C=0)}function gN(t,e){return X0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=to(Be(t.Ja,t,e),d1(t,t.C)),t.C++,!0)}O.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ro(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=S0(s),_0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=l1(this,i,e),n=nn(this.F),ie(n,"RID",t),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),ao(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(s1(s)))+"&"+e:this.o&&Yd(n,this.o,s)),Wd(this.h,i),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",e),ie(n,"SID","null"),i.Z=!0,ah(i,n,null)):ah(i,n,e),this.G=2}}else this.G==3&&(t?Am(this,t):this.i.length==0||Y0(this.h)||Am(this))};function Am(t,e){var n;e?n=e.m:n=t.U++;const r=nn(t.F);ie(r,"SID",t.I),ie(r,"RID",n),ie(r,"AID",t.T),ao(t,r),t.o&&t.s&&Yd(r,t.o,t.s),n=new ro(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=l1(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wd(t.h,n),ah(n,r,e)}function ao(t,e){t.ia&&$d(t.ia,function(n,r){ie(e,r,n)}),t.l&&H0({},function(n,r){ie(e,r,n)})}function l1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Be(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{cN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function u1(t){t.g||t.u||(t.Z=1,R0(t.Ia,t),t.A=0)}function Jd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=to(Be(t.Ia,t),d1(t,t.A)),t.A++,!0)}O.Ia=function(){if(this.u=null,c1(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=to(Be(this.eb,this),t)}};O.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),Bl(this),c1(this))};function Zd(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function c1(t){t.g=new ro(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=nn(t.sa);ie(e,"RID","rpc"),ie(e,"SID",t.I),ie(e,"CI",t.L?"0":"1"),ie(e,"AID",t.T),ie(e,"TYPE","xmlhttp"),ao(t,e),t.o&&t.s&&Yd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ul(nn(e)),n.s=null,n.P=!0,V0(n,t)}O.cb=function(){this.v!=null&&(this.v=null,Bl(this),Jd(this),We(19))};function Qa(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function h1(t,e){var n=null;if(t.g==e){Qa(t),Zd(t),t.g=null;var r=2}else if(uh(t.h,e))n=e.D,J0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ll(),De(r,new $0(r,n)),jl(t)}else u1(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&gN(t,e)||r==2&&Jd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}}function d1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Jn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Be(t.kb,t);n||(n=new rr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Wa(n,"https"),Ul(n)),hN(n.toString(),r)}else We(2);t.G=0,t.l&&t.l.va(e),f1(t),a1(t)}O.kb=function(t){t?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function f1(t){if(t.G=0,t.la=[],t.l){const e=Z0(t.h);(e.length!=0||t.i.length!=0)&&(ym(t.la,e),ym(t.la,t.i),t.h.i.length=0,Ld(t.i),t.i.length=0),t.l.ua()}}function p1(t,e,n){var r=n instanceof rr?nn(n):new rr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ga(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new rr(null,void 0);r&&Wa(s,r),e&&(s.g=e),i&&Ga(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ie(r,n,e),ie(r,"VER",t.ma),ao(t,r),r}function m1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new so({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function g1(){}O=g1.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Ra=function(){};function Ya(){if(ui&&!(10<=Number(PC)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){Ce.call(this),this.g=new o1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}Pe(lt,Ce);lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=p1(t,null,t.V),jl(t)};lt.prototype.close=function(){Xd(this.g)};lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bd(t),t=n);e.i.push(new aN(e.ab++,t)),e.G==3&&jl(e)};lt.prototype.M=function(){this.g.l=null,delete this.j,Xd(this.g),delete this.g,lt.X.M.call(this)};function y1(t){Kd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(y1,Kd);function v1(){qd.call(this),this.status=1}Pe(v1,qd);function Si(t){this.g=t}Pe(Si,g1);Si.prototype.xa=function(){De(this.g,"a")};Si.prototype.wa=function(t){De(this.g,new y1(t))};Si.prototype.va=function(t){De(this.g,new v1)};Si.prototype.ua=function(){De(this.g,"b")};Ya.prototype.createWebChannel=Ya.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Ml.NO_ERROR=0;Ml.TIMEOUT=8;Ml.HTTP_ERROR=6;b0.COMPLETE="complete";U0.EventType=no;no.OPEN="a";no.CLOSE="b";no.ERROR="c";no.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var yN=function(){return new Ya},vN=function(){return Ll()},Ku=Ml,wN=b0,EN=vr,Rm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},SN=so,Vo=U0,_N=ue;const Om="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new _d("@firebase/firestore");function Dm(){return pr.logLevel}function P(t,...e){if(pr.logLevel<=G.DEBUG){const n=e.map(ef);pr.debug(`Firestore (${_i}): ${t}`,...n)}}function rn(t,...e){if(pr.logLevel<=G.ERROR){const n=e.map(ef);pr.error(`Firestore (${_i}): ${t}`,...n)}}function ch(t,...e){if(pr.logLevel<=G.WARN){const n=e.map(ef);pr.warn(`Firestore (${_i}): ${t}`,...n)}}function ef(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: `+t;throw rn(e),new Error(e)}function J(t,e){t||$()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class IN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kN{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new w1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new be(e)}}class CN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(J(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class NN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new CN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.A=n.token,new AN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ON(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ve(0,0))}static max(){return new F(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ms.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ms?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Ms{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const DN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Ms{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return DN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(te.fromString(e))}static fromName(e){return new L(te.fromString(e).popFirst(5))}static empty(){return new L(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new te(e.slice()))}}function xN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Mn(i,L.empty(),e)}function PN(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mn(F.min(),L.empty(),-1)}static max(){return new Mn(F.max(),L.empty(),-1)}}function LN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $N{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==MN)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}tf.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class $s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function S1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function UN(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new FN("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const VN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(J(!!t),typeof t=="string"){let e=0;const n=VN.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hi(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function T1(t){const e=t.mapValue.fields.__previous_value__;return _1(e)?T1(e):e}function bs(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_1(t)?4:BN(t)?9007199254740991:10:$()}function Ft(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bs(t).isEqual(bs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=$n(r.timestampValue),o=$n(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return hi(r.bytesValue).isEqual(hi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=fe(r.doubleValue),o=fe(i.doubleValue);return s===o?Xa(s)===Xa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(xm(s)!==xm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ft(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Us(t,e){return(t.values||[]).find(n=>Ft(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=fe(i.integerValue||i.doubleValue),a=fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pm(t.timestampValue,e.timestampValue);case 4:return Pm(bs(t),bs(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=hi(i),a=hi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(fe(i.latitude),fe(s.latitude));return o!==0?o:Q(fe(i.longitude),fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=di(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Bo.mapValue&&s===Bo.mapValue)return 0;if(i===Bo.mapValue)return 1;if(s===Bo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Q(a[c],u[c]);if(d!==0)return d;const h=di(o[a[c]],l[u[c]]);if(h!==0)return h}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=$n(t),r=$n(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function fi(t){return hh(t)}function hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=$n(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=hh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${hh(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Lm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dh(t){return!!t&&"integerValue"in t}function nf(t){return!!t&&"arrayValue"in t}function Mm(t){return!!t&&"nullValue"in t}function $m(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ss(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.position=e,this.inclusive=n}}function bm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Um(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ft(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{}class me extends I1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zN(e,n,r):n==="array-contains"?new qN(e,r):n==="in"?new WN(e,r):n==="not-in"?new GN(e,r):n==="array-contains-any"?new QN(e,r):new me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HN(e,r):new KN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class At extends I1{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new At(e,n)}matches(e){return k1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function k1(t){return t.op==="and"}function C1(t){return jN(t)&&k1(t)}function jN(t){for(const e of t.filters)if(e instanceof At)return!1;return!0}function fh(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(C1(t))return t.filters.map(e=>fh(e)).join(",");{const e=t.filters.map(n=>fh(n)).join(",");return`${t.op}(${e})`}}function N1(t,e){return t instanceof me?function(n,r){return r instanceof me&&n.op===r.op&&n.field.isEqual(r.field)&&Ft(n.value,r.value)}(t,e):t instanceof At?function(n,r){return r instanceof At&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&N1(s,r.filters[o]),!0):!1}(t,e):void $()}function A1(t){return t instanceof me?function(e){return`${e.field.canonicalString()} ${e.op} ${fi(e.value)}`}(t):t instanceof At?function(e){return e.op.toString()+" {"+e.getFilters().map(A1).join(" ,")+"}"}(t):"Filter"}class zN extends me{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class HN extends me{constructor(e,n){super(e,"in",n),this.keys=R1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KN extends me{constructor(e,n){super(e,"not-in",n),this.keys=R1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class qN extends me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nf(n)&&Us(n.arrayValue,this.value)}}class WN extends me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Us(this.value.arrayValue,n)}}class GN extends me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Us(this.value.arrayValue,n)}}class QN extends me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Us(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n="asc"){this.field=e,this.dir=n}}function YN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new It([])}unionWith(e){let n=new we(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ss(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ti(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(ss(this.value))}}function O1(t){const e=[];return Ti(t.fields,(n,r)=>{const i=new Ve([n]);if(oa(r)){const s=O1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,F.min(),F.min(),F.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new Fe(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Fe(e,2,n,F.min(),F.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,F.min(),F.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function Vm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XN(t,e,n,r,i,s,o)}function rf(t){const e=V(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e._t=n}return e._t}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!N1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Um(t.startAt,e.startAt)&&Um(t.endAt,e.endAt)}function ph(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function JN(t,e,n,r,i,s,o,a){return new Ii(t,e,n,r,i,s,o,a)}function of(t){return new Ii(t)}function Bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function af(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Hl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function D1(t){return t.collectionGroup!==null}function Jr(t){const e=V(t);if(e.wt===null){e.wt=[];const n=Hl(e),r=af(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Xr(n)),e.wt.push(new Xr(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xr(Ve.keyField(),s))}}}return e.wt}function sn(t){const e=V(t);if(!e.gt)if(e.limitType==="F")e.gt=Vm(e.path,e.collectionGroup,Jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Jr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xr(s.field,o))}const r=e.endAt?new Ja(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ja(e.startAt.position,e.startAt.inclusive):null;e.gt=Vm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function mh(t,e){e.getFirstInequalityField(),Hl(t);const n=t.filters.concat([e]);return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gh(t,e,n){return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kl(t,e){return sf(sn(t),sn(e))&&t.limitType===e.limitType}function x1(t){return`${rf(sn(t))}|lt:${t.limitType}`}function yh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>A1(r)).join(", ")}]`),zl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),`Target(${n})`}(sn(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Jr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=bm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Jr(n),r)||n.endAt&&!function(i,s,o){const a=bm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Jr(n),r))}(t,e)}function ZN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function P1(t){return(e,n)=>{let r=!1;for(const i of Jr(t)){const s=eA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eA(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?di(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function M1(t){return{integerValue:""+t}}function tA(t,e){return UN(e)?M1(e):L1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this._=void 0}}function nA(t,e,n){return t instanceof Fs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Vs?b1(t,e):t instanceof Bs?U1(t,e):function(r,i){const s=$1(r,i),o=jm(s)+jm(r.It);return dh(s)&&dh(r.It)?M1(o):L1(r.Tt,o)}(t,e)}function rA(t,e,n){return t instanceof Vs?b1(t,e):t instanceof Bs?U1(t,e):n}function $1(t,e){return t instanceof Za?dh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fs extends Wl{}class Vs extends Wl{constructor(e){super(),this.elements=e}}function b1(t,e){const n=F1(e);for(const r of t.elements)n.some(i=>Ft(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bs extends Wl{constructor(e){super(),this.elements=e}}function U1(t,e){let n=F1(e);for(const r of t.elements)n=n.filter(i=>!Ft(i,r));return{arrayValue:{values:n}}}class Za extends Wl{constructor(e,n){super(),this.Tt=e,this.It=n}}function jm(t){return fe(t.integerValue||t.doubleValue)}function F1(t){return nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this.field=e,this.transform=n}}function sA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Vs&&r instanceof Vs||n instanceof Bs&&r instanceof Bs?ci(n.elements,r.elements,Ft):n instanceof Za&&r instanceof Za?Ft(n.It,r.It):n instanceof Fs&&r instanceof Fs}(t.transform,e.transform)}class oA{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gl{}function V1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new j1(t.key,Yt.none()):new co(t.key,t.data,Yt.none());{const n=t.data,r=ft.empty();let i=new we(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new It(i.toArray()),Yt.none())}}function aA(t,e,n){t instanceof co?function(r,i,s){const o=r.value.clone(),a=Hm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(r,i,s){if(!aa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Hm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(B1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function os(t,e,n,r){return t instanceof co?function(i,s,o,a){if(!aa(i.precondition,s))return o;const l=i.value.clone(),u=Km(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(i,s,o,a){if(!aa(i.precondition,s))return o;const l=Km(i.fieldTransforms,a,s),u=s.data;return u.setAll(B1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return aa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function lA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=$1(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function zm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ci(n,r,(i,s)=>sA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends Gl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Gl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function B1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hm(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rA(o,a,n[i]))}return r}function Km(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nA(s,o,e))}return r}class j1 extends Gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uA extends Gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,q;function hA(t){switch(t){default:return $();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function z1(t){if(t===void 0)return rn("GRPC error has no .code"),w.UNKNOWN;switch(t){case de.OK:return w.OK;case de.CANCELLED:return w.CANCELLED;case de.UNKNOWN:return w.UNKNOWN;case de.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case de.INTERNAL:return w.INTERNAL;case de.UNAVAILABLE:return w.UNAVAILABLE;case de.UNAUTHENTICATED:return w.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case de.NOT_FOUND:return w.NOT_FOUND;case de.ALREADY_EXISTS:return w.ALREADY_EXISTS;case de.PERMISSION_DENIED:return w.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case de.ABORTED:return w.ABORTED;case de.OUT_OF_RANGE:return w.OUT_OF_RANGE;case de.UNIMPLEMENTED:return w.UNIMPLEMENTED;case de.DATA_LOSS:return w.DATA_LOSS;default:return $()}}(q=de||(de={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return S1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new Ee(L.comparator);function on(){return dA}const H1=new Ee(L.comparator);function Ki(...t){let e=H1;for(const n of t)e=e.insert(n.key,n);return e}function K1(t){let e=H1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zn(){return as()}function q1(){return as()}function as(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const fA=new Ee(L.comparator),pA=new we(L.comparator);function H(...t){let e=pA;for(const n of t)e=e.add(n);return e}const mA=new we(Q);function W1(){return mA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ql(F.min(),i,W1(),on(),H())}}class ho{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class G1{constructor(e,n){this.targetId=e,this.Rt=n}}class Q1{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qm{constructor(){this.Pt=0,this.vt=Gm(),this.bt=Ke.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=H(),n=H(),r=H();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new ho(this.bt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=Gm()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class gA{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=on(),this.Kt=Wm(),this.Gt=new we(Q)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(ph(s))if(r===0){const o=new L(s.path);this.zt(n,o,Fe.newNoDocument(o,F.min()))}else J(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&ph(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Fe.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=H();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ql(e,n,this.Gt,this.Ut,r);return this.Ut=on(),this.Kt=Wm(),this.Gt=new we(Q),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.$t(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new qm,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new we(Q),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new qm),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Wm(){return new Ee(L.comparator)}function Gm(){return new Ee(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),wA=(()=>({and:"AND",or:"OR"}))();class EA{constructor(e,n){this.databaseId=e,this.yt=n}}function el(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y1(t,e){return t.yt?e.toBase64():e.toUint8Array()}function SA(t,e){return el(t,e.toTimestamp())}function bt(t){return J(!!t),F.fromTimestamp(function(e){const n=$n(e);return new ve(n.seconds,n.nanos)}(t))}function lf(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function X1(t){const e=te.fromString(t);return J(tw(e)),e}function vh(t,e){return lf(t.databaseId,e.path)}function qu(t,e){const n=X1(e);if(n.get(1)!==t.databaseId.projectId)throw new R(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(J1(n))}function wh(t,e){return lf(t.databaseId,e)}function _A(t){const e=X1(t);return e.length===4?te.emptyPath():J1(e)}function Eh(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function J1(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qm(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function TA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(J(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:z1(l.code);return new R(u,l.message||"")}(o);n=new Q1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qu(t,r.document.name),s=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):F.min(),a=new ft({mapValue:{fields:r.document.fields}}),l=Fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new la(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qu(t,r.document),s=r.readTime?bt(r.readTime):F.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new la([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qu(t,r.document),s=r.removedTargetIds||[];n=new la([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new cA(i),o=r.targetId;n=new G1(o,s)}}return n}function IA(t,e){let n;if(e instanceof co)n={update:Qm(t,e.key,e.value)};else if(e instanceof j1)n={delete:vh(t,e.key)};else if(e instanceof wr)n={update:Qm(t,e.key,e.data),updateMask:PA(e.fieldMask)};else{if(!(e instanceof uA))return $();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Fs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Za)return{fieldPath:s.field.canonicalString(),increment:o.It};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:SA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function kA(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?bt(r.updateTime):bt(i);return s.isEqual(F.min())&&(s=bt(i)),new oA(s,r.transformResults||[])}(n,e))):[]}function CA(t,e){return{documents:[wh(t,e.path)]}}function NA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ew(At.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:kr(c.field),direction:OA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||zl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function AA(t){let e=_A(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=Z1(c);return d instanceof At&&C1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Xr(Cr(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,zl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Ja(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Ja(h,d)}(n.endAt)),JN(e,i,o,s,a,"F",l,u)}function RA(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Z1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cr(e.unaryFilter.field);return me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Cr(e.unaryFilter.field);return me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(e.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cr(e.unaryFilter.field);return me.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return me.create(Cr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return At.create(e.compositeFilter.filters.map(n=>Z1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function OA(t){return yA[t]}function DA(t){return vA[t]}function xA(t){return wA[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Cr(t){return Ve.fromServerFormat(t.fieldPath)}function ew(t){return t instanceof me?function(e){if(e.op==="=="){if($m(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NAN"}};if(Mm(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($m(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NOT_NAN"}};if(Mm(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(e.field),op:DA(e.op),value:e.value}}}(t):t instanceof At?function(e){const n=e.getFilters().map(r=>ew(r));return n.length===1?n[0]:{compositeFilter:{op:xA(e.op),filters:n}}}(t):$()}function PA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=V1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(n,r)=>zm(n,r))&&ci(this.baseMutations,e.baseMutations,(n,r)=>zm(n,r))}}class uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=fA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.oe=e}}function bA(t){const e=AA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.Ze=new FA}addToCollectionParentIndex(e,n){return this.Ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Mn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class FA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new pi(0)}static Sn(){return new pi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&os(r.mutation,i,It.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=Zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ki();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=on();const o=as(),a=as();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof wr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),os(c.mutation,u,c.mutation.getFieldMask(),ve.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new BA(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=as();let i=new Ee((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||It.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=q1();c.forEach(h=>{if(!s.has(h)){const g=V1(n.get(h),r.get(h));g!==null&&d.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):D1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Zn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:K1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Ki();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ki();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new Ii(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Fe.newInvalidDocument(u)))});let o=Ki();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&os(u.mutation,l,It.empty(),ve.now()),ql(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return _.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:bt(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:bA(r.bundledQuery),readTime:bt(r.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.overlays=new Ee(L.comparator),this.ss=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Zn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Zn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MA(n,r));let s=this.ss.get(n);s===void 0&&(s=H(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.rs=new we(_e.os),this.us=new we(_e.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new _e(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new _e(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new L(new te([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new L(new te([])),r=new _e(n,e),i=new _e(n,e+1);let s=H();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return L.comparator(e.key,n.key)||Q(e.gs,n.gs)}static cs(e,n){return Q(e.gs,n.gs)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new we(_e.os)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(Q);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),_.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new _e(new L(s),0);let a=new we(Q);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),_.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return _.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,n){const r=new _e(n,0),i=this.ps.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.Rs=e,this.docs=new Ee(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=on();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||LN(PN(c),r)<=0||(i.has(c.key)||ql(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Ps(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WA(this)}getSize(e){return _.resolve(this.size)}}class WA extends VA{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.persistence=e,this.vs=new ki(n=>rf(n),sf),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Vs=new cf,this.targetCount=0,this.Ss=pi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),_.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new pi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.xn(n),_.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new tf(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new GA(this),this.indexManager=new UA,this.remoteDocumentCache=function(r){return new qA(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new $A(n),this.$s=new zA(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new KA(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new YA(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Fs(e,n){return _.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class YA extends $N{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Bs=new cf,this.Ls=null}static qs(e){return new hf(e)}get Us(){if(this.Ls)return this.Ls;throw $()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),_.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Us,r=>{const i=L.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return _.or([()=>_.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new df(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Fi(e,n))}Mi(e,n){if(Bm(n))return _.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gh(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,gh(n,null,"F")):this.qi(e,u,n,l)}))})))}Oi(e,n,r,i){return Bm(n)||i.isEqual(F.min())?this.Fi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.Fi(e,n):(Dm()<=G.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yh(n)),this.qi(e,o,n,xN(i,-1)))})}Bi(e,n){let r=new we(P1(e));return n.forEach((i,s)=>{ql(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fi(e,n){return Dm()<=G.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",yh(n)),this.$i.getDocumentsMatchingQuery(e,n,Mn.min())}qi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Ee(Q),this.Gi=new ki(s=>rf(s),sf),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jA(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function ZA(t,e,n,r){return new JA(t,e,n,r)}async function nw(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function eR(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=_.resolve();return d.forEach(g=>{h=h.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);J(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rw(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function tR(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,d)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(h,g,c)&&a.push(n.Ns.updateTargetData(s,g))});let l=on(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(nR(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(F.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(d=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function nR(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=on();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function rR(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iR(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new sr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Sh(t,e,n){const r=V(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!uo(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function Ym(t,e,n){const r=V(t);let i=F.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=V(a),d=c.Gi.get(u);return d!==void 0?_.resolve(c.Ki.get(d)):c.Ns.getTargetData(l,u)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:H())).next(a=>(sR(r,ZN(e),a),{documents:a,Yi:s})))}function sR(t,e,n){let r=t.Qi.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class Xm{constructor(){this.activeTargetIds=W1()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oR{constructor(){this.Ur=new Xm,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Xm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo=null;function Wu(){return zo===null?zo=268435456+Math.round(2147483648*Math.random()):zo++,"0x"+zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class cR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=Wu(),a=this.fo(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this._o(l,i,s),this.wo(e,a,l,r).then(u=>(P("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ch("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+_i,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=lR[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){const s=Wu();return new Promise((o,a)=>{const l=new _N;l.setWithCredentials(!0),l.listenOnce(wN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ku.NO_ERROR:const c=l.getResponseJson();P($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ku.TIMEOUT:P($e,`RPC '${e}' ${s} timed out`),a(new R(w.DEADLINE_EXCEEDED,"Request time out"));break;case Ku.HTTP_ERROR:const d=l.getStatus();if(P($e,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const y=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(D)>=0?D:w.UNKNOWN}(g.status);a(new R(y,g.message))}else a(new R(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new R(w.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{P($e,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P($e,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}yo(e,n,r){const i=Wu(),s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yN(),a=vN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new SN({})),this._o(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");P($e,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,h=!1;const g=new uR({Yr:v=>{h?P($e,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(P($e,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),P($e,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Zr:()=>c.close()}),y=(v,D,p)=>{v.listen(D,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return y(c,Vo.EventType.OPEN,()=>{h||P($e,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Vo.EventType.CLOSE,()=>{h||(h=!0,P($e,`RPC '${e}' stream ${i} transport closed`),g.oo())}),y(c,Vo.EventType.ERROR,v=>{h||(h=!0,ch($e,`RPC '${e}' stream ${i} transport errored:`,v),g.oo(new R(w.UNAVAILABLE,"The operation could not be completed")))}),y(c,Vo.EventType.MESSAGE,v=>{var D;if(!h){const p=v.data[0];J(!!p);const f=p,m=f.error||((D=f[0])===null||D===void 0?void 0:D.error);if(m){P($e,`RPC '${e}' stream ${i} received error:`,m);const E=m.status;let I=function(A){const x=de[A];if(x!==void 0)return z1(x)}(E),C=m.message;I===void 0&&(I=w.INTERNAL,C="Unknown error status: "+E+" with message "+m.message),h=!0,g.oo(new R(I,C)),c.close()}else P($e,`RPC '${e}' stream ${i} received:`,p),g.uo(p)}}),y(a,EN.STAT_EVENT,v=>{v.stat===Rm.PROXY?P($e,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Rm.NOPROXY&&P($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.ro()},0),g}}function Gu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t){return new EA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new iw(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new R(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hR extends sw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=TA(this.Tt,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?bt(s.readTime):F.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Eh(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=ph(a)?{documents:CA(i,a)}:{query:NA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Y1(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=el(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=RA(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Eh(this.Tt),n.removeTarget=e,this.qo(n)}}class dR extends sw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=kA(e.writeResults,e.commitTime),r=bt(e.commitTime);return this.listener.eu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Eh(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IA(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new R(w.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(w.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(w.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class pR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(rn(n),this.cu=!1):P("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Er(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=V(a);l.mu.add(4),await fo(l),l.pu.set("Unknown"),l.mu.delete(4),await Xl(l)}(this))})}),this.pu=new pR(r,i)}}async function Xl(t){if(Er(t))for(const e of t.gu)await e(!0)}async function fo(t){for(const e of t.gu)await e(!1)}function ow(t,e){const n=V(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),mf(n)?pf(n):Ci(n).Mo()&&ff(n,e))}function aw(t,e){const n=V(t),r=Ci(n);n.wu.delete(e),r.Mo()&&lw(n,e),n.wu.size===0&&(r.Mo()?r.Bo():Er(n)&&n.pu.set("Unknown"))}function ff(t,e){t.Iu.Ot(e.targetId),Ci(t).Jo(e)}function lw(t,e){t.Iu.Ot(e),Ci(t).Yo(e)}function pf(t){t.Iu=new gA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ci(t).start(),t.pu.au()}function mf(t){return Er(t)&&!Ci(t).$o()&&t.wu.size>0}function Er(t){return V(t).mu.size===0}function uw(t){t.Iu=void 0}async function gR(t){t.wu.forEach((e,n)=>{ff(t,e)})}async function yR(t,e){uw(t),mf(t)?(t.pu.fu(e),pf(t)):t.pu.set("Unknown")}async function vR(t,e,n){if(t.pu.set("Online"),e instanceof Q1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tl(t,r)}else if(e instanceof la?t.Iu.Qt(e):e instanceof G1?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(F.min()))try{const r=await rw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ke.EMPTY_BYTE_STRING,l.snapshotVersion)),lw(i,a);const u=new sr(l.target,a,1,l.sequenceNumber);ff(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await tl(t,r)}}async function tl(t,e,n){if(!uo(e))throw e;t.mu.add(1),await fo(t),t.pu.set("Offline"),n||(n=()=>rw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Xl(t)})}function cw(t,e){return e().catch(n=>tl(t,n,e))}async function Jl(t){const e=V(t),n=bn(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;wR(e);)try{const i=await rR(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,ER(e,i)}catch(i){await tl(e,i)}hw(e)&&dw(e)}function wR(t){return Er(t)&&t._u.length<10}function ER(t,e){t._u.push(e);const n=bn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function hw(t){return Er(t)&&!bn(t).$o()&&t._u.length>0}function dw(t){bn(t).start()}async function SR(t){bn(t).su()}async function _R(t){const e=bn(t);for(const n of t._u)e.tu(n.mutations)}async function TR(t,e,n){const r=t._u.shift(),i=uf.from(r,e,n);await cw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Jl(t)}async function IR(t,e){e&&bn(t).Xo&&await async function(n,r){if(i=r.code,hA(i)&&i!==w.ABORTED){const s=n._u.shift();bn(n).Fo(),await cw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Jl(n)}var i}(t,e),hw(t)&&dw(t)}async function Zm(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Er(n);n.mu.add(3),await fo(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Xl(n)}async function kR(t,e){const n=V(t);e?(n.mu.delete(2),await Xl(n)):e||(n.mu.add(2),await fo(n),n.pu.set("Unknown"))}function Ci(t){return t.Tu||(t.Tu=function(e,n,r){const i=V(e);return i.ru(),new hR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:gR.bind(null,t),no:yR.bind(null,t),Ho:vR.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),mf(t)?pf(t):t.pu.set("Unknown")):(await t.Tu.stop(),uw(t))})),t.Tu}function bn(t){return t.Eu||(t.Eu=function(e,n,r){const i=V(e);return i.ru(),new dR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:SR.bind(null,t),no:IR.bind(null,t),nu:_R.bind(null,t),eu:TR.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Jl(t)):(await t.Eu.stop(),t._u.length>0&&(P("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(t,e){if(rn("AsyncQueue",`${e}: ${t}`),uo(t))return new R(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ki(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.Au=new Ee(L.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):$():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,Zr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.Pu=void 0,this.listeners=[]}}class NR{constructor(){this.queries=new ki(e=>x1(e),Kl),this.onlineState="Unknown",this.vu=new Set}}async function AR(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new CR),i)try{s.Pu=await n.onListen(r)}catch(o){const a=yf(o,`Initialization of query '${yh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Pu&&e.Vu(s.Pu)&&vf(n)}async function RR(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function OR(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Pu=i}}r&&vf(n)}function DR(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vf(t){t.vu.forEach(e=>{e.next()})}class xR{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.key=e}}class pw{constructor(e){this.key=e}}class PR{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=H(),this.mutatedKeys=H(),this.ju=P1(e),this.zu=new Zr(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new eg,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),g=ql(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;h&&g?h.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),D=!0):this.Yu(h,g)||(r.track({type:2,doc:g}),D=!0,(l&&this.ju(g,l)>0||u&&this.ju(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),D=!0):h&&!g&&(r.track({type:1,doc:h}),D=!0,(l||u)&&(a=!0)),D&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(d,h){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(d)-g(h)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new mi(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new eg,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=H(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new pw(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new fw(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=H();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return mi.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class LR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MR{constructor(e){this.key=e,this.ic=!1}}class $R{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ki(a=>x1(a),Kl),this.uc=new Map,this.cc=new Set,this.ac=new Ee(L.comparator),this.hc=new Map,this.lc=new cf,this.fc={},this.dc=new Map,this._c=pi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function bR(t,e){const n=WR(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await iR(n.localStore,sn(e));n.isPrimaryClient&&ow(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await UR(n,e,r,a==="current",o.resumeToken)}return i}async function UR(t,e,n,r,i){t.mc=(d,h,g)=>async function(y,v,D,p){let f=v.view.Hu(D);f.Li&&(f=await Ym(y.localStore,v.query,!1).then(({documents:I})=>v.view.Hu(I,f)));const m=p&&p.targetChanges.get(v.targetId),E=v.view.applyChanges(f,y.isPrimaryClient,m);return ng(y,v.targetId,E.tc),E.snapshot}(t,d,h,g);const s=await Ym(t.localStore,e,!0),o=new PR(e,s.Yi),a=o.Hu(s.documents),l=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ng(t,n,u.tc);const c=new LR(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function FR(t,e){const n=V(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!Kl(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),aw(n.remoteStore,r.targetId),_h(n,r.targetId)}).catch(lo)):(_h(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function VR(t,e,n){const r=GR(t);try{const i=await function(s,o){const a=V(s),l=ve.now(),u=o.reduce((h,g)=>h.add(g.key),H());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=on(),y=H();return a.ji.getEntries(h,u).next(v=>{g=v,g.forEach((D,p)=>{p.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,g)).next(v=>{c=v;const D=[];for(const p of o){const f=lA(p,c.get(p.key).overlayedDocument);f!=null&&D.push(new wr(p.key,f,O1(f.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,D,o)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:K1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Ee(Q)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await po(r,i.changes),await Jl(r.remoteStore)}catch(i){const s=yf(i,"Failed to persist write");n.reject(s)}}async function mw(t,e){const n=V(t);try{const r=await tR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?J(o.ic):i.removedDocuments.size>0&&(J(o.ic),o.ic=!1))}),await po(n,r,e)}catch(r){await lo(r)}}function tg(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(o)&&(l=!0)}),l&&vf(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Ee(L.comparator);o=o.insert(s,Fe.newNoDocument(s,F.min()));const a=H().add(s),l=new Ql(F.min(),new Map,new we(Q),o,a);await mw(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),wf(r)}else await Sh(r.localStore,e,!1).then(()=>_h(r,e,n)).catch(lo)}async function jR(t,e){const n=V(t),r=e.batch.batchId;try{const i=await eR(n.localStore,e);yw(n,r,null),gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,i)}catch(i){await lo(i)}}async function zR(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(J(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);yw(r,e,n),gw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,i)}catch(i){await lo(i)}}function gw(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function yw(t,e,n){const r=V(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function _h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||vw(t,r)})}function vw(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(aw(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),wf(t))}function ng(t,e,n){for(const r of n)r instanceof fw?(t.lc.addReference(r.key,e),HR(t,r)):r instanceof pw?(P("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||vw(t,r.key)):$()}function HR(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.cc.add(r),wf(t))}function wf(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new L(te.fromString(e)),r=t._c.next();t.hc.set(r,new MR(n)),t.ac=t.ac.insert(n,r),ow(t.remoteStore,new sr(sn(of(n.path)),r,2,tf.at))}}async function po(t,e,n){const r=V(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=df.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,d=>_.forEach(d.Ci,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>_.forEach(d.xi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!uo(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ki.get(d),g=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(d,y)}}}(r.localStore,s))}async function KR(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await nw(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new R(w.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.Wi)}}function qR(t,e){const n=V(t),r=n.hc.get(e);if(r&&r.ic)return H().add(r.key);{let i=H();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function WR(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.rc.Ho=OR.bind(null,e.eventManager),e.rc.gc=DR.bind(null,e.eventManager),e}function GR(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zR.bind(null,e),e}class QR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Yl(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return ZA(this.persistence,new XA,e.initialUser,this.Tt)}Tc(e){return new QA(hf.qs,this.Tt)}Ic(e){return new oR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KR.bind(null,this.syncEngine),await kR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NR}createDatastore(e){const n=Yl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new cR(i));var i;return function(s,o,a,l){return new fR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>tg(this.syncEngine,a,0),o=Jm.C()?new Jm:new aR,new mR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new $R(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);P("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await fo(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=E1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ZR(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function eO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tO(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Zm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Zm(e.remoteStore,s)),t.onlineComponents=e}async function tO(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await ZR(t,new QR)),t.offlineComponents}async function ww(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await eO(t,new YR)),t.onlineComponents}function nO(t){return ww(t).then(e=>e.syncEngine)}async function rg(t){const e=await ww(t),n=e.eventManager;return n.onListen=bR.bind(null,e.syncEngine),n.onUnlisten=FR.bind(null,e.syncEngine),n}const ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e,n){if(!n)throw new R(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rO(t,e,n,r){if(e===!0&&r===!0)throw new R(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sg(t){if(!L.isDocumentKey(t))throw new R(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function og(t){if(L.isDocumentKey(t))throw new R(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new R(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ag({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ag(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new TN;switch(n.type){case"gapi":const r=n.client;return new NN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ig.get(e);n&&(P("ComponentProvider","Removing Datastore"),ig.delete(e),n.terminate())}(this),Promise.resolve()}}function iO(t,e,n,r={}){var i;const s=(t=ls(t,eu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ch("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=be.MOCK_USER;else{o=rT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new R(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(l)}t._authCredentials=new IN(new w1(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class xn extends Sr{constructor(e,n,r){super(e,n,of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new L(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function Sw(t,e,...n){if(t=nt(t),Ew("collection","path",e),t instanceof eu){const r=te.fromString(e,...n);return og(r),new xn(t,null,r)}{if(!(t instanceof ot||t instanceof xn))throw new R(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return og(r),new xn(t.firestore,null,r)}}function sO(t,e,...n){if(t=nt(t),arguments.length===1&&(e=E1.R()),Ew("doc","path",e),t instanceof eu){const r=te.fromString(e,...n);return sg(r),new ot(t,null,new L(r))}{if(!(t instanceof ot||t instanceof xn))throw new R(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return sg(r),new ot(t.firestore,t instanceof xn?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new iw(this,"async_queue_retry"),this.Hc=()=>{const n=Gu();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Gu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new ir;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!uo(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=gf.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&$()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function lg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class nl extends eu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new oO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tw(this),this._firestoreClient.terminate()}}function aO(t,e){const n=typeof t=="object"?t:$v(),r=typeof t=="string"?t:e||"(default)",i=Id(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eT("firestore");s&&iO(i,...s)}return i}function _w(t){return t._firestoreClient||Tw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new bN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new JR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(Ke.fromBase64String(e))}catch(n){throw new R(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=/^__.*__$/;class uO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}function Iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Tf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return rl(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Iw(this.ra)&&lO.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class cO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Yl(e)}wa(e,n,r,i=!1){return new Tf({ra:e,methodName:n,_a:r,path:Ve.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function kw(t){const e=t._freezeSettings(),n=Yl(t._databaseId);return new cO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hO(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);Aw("Data must be an object, but it was:",o,r);const a=Cw(r,o);let l,u;if(s.merge)l=new It(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=fO(e,d,n);if(!o.contains(h))throw new R(w.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);mO(c,h)||c.push(h)}l=new It(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new uO(new ft(a),l,u)}class If extends Sf{_toFieldTransform(e){return new iA(e.path,new Fs)}isEqual(e){return e instanceof If}}function dO(t,e,n,r=!1){return kf(n,t.wa(r?4:3,e))}function kf(t,e){if(Nw(t=nt(t)))return Aw("Unsupported field value:",e,t),Cw(t,e);if(t instanceof Sf)return function(n,r){if(!Iw(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=kf(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tA(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ve.fromDate(n);return{timestampValue:el(r.Tt,i)}}if(n instanceof ve){const i=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:el(r.Tt,i)}}if(n instanceof _f)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gi)return{bytesValue:Y1(r.Tt,n._byteString)};if(n instanceof ot){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${Zl(n)}`)}(t,e)}function Cw(t,e){const n={};return S1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(t,(r,i)=>{const s=kf(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof _f||t instanceof gi||t instanceof ot||t instanceof Sf)}function Aw(t,e,n){if(!Nw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zl(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function fO(t,e,n){if((e=nt(e))instanceof Ef)return e._internalPath;if(typeof e=="string")return Rw(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const pO=new RegExp("[~\\*/\\[\\]]");function Rw(t,e,n){if(e.search(pO)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ef(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new R(w.INVALID_ARGUMENT,a+t+l)}function mO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gO extends Ow{data(){return super.data()}}function Cf(t,e){return typeof e=="string"?Rw(t,e):e instanceof Ef?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nf{}class Dw extends Nf{}function vO(t,e,...n){let r=[];e instanceof Nf&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Rf).length,o=i.filter(a=>a instanceof Af).length;if(s>1||s>0&&o>0)throw new R(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Af extends Dw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Af(e,n,r)}_apply(e){const n=this._parse(e);return xw(e._query,n),new Sr(e.firestore,e.converter,mh(e._query,n))}_parse(e){const n=kw(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){cg(c,u);const h=[];for(const g of c)h.push(ug(a,i,g));d={arrayValue:{values:h}}}else d=ug(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||cg(c,u),d=dO(o,s,c,u==="in"||u==="not-in");return me.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rf extends Nf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:At.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)xw(s,a),s=mh(s,a)}(e._query,n),new Sr(e.firestore,e.converter,mh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Of extends Dw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Of(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new R(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Xr(i,s);return function(a,l){if(af(a)===null){const u=Hl(a);u!==null&&Pw(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Sr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ii(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function wO(t,e="asc"){const n=e,r=Cf("orderBy",t);return Of._create(r,n)}function ug(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new R(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!D1(e)&&n.indexOf("/")!==-1)throw new R(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!L.isDocumentKey(r))throw new R(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Lm(t,new L(r))}if(n instanceof ot)return Lm(t,n._key);throw new R(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(n)}.`)}function cg(t,e){if(!Array.isArray(t)||t.length===0)throw new R(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xw(t,e){if(e.isInequality()){const r=Hl(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new R(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=af(t);s!==null&&Pw(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Pw(t,e,n){if(!n.isEqual(e))throw new R(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class EO{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return Ti(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _f(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=T1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const n=$n(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);J(tw(r));const i=new $s(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lw extends Ow{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ua extends Lw{data(e={}){return super.data(e)}}class _O{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ua(r._firestore,r._userDataWriter,o.doc.key,o.doc,new qi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:TO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Mw extends EO{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function IO(t,e){const n=ls(t.firestore,nl),r=sO(t),i=SO(t.converter,e);return CO(n,[hO(kw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function kO(t,...e){var n,r,i;t=nt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||lg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(lg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof ot)u=ls(t.firestore,nl),c=of(t._key.path),l={next:d=>{e[o]&&e[o](NO(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ls(t,Sr);u=ls(d.firestore,nl),c=d._query;const h=new Mw(u);l={next:g=>{e[o]&&e[o](new _O(u,h,d,g))},error:e[o+1],complete:e[o+2]},yO(t._query)}return function(d,h,g,y){const v=new XR(y),D=new xR(h,v,g);return d.asyncQueue.enqueueAndForget(async()=>AR(await rg(d),D)),()=>{v.bc(),d.asyncQueue.enqueueAndForget(async()=>RR(await rg(d),D))}}(_w(u),c,a,l)}function CO(t,e){return function(n,r){const i=new ir;return n.asyncQueue.enqueueAndForget(async()=>VR(await nO(n),r,i)),i.promise}(_w(t),e)}function NO(t,e,n){const r=n.docs.get(e._key),i=new Mw(t);return new Lw(t,i,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}function AO(){return new If("serverTimestamp")}(function(t,e=!0){(function(n){_i=n})(Qs),ai(new hr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new nl(new kN(n.getProvider("auth-internal")),new RN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Dn(Om,"3.9.0",t),Dn(Om,"3.9.0","esm2017")})();const RO={apiKey:"AIzaSyBzGSEYgibOHJVkFtrGRj2Imt96c9rpnZs",authDomain:"chat-live-6e998.firebaseapp.com",projectId:"chat-live-6e998",storageBucket:"chat-live-6e998.appspot.com",messagingSenderId:"894451107636",appId:"1:894451107636:web:b8d84a912bcbd1482b4761",measurementId:"G-K6XQKR35WH"},$w=Mv(RO),Ni=EC($w),bw=aO($w),OO=()=>{const t=new zt;Mk(Ni,t)},DO=()=>M("div",{className:"wrapper",children:M(q_,{onClick:OO})});const xO=()=>M("button",{onClick:()=>Ni.signOut(),className:"button-top",children:"Logout"});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function PO(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function LO(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Br=function(){return Br=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Br.apply(this,arguments)},Uw=function(t){return{loading:t==null,value:t}},MO=function(){return function(t,e){switch(e.type){case"error":return Br(Br({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Uw(e.defaultValue);case"value":return Br(Br({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},$O=function(t){var e=t?t():void 0,n=Ie.useReducer(MO(),Uw(e)),r=n[0],i=n[1],s=Ie.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=Ie.useCallback(function(l){i({type:"error",error:l})},[]),a=Ie.useCallback(function(l){i({type:"value",value:l})},[]);return Ie.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Fw=function(t,e){var n=$O(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return Ie.useEffect(function(){var l=ok(t,function(u){return PO(void 0,void 0,void 0,function(){var c;return LO(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return d.sent(),[3,4];case 3:return c=d.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};const bO=()=>{const[t]=Fw(Ni);return console.log(t),Tt("div",{className:"nav",children:[t?M(xO,{}):M(DO,{}),M("h1",{className:"heading",children:"Global Chat"})]})};const UO=({message:t})=>{const e=t.uid===Ni.currentUser.uid?"sent":"received";return M("div",{children:M("div",{className:`message ${e}`,children:Tt("p",{children:[M("p",{className:"name",children:t.name})," ",t.text]})})})};const FO=({scroll:t})=>{const[e,n]=Ie.useState("");return Tt("form",{onSubmit:async i=>{if(i.preventDefault(),e===""){alert("Please enter a valid message");return}const{uid:s,displayName:o}=Ni.currentUser;await IO(Sw(bw,"messages"),{text:e,name:o,uid:s,timestamp:AO()}),n(""),t.current.scrollIntoView({behavior:"smooth"})},className:"form",children:[M("input",{value:e,onChange:i=>n(i.target.value),className:"input",type:"text",placeholder:"Message"}),M("button",{className:"button",type:"submit",children:"Send"})]})};const VO=()=>{const[t,e]=Ie.useState([]),n=Ie.useRef();return Ie.useEffect(()=>{const r=vO(Sw(bw,"messages"),wO("timestamp")),i=kO(r,s=>{let o=[];s.forEach(a=>{o.push({...a.data(),id:a.id})}),e(o)});return()=>i()},[]),Tt(dE,{children:[M("main",{className:"main",children:t&&t.map(r=>M(UO,{message:r},r.id))}),M(FO,{scroll:n}),M("span",{ref:n})]})},hg={appContainer:"max-w-[728px] mx-auto text-center",sectionContainer:"flex flex-col  bg-gray-100 mt-10 shadow-xl border "};function BO(){const[t]=Fw(Ni);return M("div",{className:"container",children:M("div",{className:hg.appContainer,children:Tt("section",{className:hg.sectionContainer,children:[M(bO,{}),t?M(VO,{}):null]})})})}function Vw(t,e=1){let n=0;const[r,i]=jO(t);if(r===-1)return 1;for(let s=1;s<=9;s++)if(zO(t,r,i,s)){if(t[r][i]=s,n+=Vw(t,e),n>e)return n;t[r][i]=0}return n}function jO(t){for(let e=0;e<t.length;e++)for(let n=0;n<t.length;n++)if(t[e][n]===0)return[e,n];return[-1,-1]}function zO(t,e,n,r){for(let o=0;o<t.length;o++)if(t[e][o]===r)return!1;for(let o=0;o<t.length;o++)if(t[o][n]===r)return!1;const i=Math.floor(e/3)*3,s=Math.floor(n/3)*3;for(let o=0;o<3;o++)for(let a=0;a<3;a++)if(t[i+o][s+a]===r)return!1;return!0}var il={},HO={get exports(){return il},set exports(t){il=t}};(function(t,e){e=t.exports=n,e.getSerialize=r;function n(i,s,o,a){return JSON.stringify(i,r(s,a),o)}function r(i,s){var o=[],a=[];return s==null&&(s=function(l,u){return o[0]===u?"[Circular ~]":"[Circular ~."+a.slice(0,o.indexOf(u)).join(".")+"]"}),function(l,u){if(o.length>0){var c=o.indexOf(this);~c?o.splice(c+1):o.push(this),~c?a.splice(c,1/0,l):a.push(l),~o.indexOf(u)&&(u=s.call(this,l,u))}else o.push(u);return i==null?u:i.call(this,l,u)}}})(HO,il);var KO=il,qO=function(){var t=4022871197,e=function(n){if(n){n=n.toString();for(var r=0;r<n.length;r++){t+=n.charCodeAt(r);var i=.02519603282416938*t;t=i>>>0,i-=t,i*=t,t=i>>>0,i-=t,t+=i*4294967296}return(t>>>0)*23283064365386963e-26}else t=4022871197};return e},Th=function(t){return function(){var e=48,n=1,r=e,i=new Array(e),s,o,a=0,l=new qO;for(s=0;s<e;s++)i[s]=l(Math.random());var u=function(){++r>=e&&(r=0);var h=1768863*i[r]+n*23283064365386963e-26;return i[r]=h-(n=h|0)},c=function(h){return Math.floor(h*(u()+(u()*2097152|0)*11102230246251565e-32))};c.string=function(h){var g,y="";for(g=0;g<h;g++)y+=String.fromCharCode(33+c(94));return y};var d=function(){var h=Array.prototype.slice.call(arguments);for(s=0;s<h.length;s++)for(o=0;o<e;o++)i[o]-=l(h[s]),i[o]<0&&(i[o]+=1)};return c.cleanString=function(h){return h=h.replace(/(^\s*)|(\s*$)/gi,""),h=h.replace(/[\x00-\x1F]/gi,""),h=h.replace(/\n /,`
`),h},c.hashString=function(h){for(h=c.cleanString(h),l(h),s=0;s<h.length;s++)for(a=h.charCodeAt(s),o=0;o<e;o++)i[o]-=l(a),i[o]<0&&(i[o]+=1)},c.seed=function(h){(typeof h>"u"||h===null)&&(h=Math.random()),typeof h!="string"&&(h=KO(h,function(g,y){return typeof y=="function"?y.toString():y})),c.initState(),c.hashString(h)},c.addEntropy=function(){var h=[];for(s=0;s<arguments.length;s++)h.push(arguments[s]);d(a+++new Date().getTime()+h.join("")+Math.random())},c.initState=function(){for(l(),s=0;s<e;s++)i[s]=l(" ");n=1,r=e},c.done=function(){l=null},typeof t<"u"&&c.seed(t),c.range=function(h){return c(h)},c.random=function(){return c(Number.MAX_VALUE-1)/Number.MAX_VALUE},c.floatBetween=function(h,g){return c.random()*(g-h)+h},c.intBetween=function(h,g){return Math.floor(c.random()*(g-h+1))+h},c}()};Th.create=function(t){return new Th(t)};var WO=Th;function GO(t,e,n){const r=WO.create(e),i=JSON.parse(JSON.stringify(t)),s=[],o=Math.floor(n/100*(t.length*t.length));let a=0;for(;a<o;){const l=r(t.length),u=r(t.length);if(i[l][u]===0||s.find(h=>h[0]===l&&h[1]===u)){if(s.length===t.length*t.length)break;continue}s.push([l,u]);const c=i[l][u];i[l][u]=0,Vw(JSON.parse(JSON.stringify(i)))===1?a++:i[l][u]=c}return i}let Ih=[];function QO(t){Ih=t}function YO(t){t.preventDefault();const e=t.currentTarget;e.innerText="",document.querySelectorAll(".cell.open").forEach(r=>r.classList.remove("open"));const n=document.getElementById("number-selector");n.style.display="none"}function XO(t){document.querySelectorAll(".cell.open").forEach(i=>i.classList.remove("open"));const e=t.currentTarget;e.classList.add("open");const n=e.getBoundingClientRect(),r=document.getElementById("number-selector");r.style.display="inline-block",r.style.position="absolute",r.style.top=`${n.top+window.scrollY-r.clientWidth/4}px`,r.style.left=`${n.left+window.scrollX-r.clientHeight/4}px`}function JO(t){document.querySelectorAll(".cell.open").forEach(e=>e.classList.remove("open")),t.currentTarget.style.display="none"}function Vt(t){const e=document.querySelector(".cell.open"),n=t.currentTarget;e.innerText=n.innerText,document.querySelectorAll(".cell.open").forEach(a=>a.classList.remove("open"));const r=document.getElementById("number-selector");r.style.display="none";const i=parseInt(e.dataset.x),s=parseInt(e.dataset.y),o=parseInt(e.innerText);console.log(Ih[i][s],o),Ih[i][s]===o?(e.classList.add("correct"),e.classList.remove("incorrect")):(e.classList.add("incorrect"),e.classList.remove("correct"))}function ZO(){const t=[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];let e=Date.now(),n=GO(t,Date.now().toString(),100);return console.log(`Generated in: ${Date.now()-e} milliseconds`),QO(t),Tt("div",{className:"sudoku",children:[M("table",{id:"sudoku-table",children:M("tbody",{children:n.map((r,i)=>M("tr",{children:r.map((s,o)=>M("td",{children:M("button",{"data-x":i,"data-y":o,className:"cell",onClick:XO,onContextMenu:YO,disabled:s>0,children:s>0?s:void 0})},o))},i))})}),M("div",{id:"number-selector",onMouseLeave:JO,children:M("table",{children:Tt("tbody",{children:[Tt("tr",{children:[M("td",{children:M("button",{onClick:Vt,children:"1"})}),M("td",{children:M("button",{onClick:Vt,children:"2"})}),M("td",{children:M("button",{onClick:Vt,children:"3"})})]}),Tt("tr",{children:[M("td",{children:M("button",{onClick:Vt,children:"4"})}),M("td",{children:M("button",{onClick:Vt,children:"5"})}),M("td",{children:M("button",{onClick:Vt,children:"6"})})]}),Tt("tr",{children:[M("td",{children:M("button",{onClick:Vt,children:"7"})}),M("td",{children:M("button",{onClick:Vt,children:"8"})}),M("td",{children:M("button",{onClick:Vt,children:"9"})})]})]})})})]})}function eD(){return M("div",{className:"App",children:M(ZO,{})})}function tD(){return Ie.useState(0),Tt("div",{className:"App",children:[M("div",{className:"Game-container",children:M(eD,{})}),M("div",{className:"chat-container",children:M(BO,{})})]})}Qu.createRoot(document.getElementById("root")).render(M(sE.StrictMode,{children:M(tD,{})}));
