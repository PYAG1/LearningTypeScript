//abstract classes require interface
//


class Takephoto{
    constructor(      public cameraMOde: string, public filter:string){
  
        
    }
}
const pa = new Takephoto("test","test")//abstract prevent an object of the class from being created.