	var xmp  = new XMLHttpRequest();
	
	xmp.open('GET','data.json',true);
    xmp.responseText = "text";
    

	xmp.onreadystatechange = function (){
		
		if (xmp.readyState == 4 && xmp.status === 200){
            
            console.log("Success ");    
            console.log(xmp.status);    
		
		} else {
            console.log("Fail");    
            console.log(xmp.status);
		}
	}//  End of function. 
    
    xmp.onload = function(){
        if(xmp.status === 200){
            var data = JSON.parse(xmp.responseText);
            console.log(data);
            
        }
        
    }
    
	xmp.send();