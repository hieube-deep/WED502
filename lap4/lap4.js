"use strict";
const Student1 = (id, name, score) => {
    return { id, name, score };
};
console.log(Student1(1, "hiếu", 7));
const user1 = {
    id: 1,
    email: "123@gmail.com",
    phoneNumber: 1234556,
};
const user2 = {
    id: 2,
    email: "456@gmail.com",
};
console.log(user1, user2);
const Calculate = (x, y) => {
    const sum = x + y;
    const multiplication = x * y;
    return { x: sum, y: multiplication };
};
console.log(Calculate(7, 4));

function logStatus(status) {
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
//# sourceMappingURL=lap4.js.map