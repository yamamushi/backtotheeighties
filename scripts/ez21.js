function(context, args)
{
	var lock_args = {};
	var t;
	
	var unlock = ["unlock", "open", "release"]
	breakEz21();
	tell(JSON.stringify(lock_args));
	return { ok:true };
	function breakEz21() {
		t = { ez_21:"" };
		lock_args.ez_21 = getUnlockString("ez_21");
	}

	function getUnlockString(key) {
		for (var i = 0; i < unlock.length; i++) {
			t[key] = unlock[i];
			if (! /LOCK_ERROR.*correct unlock/.test(args.n.call(t).replace("\n", ""))) {
				return unlock[i];
			}
		}		
	}

	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}

}