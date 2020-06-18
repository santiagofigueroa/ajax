// Q10, 
var symbolMatrix = [[ "A","A","A","A","A" ], 
                [ "B","B","B","B","B" ], 
                [ "C","C","C","C","C" ]];

console.log(symbolMatrix);
var arr = []; // Global 
var arrResult = []; // 
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
    
    console.log(array);
    document.getElementById("q11").innerHTML = array;
    
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
                    //arrResult.push({x: i, y: j});
                     
                     
                }
            
     console.log(array);  
    return array;
}

// Add to the 5x3 Matrix 




