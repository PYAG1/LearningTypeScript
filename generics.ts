const score:Array<number>= [1,2,3,4,5]


function identityOne(val: boolean|number){

}

function indentity<Type>(val:Type):Type{
    return val 
}
//it is similar to any but works differently it is in such a way tha you do not need to specify the types the code automatically does that for yo u

 function getvalues<T>(val:T[]):T[]{
    return []
 }

 //transforming into an array
 const getMoreSearch = <T,>(products:T[]):T[]=>{
    return []

 }

 // normally a "," is added to the generic to prevent it for reading as a jsx

 function another<Type,u extends number>(val:Type,pal: u):object{
return {}
 }

 //you can add as many generics a s possible
 //you can use the extends to specify the data type
 //you can use in when specifying type of , or interface 

 interface Quiz{
    name:string,
    type:string
 }

 
 interface course{
    name:string,
    author : string
 }

 class Sell<T>{
    public cart:T[]=[]
    addtoCart(product:T){
        this.cart.push(product)
    }
   
 }