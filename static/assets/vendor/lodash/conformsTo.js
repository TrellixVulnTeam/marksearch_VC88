var baseConformsTo=require("./_baseConformsTo"),keys=require("./keys");function conformsTo(o, e){return null==e||baseConformsTo(o,e,keys(e))}module.exports=conformsTo;