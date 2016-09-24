function(context, args)
{
	// usage: primefind { npc:#s.target_script, pass:"password"}
	var lock_args = {};
	var primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];

	primefind();
	tell(JSON.stringify(lock_args));
	return { ok:true };
	
	function primefind() {
		for (var i = 0; i < primes.length; i++) {
			if (! /LOCK_ERROR.*correct prime\./.test(args.npc.call({ ez_35: args.pass , ez_prime: primes[i] }).replace("\n", ""))) {
				lock_args.ez_prime = primes[i];
				return;
			}
		}	
	}

	function tell(s) {
		#s.chats.tell({ to:context.caller, msg: s });
	}
}