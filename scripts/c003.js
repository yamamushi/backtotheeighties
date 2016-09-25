function(context, args)
{
	var u = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"];
	var	t = { c003: args.c, c003_triad_1:"", c003_triad_2:"" };
	for (var i = 0; i < u.length; i++) {
		t.c003_triad_1 = u[i];
		if (! /.*ERROR.*first triad color/.test(args.n.call(t).replace("\n", ""))) {
			break;
		}
	}	
	for (var i = 0; i < u.length; i++) {
		t.c003_triad_2 = u[i];
		if (! /.*ERROR.*second triad color/.test(args.n.call(t).replace("\n", ""))) {
			break;
		}
	}		
		#s.chats.tell({ to:context.caller, msg: JSON.stringify(t)});
	return { ok:true };
}