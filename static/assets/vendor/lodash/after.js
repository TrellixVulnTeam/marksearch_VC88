var toInteger=require("./toInteger"),FUNC_ERROR_TEXT="Expected a function";function after(e, t){if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return e=toInteger(e),function(){if(--e<1)return t.apply(this,arguments)}}module.exports=after;