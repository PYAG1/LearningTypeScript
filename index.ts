class User {
    email: string;
    private name: number;

    constructor(email: string, name: number) {
        this.email = email;
        this.name = name;
    }

    set helper(coursenum: number) {
        this.name === coursenum;
    }

    get value(): string {
        return `dbdu ${this.name}`;
    }
}

const papa = new User("nsbsbs", 10);
console.log(papa.email);

console.log(papa.value);

class Subuser extends User{

}
//classes can implement interfaces
interface Takephoto{
    name:number,
    email: string
}

class Instagram extends Takephoto{
   //you can declare a class as abstract this allows us to use it not immediately
}//defiing a class as abstract allows us to define the functions built in it