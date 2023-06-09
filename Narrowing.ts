 // you can use the "in" operator to help in type narrowing.USed in obkect sto see if sth is present , put parameter in double quotes
 //instance of it return a true or false
 //it can only be used for ' new'


 type Fish= {swim: ()=> void};
 
 type Bird= {fly: ()=> void};



 function isFish(pet:Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
 }

 //you can use "is" this helps in union case

 //Discrimnated unions
 //IT is the way the "kind" repeats in all the interfaces


 interface Circle{
kind : "circle",
radius: number
 }

 
 interface Square{
    kind : "square",
    side: number
     }

     
 interface rectangle{
    kind : "rectangle",
    side1: number,
    side2: number
     }
 type Shape = Circle | Square


 function getTrueshape(val:Shape){
    if(val.kind === "circle"){
return Math.round(Math.PI * val.radius)

    }
    else{
        return "pear"
    }

 }

 console.log(getTrueshape({kind:"square",side:12}));


 // when using switch case you must have a default of type never
 //default : const hop = never = val
 //return hop
 


 