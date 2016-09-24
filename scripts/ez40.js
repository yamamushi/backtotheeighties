function(context, args)
{
	var t = {ez_40:"", ez_prime:""};
	var w = ["unlock", "open", "release"];
	var p = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];
	f();
	g();
	#s.chats.tell({ to:context.caller, msg: JSON.stringify(t) });
	return { ok:true };
	function f() {
		for (var i = 0; i < w.length; i++) {
			t.ez_40 = w[i];
			if (! /.*ERROR.*unlock/.test(args.n.call(t).replace("\n", ""))) {
				return;
			}
		}		
	}
	function g() {
		for (var i = 0; i < p.length; i++) {
			t.ez_prime = p[i];
			if (! /.*ERROR.*prime/.test(args.n.call(t).replace("\n", ""))) {
				return;
			}
		}	
	}

}