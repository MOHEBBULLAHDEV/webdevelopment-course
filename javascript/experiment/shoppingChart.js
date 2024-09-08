const shoppingProduct =[
    {name:"tomato",price:50,quantity:5},
    {name:"Kola",price:5,quantity:3},
    {name:"Biskut",price:100,quantity:2},
    {name:"pepe",price:75,quantity:10},
   
];
function totalShoppingCost(products){
   let totalCost = 0;
    for(product of products){
        // console.log(product);
       perProductTotalPrice = product.price * product.quantity;
    //    console.log(perProductTotalPrice);
       totalCost = totalCost + perProductTotalPrice;
       


    }
    return totalCost;


}
console.log(totalShoppingCost(shoppingProduct));
