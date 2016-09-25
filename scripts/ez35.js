function(context, args)
{
	var t = {ez_35:"", digit:""};
	Object.assign(t, args.t);
	var u = ["unlock", "open", "release"];
	for (var i = 0; i < u.length; i++) {
		t.ez_35 = u[i];
		if (! /.*ERROR.*unlock/.test(args.n.call(t).replace("\n", ""))) break;
	}		
	for (var i = 0; i < 10; i++) {
		t.digit = i;
		if (! /.*ERROR.*digit/.test(args.n.call(t).replace("\n", ""))) break;
	}
	#s.chats.tell({ to:context.caller, msg: JSON.stringify(t) });
	return { ok:true };
}