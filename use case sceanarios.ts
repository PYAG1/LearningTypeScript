type User={
   readonly _id:string;// readonly in typescript only allows the user to readonly and not change the value
    name:string;
    email:string;
    isActive: boolean;
    age?:number //the question mark means it is optional
}


let newuser:User={
    _id: "1234",
    name:"uhuh"
    ,email:"",
    isActive:true
}

console.log(newuser.name)

newuser.name = "Apple"

console.log(newuser.name)

//newuser._id = "hciichici"

console.log(newuser._id)

//you can combine types
type cardNum ={
    number:string
}
type cardDate ={
    number:string
}

type CardDetails=cardNum & cardDate & {
cvv: number
}

// the & allows you to combines other types  you have defined


