var baseGet=require("./_baseGet"),baseSet=require("./_baseSet");function baseUpdate(e, a, t, s){return baseSet(e,a,t(baseGet(e,a)),s)}module.exports=baseUpdate;