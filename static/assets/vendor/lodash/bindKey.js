var baseRest=require("./_baseRest"),createWrap=require("./_createWrap"),getHolder=require("./_getHolder"),replaceHolders=require("./_replaceHolders"),WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_PARTIAL_FLAG=32,bindKey=baseRest(function(e, r, _){var a=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(_.length){var A=replaceHolders(_,getHolder(bindKey));a|=WRAP_PARTIAL_FLAG}return createWrap(r,a,e,_,A)});bindKey.placeholder={},module.exports=bindKey;