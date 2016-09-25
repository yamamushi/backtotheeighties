function(context, args)
{
	var largs = {};
	var t;
	var unlock = ["unlock", "open", "release"];
	brkez();
	tell(JSON.stringify(largs));
	return { ok:true };
	function brkez() {
		t = { ez_21:"", ez_35:"", ez_40:"" };
		largs.ez = getUnlockString(args.ez);
	}

	function getUnlockString(key) {
		for (var i = 0; i < unlock.length; i++) {
			t[key] = unlock[i];
			if (! /.*ERROR.*correct unlock/.test(args.n.call(t).replace("\n", ""))) {
				return unlock[i];
			}
		}		
	}

	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}

}