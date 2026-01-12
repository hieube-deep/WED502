// class
class Preson {
    name: string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

const preson1 = new Preson("hiếu", 20);
const preson2 = new Preson('Hiền',12); 
console.log(preson1);
console.log(preson2);

interface sumFunction{
    (a:number,b:number):number
}
// interface
const sum:sumFunction=(a,b)=>{
    return a+b;
}

console.log(sum);


//type Object

type Product ={
    name : string;
    price: number;
    status: boolean;
}

