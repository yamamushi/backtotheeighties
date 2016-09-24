function(context, args)
{
	var t;
	var u = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"];
	c002();
	#s.chats.tell({ to:context.caller, msg: JSON.stringify(t)});
	return { ok:true };
	function c002() {
		t = { c002: args.c, c002_complement:"" };
		for (var i = 0; i < u.length; i++) {
			t.c002_complement = u[i];
			if (! /LOCK_ERROR.*correct complement color\./.test(args.n.call(t).replace("\n", ""))) {
				break;
			}
		}		
	}
}