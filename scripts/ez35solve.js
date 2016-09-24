function(context, args)
{
	//EZ_35 Script, takes unlock string as an argument usage: lotus { npc:#s.tar.get_scr.ipt, ez_35:"unlock code"}
	var lock_args = {};
	var lock_type;

	breakEz35();
	tell(JSON.stringify(lock_args));
	return { ok:true };

	// Attempt to break an EZ_35 lock
	function breakEz35() {
		for (var i = 0; i < 10; i++) {
			if (! /LOCK_ERROR.*correct digit/.test(args.npc.call({ ez_35: args.ez_35, digit: i }).replace("\n", ""))) {
				lock_args.digit = i;
			}
		}
	}
	
	// Send a tell to the user with a message
	function tell(s) {
		#s.chats.tell({ to:context.caller, msg:"CRACK --> " + s });
	}

}