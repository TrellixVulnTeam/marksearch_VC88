var arraySome=require("./_arraySome"),baseIteratee=require("./_baseIteratee"),baseSome=require("./_baseSome"),isArray=require("./isArray"),isIterateeCall=require("./_isIterateeCall");function some(e, r, a){var s=isArray(e)?arraySome:baseSome;return a&&isIterateeCall(e,r,a)&&(r=void 0),s(e,baseIteratee(r,3))}module.exports=some;