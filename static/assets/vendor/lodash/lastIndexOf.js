var baseFindIndex=require("./_baseFindIndex"),baseIsNaN=require("./_baseIsNaN"),strictLastIndexOf=require("./_strictLastIndexOf"),toInteger=require("./toInteger"),nativeMax=Math.max,nativeMin=Math.min;function lastIndexOf(e, t, n){var a=null==e?0:e.length;if(!a)return-1;var r=a;return void 0!==n&&(r=(r=toInteger(n))<0?nativeMax(a+r,0):nativeMin(r,a-1)),t==t?strictLastIndexOf(e,t,r):baseFindIndex(e,baseIsNaN,r,!0)}module.exports=lastIndexOf;