var arrayEach=require("./_arrayEach"),baseCreate=require("./_baseCreate"),baseForOwn=require("./_baseForOwn"),baseIteratee=require("./_baseIteratee"),getPrototype=require("./_getPrototype"),isArray=require("./isArray"),isBuffer=require("./isBuffer"),isFunction=require("./isFunction"),isObject=require("./isObject"),isTypedArray=require("./isTypedArray");function transform(r, t, i){var e=isArray(r),a=e||isBuffer(r)||isTypedArray(r);if(t=baseIteratee(t,4),null==i){var s=r&&r.constructor;i=a?e?new s:[]:isObject(r)&&isFunction(s)?baseCreate(getPrototype(r)):{}}return(a?arrayEach:baseForOwn)(r,function(r, e, a){return t(i,r,e,a)}),i}module.exports=transform;