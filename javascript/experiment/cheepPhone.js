const phoneBrand =[
    {name:"Samsung",price:35000,color:"black",camera:"12px"},
    {name:"Walton",price:15000,color:"black",camera:"12px"},
    {name:"Iphone",price:250000,color:"black",camera:"12px"},
    {name:"Xiomi",price:25000,color:"black",camera:"12px"},
    {name:"symphoni",price:5000,color:"black",camera:"12px"}
];
function cheapestPhone(phones){
    // console.log(phone);
    let cheapPhone = phones[0]
    for(phone of phones){
        if (phone.price < cheapPhone.price) {
            cheapPhone = phone;
            
        }
        
    }
    return cheapPhone;

}
console.log(cheapestPhone(phoneBrand));