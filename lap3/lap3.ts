
// câu 1
const averageScore = (x:number,y:number,z:number): number=>{
    return (x+y+z)/3;
}

console.log(averageScore(1,3,6));

//câu 2
type checkNumber = (n:number)=>boolean;

const Number:checkNumber = (n)=> n%2==0;
console.log(Number(5));

//câu 3
function createUser(
  name: string,
  email: string,
  age?: number,                
  role: string = "user"         
) {
  return {
    name,
    email,
    age,
    role
  };
}
console.log(createUser("Hiếu", "hieu@gmail.com"));
console.log(createUser("An", "an@gmail.com", 20));
console.log(createUser("Bình", "binh@gmail.com", 22, "admin"));


// câu 4
type Product = {
  name: string;
  price: number;
};
function addProducts(...products: Product[]) {
  return products;
}
const list = addProducts(
  { name: "Áo", price: 200 },
  { name: "Quần", price: 300 }
);

console.log(list);
