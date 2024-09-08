 const first100Price = 100;
 const second100Price = 90;
 const above200Price = 70;
 let buyingQuantity = 300;
 function layerDiscount(quantity){
    let totalPrice = 0;
    let remainingQuantity;
    let remainingQuantityPrice;
    if (quantity <= 100) {
        totalPrice = first100Price * buyingQuantity;
        return totalPrice;

        
    }else if(quantity <= 200 ){
         remainingQuantity =  quantity -100;
         remainingQuantityPrice= remainingQuantity * second100Price;
        totalPrice = first100Price * 100 + remainingQuantityPrice;
        return totalPrice;


    }else{
        remainingQuantity = quantity - 200;
        remainingQuantityPrice = remainingQuantity * above200Price;
        totalPrice = first100Price * 100 + second100Price * 100 + remainingQuantityPrice;
        return totalPrice;

    }


 }
console.log( layerDiscount(buyingQuantity));
