const shoppingProduct =[
    {name:"tomato",price:50},
    {name:"Kola",price:5},
    {name:"Biskut",price:100},
    {name:"pepe",price:75},
   
];
function totalShoppingProductCost(products) {
    // console.log(productPrice);
    let totalPrice = 0;
    for(product of products){
        totalPrice = totalPrice + product.price;
        
    }
    return totalPrice;


    
}
console.log(totalShoppingProductCost(shoppingProduct));