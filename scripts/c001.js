function(context, args)
{
	var l = {};
	var t;

	var u = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"]
	c001();
	tell(JSON.stringify(t));
	return { ok:true };
	function c001() {

		t = { c001:"", color_digit:""};

		for (var i = 0; i < u.length; i++) {
			t.c001 = u[i];
			t.color_digit = t.c001.length;
			if (! /LOCK_ERROR.*correct color name\./.test(args.npc.call(t).replace("\n", ""))) {
				break;
			}
		}		
	}
	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}
}