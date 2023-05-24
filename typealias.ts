//type alias
//used when you are creating a function that will use the same type of user

type User={
    name:string;
    email:string;
    isactive: boolean
}

function createUSer(user:User): User{
return ({name:"papa",email:"ndiih",isactive:true})

}

createUSer({name:"papa",email:"ndiih",isactive:true})

//an error is originally given cause the function accepts a parameter of type user so the parameter must have the same parameters of the type user


export {}