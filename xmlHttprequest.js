//function numberButton() {

	
	var strict  xmp  = new XMLHttpRequest();
	
	xmp.open = ('GET','pg.js',true);
    xmp.send();

	xmp.onreadystatechange = function (){
		
		if (xmp.readyState == 4 && XMLHttp.status == 200){
                
            console.log(xmp.toString);    
		
		}else {
			
            console.log(xmp.toString);
		}
	}; 
	
	// Make the real call from ajax 
	
	// xmlhttp.open("POST","gui.php?params=1",true);
	// xmlttp.send();

	// MLHttp.senRequestHeader("Content-type","application/x-www-form-urlencoded");
	// XMLHttp.send(params);
// }