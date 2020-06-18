	var xmp  = new XMLHttpRequest();
	
	xmp.open('GET','out.json',true);
    xmp.responseText = "text";
    xmp.send();
// Makes sure connection has being stablish.
	xmp.onreadystatechange = function (){
		
		if (xmp.readyState == 4 && xmp.status === 200){
            
            console.log("Success ");    
            console.log(xmp.status);   
            comsole.log(data.x);
		
		} else {
            console.log("Fail");    
            console.log(xmp.status);
		}
	}//  End of function. 
    
    xmp.onload = function(){
        if(xmp.status === 200){
            var data = JSON.stringify();
            // Will need to add the data to JSON object.
            console.log(data);
            document.getElementById("result").innerHTML = data;
             // Parse to Objec. 
            
            var ObjDt = JSON.parse(data);
            
            console.log(ObjDt);
            document.getElementById("obj").innerHTML = ObjDt;
            
            var r = JSON.parse(ObjDt);
            
            console.log(r);
            
            
        }
        
    }
    
	