function(context, args)
{
	var largs = {};
	var t;

	var unlock = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"]
	bkc003();
	tell(JSON.stringify(largs));
	return { ok:true };
	function bkc003() {
		t = { c003:"" };
		largs.c003 = getUnString("c003");
	}

	function getUnString(key) {
		for (var i = 0; i < unlock.length; i++) {
			t[key] = unlock[i];
			if (! /LOCK_ERROR.*correct color name\./.test(args.npc.call(t).replace("\n", ""))) {
				return unlock[i];
			}
		}		
	}

	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}

}