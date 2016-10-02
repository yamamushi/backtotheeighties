function(context, args)
{
    var a={};
    Object.assign(a, args.a);
    var q=args.n.call(a).split("!");
    var m=q[q.length-2];
    var w = ["unlock", "open", "release"];
    var c = ["cyan", "purple", "yellow", "red", "green", "orange", "blue", "lime"];
    
    
    switch(m)
    {
        case "EZ_21":
            Object.assign(a, {ez_21:""});
            
            for (var i = 0; i < 3; i++) {
                a.ez_21 = w[i];
                if ( u(a,"unlock command")) break;
            }	
            break;
            
        case "EZ_35":
            Object.assign(a, {ez_35:"",digit:""});
            

            for (var i = 0; i < 3; i++) {
                a.ez_35 = w[i];
                if ( u(a,"unlock command")) break;
            }	
            
            for ( var i=0 ; i < 10; i++) {
                a.digit = i;
                if ( u(a,"t digit")) break;
            }	
            break;
            
        case "EZ_40":
            Object.assign(a, {ez_40:"",ez_prime:""});
            
            var p = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];
            for (var i = 0; i < 3; i++) {
                a.ez_40 = w[i];
                if ( u(a,"unlock command")) break;
            }	
            
            for ( var i=0 ; i < p.length; i++) {
                a.ez_prime = p[i];
                if ( u(a," prime")) break;
            }	
            break;
            
        case "c001":
            Object.assign(a, { c001:"" , color_digit:0});
            
            for (var i = 0; i < 8; i++) 
            {
                a.c001 = c[i];
                if (u(a,"name")) break;
            }	
            a.color_digit=a.c001.length;
            
            break;
            
        case "c002":
            Object.assign(a, { c002:"" , c002_complement:""});
            
            for (var i = 0; i < 8; i++) 
            {
                a.c002 = c[i];
                if (u(a,"name")) break;
            }	
            for(var j=0;j<8;j++)
            {
                a.c002_complement = c[j];
                if (u(a," complement")) break;
            }
    
            break;
            
        case "c003":
            Object.assign(a, { c003:"" , c003_triad_1:"", c003_triad_2:""});
            
            for (var i = 0; i < 8; i++) 
            {
                a.c003 = c[i];
                if (u(a,"name")) break;
            }	
            for(var j=0;j<8;j++)
            {
                a.c003_triad_1 = c[j];
                if (u(a,"first")) break;
            }
            
            for(var k=0;k<8;k++)
            {
                a.c003_triad_2 = c[k];
                if (u(a,"second")) break;
            }
            break;
    }
    
    #s.chats.tell({ to:context.caller, msg: JSON.stringify(a) });

	return { ok:true };
    function u(x,b){ return !args.n.call(x).replace("\n", "").includes(b);}

}