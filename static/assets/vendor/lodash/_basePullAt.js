var baseUnset=require("./_baseUnset"),isIndex=require("./_isIndex"),arrayProto=Array.prototype,splice=arrayProto.splice;function basePullAt(e, r){for(var a=e?r.length:0,s=a-1; a--;){var t=r[a];if(a==s||t!==l){var l=t;isIndex(t)?splice.call(e,t,1):baseUnset(e,t)}}return e}module.exports=basePullAt;