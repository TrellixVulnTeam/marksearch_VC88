var Stack=require("./_Stack"),equalArrays=require("./_equalArrays"),equalByTag=require("./_equalByTag"),equalObjects=require("./_equalObjects"),getTag=require("./_getTag"),isArray=require("./isArray"),isBuffer=require("./isBuffer"),isTypedArray=require("./isTypedArray"),COMPARE_PARTIAL_FLAG=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function baseIsEqualDeep(r, e, a, t, u, s){var g=isArray(r),i=isArray(e),y=g?arrayTag:getTag(r),c=i?arrayTag:getTag(e),o=(y=y==argsTag?objectTag:y)==objectTag,T=(c=c==argsTag?objectTag:c)==objectTag,A=y==c;if(A&&isBuffer(r)){if(!isBuffer(e))return!1;o=!(g=!0)}if(A&&!o)return s||(s=new Stack),g||isTypedArray(r)?equalArrays(r,e,a,t,u,s):equalByTag(r,e,y,a,t,u,s);if(!(a&COMPARE_PARTIAL_FLAG)){var q=o&&hasOwnProperty.call(r,"__wrapped__"),l=T&&hasOwnProperty.call(e,"__wrapped__");if(q||l){var b=q?r.value():r,_=l?e.value():e;return s||(s=new Stack),u(b,_,a,t,s)}}return!!A&&(s||(s=new Stack),equalObjects(r,e,a,t,u,s))}module.exports=baseIsEqualDeep;