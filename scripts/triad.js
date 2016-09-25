function(context, args)
{
	var c = args.c;
	var u = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"];
	var	t = { c: c, t:"", a:"" };
	switch(true){
		case(c == u[0]):
			t.t = u[2];
			t.a = u[3];
			break;
		case(c == u[1]):
			t.t = u[4];
			t.a = u[2];
			break;	
		case(c == u[2]):
			t.t = u[1];
			t.a = u[0];
			break;
		case(c == u[3]):
			t.t = u[0];
			t.a = u[7];
			break;
		case(c == u[4]):
			t.t = u[5];
			t.a = u[1];
			break;	
		case(c == u[5]):
			t.t = u[6];
			t.a = u[4];
			break;
		case(c == u[6]):
			t.t = u[7];
			t.a = u[5];
			break
		case(c == u[7]):
			t.t = u[3];
			t.a = u[6];
			break;
	}

	return { ok:true , msg: JSON.stringify(t)};
}