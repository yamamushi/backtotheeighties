function(context, args)
{
	var largs = {};
	var t;

	var unlock = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"]
	bkc();
	tell(JSON.stringify(largs));
	return { ok:true };
	function bkc() {
		t = { c001:"", c002:"", c003:"" , c004:""};
		largs.c = getUnString(args.c);
	}

	function getUnString(key) {
		for (var i = 0; i < unlock.length; i++) {
			t[key] = unlock[i];
			if (! /LOCK_ERROR.*correct color name/.test(args.n.call(t).replace("\n", ""))) {
				return unlock[i];
			}
		}		
	}

	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}

}