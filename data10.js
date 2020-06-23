// Q10, 
var symbolMatrix = [[ "A","A","A","A","A" ], 
                [ "B","B","B","B","B" ], 
                [ "C","C","C","C","C" ]];

// Q11
var symbolMap = { "A":0,"B":1,"C":2 };

// Q12 
var arr12 = []; 
console.log(symbolMatrix);
var arr = []; // Global 
var arrResult = []; // Where we storing all the values from the Matrix as a regulatr array.
setUp();


function setUp () { 

arr =  addtoarr();
console.log(arr);

arrResult =arr;
//Call method to create 3x5 Matrix col.  
 m2d(5,3); 
//result of the 3x5    
//console.log(arrResult);
    
} 


// new array
function addtoarr (){
    for (var i = 0 ; i < symbolMatrix.length ; i++)
    {
        for (var j = 0 ; j < symbolMatrix[i].length ; j++)
        {
            arr.push(symbolMatrix[i][j]);
            console.log(arr);
        }
    }
    
    console.log(arr);
    document.getElementById("q10").innerHTML = arr;
    return arr; 
}


function m2d (cols ,row ){
    console.log(arrResult);
    var mLength = cols * row;
    var array =  new Array(cols); 
    
    for (var i = 0 ; i < array.length ; i++){
        array[i] =  new Array(row);
       // console.log(array[i]);
        for (var j = 0 ; j < array[i].length; j++)
        {
          //array[i].push(arrResult[j]);
            console.log(array);
        }
   }
    // Created a emprty Matrix 
    console.log(array);
  //  document.getElementById("q11").innerHTML = array;
    
                var colI = 0;
                var rowI = 0;
                  
                for(a = 0; a < arrResult.length; a++){
                    console.log(array[colI][rowI]);
                    array[colI][rowI] = arrResult[a];
                    rowI++;
                    if(row == rowI) {
                        rowI = 0;
                        colI ++;
                        
                    }
                    
                    if(colI == cols){
                        colI = 0 ;
                        
                    }
                    console.log(colI);
                    console.log(rowI);
                                          
                }
        console.log(array);// Answer please check console.   
    //Q11 
    // Uses the same 2d Array 
    
    
    var symbolMap = { "A":0,"B":1,"C":2 };
    // The amount of elements in the 2d array. Q12 and Q13
    var mLen  = array.length * array[j].length;
    var targetSymbol = ""; //
    var positions = [0,0];
    console.log(symbolMap);
    var map = symbolMap.toString;
    console.log(map);
    for (var i = 0 ; i < array.length ; i++)
    {
        for (var j = 0 ; j < array[j].length ; j++)
        {
            
            
            switch (array[i][j]) 
            {
                case "A":
                array[i][j] = symbolMap['A'];
                break;
                 
                case "B":
                array[i][j] = symbolMap['B']  
                break;
                  
                case "C":
                array[i][j] = symbolMap['C'] 
                break;
              
            }
            //Q12
            // Number are change once it get here.
            console.log(mLen)
            countNumELements(array[i][j],mLen);
            
            // Q13
            // Using Random Numbers.
            //Chaneg to true to run it.
            if(true) { 
            var r =  Math.floor(Math.random() * 10);    
            array[i][j] = r;
            countNumELements(array[i][j],mLen);
            }
        }
    }
    //
    
    console.log(array);
    // 
    
    return array;
}

// Q12

function countNumELements (element,len){
  
    console.log();
    arr12.push(element);
    //console.log(arr12);

    // Passed the array contains
    console.log(arr12.length);
    if(arr12.length == len){
        var obj = arr12.reduce( function (m, v) { 
            return m[v] = (m[v] || 0) + 1, m 
        }, {} ),
        result = [];
    
    for (var key in obj) {
            console.log([+key, obj[key]]);
            result.push([+key, obj[key]]);
        }
        console.log(result);
        return result;
        
    }
    //return 0;
}

