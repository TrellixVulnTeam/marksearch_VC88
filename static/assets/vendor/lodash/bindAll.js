var arrayEach=require("./_arrayEach"),baseAssignValue=require("./_baseAssignValue"),bind=require("./bind"),flatRest=require("./_flatRest"),toKey=require("./_toKey"),bindAll=flatRest(function(r, e){return arrayEach(e,function(e){e=toKey(e),baseAssignValue(r,e,bind(r[e],r))}),r});module.exports=bindAll;