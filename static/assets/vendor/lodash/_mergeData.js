var composeArgs=require("./_composeArgs"),composeArgsRight=require("./_composeArgsRight"),replaceHolders=require("./_replaceHolders"),PLACEHOLDER="__lodash_placeholder__",WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,nativeMin=Math.min;function mergeData(A, _){var R=A[1],e=_[1],r=R|e,L=r<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG),G=e==WRAP_ARY_FLAG&&R==WRAP_CURRY_FLAG||e==WRAP_ARY_FLAG&&R==WRAP_REARG_FLAG&&A[7].length<=_[8]||e==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&_[7].length<=_[8]&&R==WRAP_CURRY_FLAG;if(!L&&!G)return A;e&WRAP_BIND_FLAG&&(A[2]=_[2],r|=R&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG);var P=_[3];if(P){var o=A[3];A[3]=o?composeArgs(o,P,_[4]):P,A[4]=o?replaceHolders(A[3],PLACEHOLDER):_[4]}return(P=_[5])&&(o=A[5],A[5]=o?composeArgsRight(o,P,_[6]):P,A[6]=o?replaceHolders(A[5],PLACEHOLDER):_[6]),(P=_[7])&&(A[7]=P),e&WRAP_ARY_FLAG&&(A[8]=null==A[8]?_[8]:nativeMin(A[8],_[8])),null==A[9]&&(A[9]=_[9]),A[0]=_[0],A[1]=r,A}module.exports=mergeData;