function(context, args)
{
	var u = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"]
	for (var i = 0; i < u.length; i++) {
		var t = { c001:u[i], color_digit:u[i].length};
		Object.assign(t, args.t);
		if (! /.*ERROR.*color name/.test(args.n.call(t).replace("\n", ""))) {
			#s.chats.tell({ to:context.caller, msg: JSON.stringify(t)});
			return { ok:true };
		}
	}		
	return { ok:false };
}