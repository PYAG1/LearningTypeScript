//starts with the keyword interface

interface USer{
    email:string,
    usehrid:number,
    starter:()=>string
}
//like field which are compulsory when doing sth

const hitexh:USer={
    email:"2iihih",
    usehrid:13, 
    starter:()=>"PApa "
}
//what makes it easy is the declaration of function
//you can add to an interface by redefining it 
//doesnt redefine the interface actually it moree like reopens the interface
//allows inheritance

interface Admin extends User{
    role?:"admin  "
}