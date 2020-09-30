// +, - , * , /
function calcola(){
    //accedo argomento posizione zero
    var operazione = arguments[0];
    

     var result = arguments[1];

  for(var i = 2 ; i< arguments.length; i++){
    
     switch(operazione){
       case '+'  :
         result  +=arguments[i];
       break ;
          case '-'  :
         result  -= arguments[i];
       break;
          case '*'  :
         result  *=arguments[i];
       break;
          case '/'  :
        
         result  /=arguments[i];
       break;
       
     }
   
 }
//return lo metto fuori dal ciclo for
return result;
      
}
console.log(calcola('*', 2, 3 ,2, 1));


















//console.log(calcola());
