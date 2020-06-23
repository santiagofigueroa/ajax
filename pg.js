// Q14
    var xmp  = new XMLHttpRequest();
	
	xmp.open('GET','data.json',true);
    xmp.responseText = "text";
    xmp.send();
// Makes sure connection has being stablish.
	xmp.onreadystatechange = function (){
		
		if (xmp.readyState == 4 && xmp.status === 200){
            console.log("Success ");        
		
		} else {
            console.log("Fail");    
		}
        document.getElementById("con").innerHTML = "Status is: " +xmp.status;
	}//  End of function. 
    
    xmp.onload = function(){
        if(xmp.status === 200){
            var data = JSON.stringify(xmp.responseText);
            // Will need to add the data to JSON object.
           var valid =  validJSON(data);
            console.log(valid);
            console.log(data);
            document.getElementById("q14").innerHTML = data;
             // Parse to Objec. 
            
            var ObjDt = JSON.parse(data);
            console.log(ObjDt);
            /// Object to hold propertie after split
            var d = new Object();
            d.grid = new Array();
            
            //  
            var  str = ObjDt.split(']],');
            var  matrix =  str[0]+"]]";
            matrix = matrix.split(":");
            d.grid = filter(matrix[1]);
            
            validJSON(matrix[1]);
            console.log(d.grid); 
            var str1 = str[1];
            console.log(str1);
            str1 = str1.substring(0, str1.length - 1);
            var str2 = "{" + str1;
            str = str1.substring(0, str1.length - 1);
            
            console.log(str2);
            // Convert to Object.
            //Winning lines
            ObjDt = JSON.parse(str2);
        
            console.log(ObjDt);
            
            //var winL = ObjDt.winningLines;
            //console.log(winL);
            /*
            / To manipulate the object needed for implementation.
            / 
            */
            d.wLines = new Array();
            // Added to one object 
            d.wLines = MK2Array(8,6,ObjDt.winningLines);
            
            var endResult =  {"symbolMatrix":d.grid, "lineWins": d.wLines}; 
            // To be more redable 
            var strEndR = JSON.stringify(endResult,null,4);
            console.log(strEndR);
            document.getElementById("obj").innerHTML = ObjDt.winningLines.toString;
            console.log(d);
            document.getElementById("eResult").innerHTML = strEndR;
            var out = getOutput();
            console.log( "Output string : ");
            console.log(out);
        }
        
}
    
function filterWinLines(data){
    //  Makes sure that the Object is not Empty.
        if(Object.keys(data).length === 0 && data.constructor === Object){
            console.log();
            
        } else {
            console.log(data);
            
        }
    
}


function symbl(str){
    
    var symbolMap = { "L1":5,"L4":8,"L3":7,"H1":1 };
        
            
            switch (str) 
            {
                case "L1":
                 return symbolMap['L1'];
                break;
                 
                case "L4":
                return symbolMap['L4']  
                break;
                  
                case "L3":
                return symbolMap['L3'] 
                break;
                
                case "H1":
                return  symbolMap['H1'] 
                break;
            }

    
    return 0; 
}

function MK2Array (cols ,row , objs){
    
    var  tmpArr = new Array(cols);
    var  arr  = [];
    var arrIndex = 0; // To check if it was being implemented
    //for(var x in objs){
    objs.forEach(function(x){
        console.log("Winning Line: "); 
        console.log(x);
        tmpArr[0] = new Array(row);
            
         tmpArr[0] = x.line;
         tmpArr[1] =  x.lineIndex;
         tmpArr[2] =  x.matchCount;
         tmpArr[3] =  symbl(x.symbol);
         tmpArr[4] =  x.win;
        
        console.log(tmpArr);
    arr.push({"id":tmpArr[1],"win":tmpArr[4],"symbol":tmpArr[3],"symbolCount":tmpArr[2],"definition":tmpArr[0],"lineSymbols":[5,5,5,-1,-1]});
    console.log(arr[arrIndex]);
        arrIndex++;
        
    });
    console.log();
    console.log("Temp Array: ");
    console.log(tmpArr);
    console.log("Array that returns: ");
    console.log(arr);
    return  arr; 
}
    
    
function filter(matrix){
    // Created new Matrix to change values on Grid.
    var array = [];
    for (var i = 0 ; i < array.length ; i++){
        array[i] =  new Array(row);
        for (var j = 0 ; j < array[i].length; j++)
        {
        }
   }
    array =  JSON.parse(matrix);
    console.log(array);

    var symbolMap = { "L1":5,"L2":6,"L4":8,"L3":7,"H1":1 };
    
    //var mLen  = array.length * array[j].length;
    console.log(symbolMap);
    //console.log(map);
    for (var i = 0 ; i < array.length ; i++)
    {
        for (var j = 0 ; j < array[j].length ; j++)
        {
            
            
            switch (array[i][j]) 
            {
                case "L1":
                array[i][j] = symbolMap['L1'];
                break;
                    
                case "L2":
                array[i][j] = symbolMap['L2'];
                break;
                 
                case "L4":
                array[i][j] = symbolMap['L4']  
                break;
                  
                case "L3":
                array[i][j] = symbolMap['L3'] 
                break;
                
                case "H1":
                array[i][j] = symbolMap['H1'] 
                break;
              
                console.log(array[i][j]);
            }
        }
    }
            // Number are change once it get here.
        // console.log(mLen)
    
    console.log(array);
    
   return array;  
}
    

function validJSON(jsonString){
    
    try{
        if(typeof jsonString != 'string'){
            return false;
       }
        var st = JSON.parse(jsonString);   
       return true           
    }catch(error){
        console.log(error);
        return false;     
    }
    
}

function getOutput(){
    var xmp  = new XMLHttpRequest();
	
	xmp.open('GET','out.json',true);
    xmp.responseText = "text";
    xmp.send();
    // Makes sure connection has being stablish.
    
    xmp.onload = function(){
        if(xmp.status === 200){
            var data = JSON.stringify(xmp.responseText);
            // Just for compering the out put file.
                var valid = validJSON(data); 
                console.log(data);
                return data;
                       
            }else{
                return "";
            }
        
        }   
}



    
	