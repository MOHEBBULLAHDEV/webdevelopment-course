const product = [
    {id: 1,name:"lenevo",Price:45000, color: "red"},
    {id: 2,name:"HP",Price:55000, color: "red"},
    {id: 3,name:"Dell",Price:40000, color: "red"},
    {id: 4,name:"Mac",Price:135000, color: "red"},
];
const productName = product.map(brandname => brandname.name);
console.log(productName);