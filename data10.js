// Q10, 
var symbolMatrix = [[ "A","A","A","A","A" ], 
                [ "B","B","B","B","B" ], 
                [ "C","C","C","C","C" ]];

console.log(symbolMatrix);
setUp();


function setUp () { 
var arr = []; 
    
arr =  addtoarr();
conole.log(arr);
    
var arrResult = [] ;
//Call method to create 3x5 Matrix.  
arrResult =  m2d(3,5); 
console.log(arrResult);
    
    
} 



// new array
function addtoarr (){
    var arr =  [];
    for (var i = 0 ; i < symbolMatrix.length ; i++)
    {
        for (var j = 0 ; j < symbolMatrix[i].length ; j++)
        {
        // It was printing booleans.
        //if (symbolMatrix[i][j] =! null) {
            arr.push(symbolMatrix[i][j]);
            
        //}
        }
    }
    
    console.log(arr);
    document.getElementById("q10").innerHTML = arr;
    return arr; 
}


function m2d (cols ,row ){
    var array =  new Array(cols); 
    for (var i = 0 ; i < array.length ; i++){
        array[i] =  new Array(row);
        for (var j = 0 ; j < array[i].length ; j++)
        {
           
        }
   }
        
    console.log(array);
    document.getElementById("q11").innerHTML = array;
    return array;
} 

// Add to the



