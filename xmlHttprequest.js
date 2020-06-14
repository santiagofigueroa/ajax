	var strict xmp  = new XMLHttpRequest();
	
	xmp.open = ('GET','data.json',true);

    xmp.send();

	xmp.onreadystatechange = function (){
		
		if (xmp.readyState == 4 && xmp.status == 200){
            
            console.log("Success ");    
            console.log(xmp.toString);    
		
		} else {
            console.log("Fail");    
            console.log(xmp.toString);
		}
	}//  End of function. 
	
	// Make the real call from ajax 
	
	// xmlhttp.open("POST","gui.php?params=1",true);
	// xmlttp.send();

	// MLHttp.senRequestHeader("Content-type","application/x-www-form-urlencoded");
	// XMLHttp.send(params);