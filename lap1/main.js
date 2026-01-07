"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const rectanle = (d, r) => {
    const perimeter = 2 * (d + r);
    const area = d * r;
    return 'đây là chu vi ' + perimeter + 'đây là diện tích' + area;
};
console.log(rectanle(5, 4));
const form = document.querySelector('form');
form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const dai = document.getElementById('dai');
    const rong = document.getElementById('rong');
    const d = Number(dai.value);
    const r = Number(rong.value);
    console.log(rectanle(d, r));
});
const sumNumber = () => {
    let sum = 0;
    const n = 10;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log('tổng dãy số từ 1 đến 10 là ' + sum);
};
sumNumber();
const isPrime = (n) => {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
isPrime(7);
const countChar = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};
console.log(countChar("hello", "i"));
//# sourceMappingURL=main.js.map