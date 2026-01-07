const rectanle =(d:number,r:number)=>{
    const perimeter = 2*(d+r);
    const area = d*r
   return 'đây là chu vi '+ perimeter + 'đây là diện tích' +area;
}
console.log(rectanle(5,4));

const sumNumber= ()=>{
    let sum:number = 0;
    const n:number = 10;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    console.log('tổng dãy số từ 1 đến 10 là '+ sum);
    
}
sumNumber();
 
const isPrime=(n:number):boolean=>{
    if(n<2) return false;

    for(let i=2; i<=Math.sqrt(n);i++){
        if(n%i ===0){
            return false;
        }
    }
    return true;
}
isPrime(7);

const countChar = (str:string,char:string):number=>{
    let count:number = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
}
console.log(countChar("hello","i"));


