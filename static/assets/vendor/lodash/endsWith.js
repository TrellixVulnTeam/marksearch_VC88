var baseClamp=require("./_baseClamp"),baseToString=require("./_baseToString"),toInteger=require("./toInteger"),toString=require("./toString");function endsWith(e, r, t){e=toString(e),r=baseToString(r);var n=e.length,i=t=void 0===t?n:baseClamp(toInteger(t),0,n);return 0<=(t-=r.length)&&e.slice(t,i)==r}module.exports=endsWith;