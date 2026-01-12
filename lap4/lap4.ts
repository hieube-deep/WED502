type Student = {
    id:number;
    name:string;
    score: number;
}

const Student1= (id:number,name:string,score:number):Student=>{
      return {id,name,score}
}
console.log(Student1(1,"hiếu",7));


interface User{
    id:number,
    email: string,
    phoneNumber?: number, 
}

const user1: User = {
    id: 1,
    email: "123@gmail.com",
    phoneNumber:1234556,
}
const user2: User={
    id:2,
    email:"456@gmail.com",
}

console.log(user1,user2);


type Variable = {
    x : number;
    y : number;
}

const Calculate = (x:number,y:number):Variable=>{
    const sum = x+y;
    const multiplication = x*y

    return {x:sum,y:multiplication}
}
console.log(Calculate(7,4));

type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
    switch (status) {
        case "loading":
            console.log("Đang tải...");
            break;
        case "success":
            console.log("Thành công");
            break;
        case "error":
            console.log("Có lỗi xảy ra");
            break;
        default:
            console.log("Đang chờ...");
            break;
    }
}

logStatus("loading"); 
logStatus("success"); 
logStatus("error");   
logStatus("idle");    