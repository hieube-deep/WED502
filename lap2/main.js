"use strict";
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
const Products = [
    {
        name: "Áo thun",
        price: 199000,
        sale: true,
        rate: Rate.medium
    },
    {
        name: "Quần jean",
        price: 399000,
        sale: false,
        rate: Rate.hight
    },
    {
        name: "Giày sneaker",
        price: 899000,
        sale: true,
        rate: Rate.low
    }
];
const ListProduct = () => {
    const table = document.querySelector('table');
    Products.map((item, index) => {
        return table.innerHTML += `
         <tr>
            <td >${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.rate}</td>
            <td>${item.sale? "sale":"hết sale"}</td>
        </tr>
        `;
    });
};
ListProduct();
const addDescription = (products) => {
    return products.map(item => ({
        ...item,
        description: item.price > 5 ? 'Tốt' : 'Bình thường'
    }));
};
const productsWithDesc = addDescription(Products);
const totalPrice = (products) => {
    return products.reduce((sum, item) => sum + item.price, 0);
};
console.log("Tổng giá sản phẩm:", totalPrice(Products));
const filterSaleAndRate = (products) => products.filter(item => {
    item.sale === true &&
        (item.rate === Rate.hight || item.rate === Rate.medium);
});
console.log("Sản phẩm sale & rate >= Trung bình:", filterSaleAndRate(Products));
//# sourceMappingURL=main.js.map