enum Rate {
  low = 'Thấp',
  medium = 'Trung bình',
  hight = 'Cao'
}

type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
};
const Products:Product[]=[
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

const ListProduct = ()=>{

    const table = document.querySelector('table') as HTMLTableElement;
    Products.map((item,index)=>{
       return table.innerHTML+=`
         <tr>
            <td >${index+1}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.rate}</td>
            <td>${item.sale}</td>
        </tr>
        `
    });
}
ListProduct();

type ProductWithDesc = Product & {
  description: string;
};

const addDescription = (products: Product[]): ProductWithDesc[] => {
  return products.map(item => ({
    ...item,
    description: item.price > 5 ? 'Tốt' : 'Bình thường'
  }));
};
const productsWithDesc = addDescription(Products);


const totalPrice = (products: Product[]): number => {
  return products.reduce((sum, item) => sum + item.price, 0);
};

console.log("Tổng giá sản phẩm:", totalPrice(Products));

const filterSaleAndRate = (products: Product[]): Product[] =>
  products.filter(item=>{
        item.sale === true && 
        (item.rate === Rate.hight || item.rate=== Rate.medium);
    });
console.log("Sản phẩm sale & rate >= Trung bình:", filterSaleAndRate(Products));