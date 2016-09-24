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
	breakEz40();
	tell(JSON.stringify(lock_args));
	return { ok:true };
	function breakEz40() {
		t = { ez_35:"" };
		lock_args.ez_35 = getUnlockString("ez_35");
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