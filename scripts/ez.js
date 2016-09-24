function(context, args)
{
	var lock_args = {};
	var lock_type;
	var ret;
	var t;
	//
	// Possible lock open strings
	//
	var unlock = ["unlock", "open", "release"]
	brkez();
	tell(JSON.stringify(lock_args));
	return { ok:true };
	function brkez() {
		t = { ez_21:"", ez_35:"", ez_40:"" };
		lock_args.ez = getUnlockString(args.ez);
	}
	//
	// Find the correct unlock string
	//
	function getUnlockString(key) {
		//
		// Loop through possible unlock strings in an attempt to break the lock
		//
		for (var i = 0; i < unlock.length; i++) {
			t[key] = unlock[i];
			if (! /LOCK_ERROR.*correct unlock/.test(args.npc.call(t).replace("\n", ""))) {
				return unlock[i];
			}
		}		
	}

	//
	// Send a tell to the user with a message
	//
	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}

}