"user strict";
// fn getType {{{
var getType = function(o){
     return Object.prototype.toString.call(o).slice(8, -1);
};
// }}}

// fn decode{{{
var decode = function(){
    var args = Array.prototype.slice.call(arguments),
		key = args.shift(),
		ret, iv, inv;
    for(var i=0,ii=args.length; i<ii; i+=2){
		iv = args[i], inv = (i+1 in args) && args[i+1];
        if(key===iv && inv!==undefined){
			iv = inv;
			break;
		}else if((i+1)!==ii){
			iv = undefined;
		}
    }
	return typeof iv==='function' ? iv(key) : iv;
};
// }}}

// fn casers{{{
var switcher = function(key, kvs, rfn){
	var type = getType(kvs);
	key = decode(
		type in {'Array':1, 'Object':1},
		true, key,
		function(){
			throw new Error('Function casers Parameter `kvs` type error!');
		}
	);
	var kv = kvs[key];
	kv = kv===undefined ? rfn : kv;
	return typeof kv=='function' ? kv(key) : kv;
};
// }}}

// vim: fdm=marker
