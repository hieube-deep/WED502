"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// câu 1
const averageScore = (x, y, z) => {
    return (x + y + z) / 3;
};
console.log(averageScore(1, 3, 6));
const Number = (n) => n % 2 == 0;
console.log(Number(5));
//câu 3
function createUser(name, email, age, role = "user") {
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
function addProducts(...products) {
    return products;
}
const list = addProducts({ name: "Áo", price: 200 }, { name: "Quần", price: 300 });
console.log(list);
//# sourceMappingURL=lap3.js.map