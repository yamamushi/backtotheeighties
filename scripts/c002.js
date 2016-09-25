function(context, args)
{
	var u = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"];
	var	t = { c002: "", c002_complement:"" };
	for (var i = 0; i < u.length; i++) {
		t.c002 = u[i];
		if (! /.*ERROR.*color name/.test(args.n.call(t).replace("\n", ""))) {
			break;
		}
	}	
	for (var i = 0; i < u.length; i++) {
		t.c002_complement = u[i];
		if (! /.*ERROR.*complement color/.test(args.n.call(t).replace("\n", ""))) {
			break;
		}
	}		
		#s.chats.tell({ to:context.caller, msg: JSON.stringify(t)});
	return { ok:true };
}