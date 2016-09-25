function(context, args)
{
	var t = { ez_21:"" };
	Object.assign(t, args.t);
	var u = ["unlock", "open", "release"];

	for (var i = 0; i < u.length; i++) {
		t.ez_21 = u[i];
		if (! /LOCK_ERROR.*correct unlock/.test(args.n.call(t).replace("\n", ""))) {
			return u[i];
		}	
	}

	#s.chats.tell({ to:context.caller, msg: JSON.stringify(t) });
	return { ok:true };

}