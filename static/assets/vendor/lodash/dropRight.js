var baseSlice=require("./_baseSlice"),toInteger=require("./toInteger");function dropRight(e, r, t){var i=null==e?0:e.length;return i?(r=t||void 0===r?1:toInteger(r),baseSlice(e,0,(r=i-r)<0?0:r)):[]}module.exports=dropRight;