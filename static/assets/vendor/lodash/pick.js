var basePick=require("./_basePick"),flatRest=require("./_flatRest"),pick=flatRest(function(e, t){return null==e?{}:basePick(e,t)});module.exports=pick;