const user ={
    name:"papa",
    email:"pyag@gmail.com",
    isActive:true
}

//you use the throgh functions

function createUSer(name:string, email:string){
    return (`\n${name} your account has been created.Please verify your email at ${email}`)

}

console.log(createUSer(user.name,user.email));


function createCourse():{}{

    return {}
}