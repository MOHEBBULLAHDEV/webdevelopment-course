const user = {
    count: 50001,
    uName: "bangladesh",
    address:{
        street:{
            first: "osman khan road",
            secound: "Nahar villah",
            third: "Jalil Manson"
        }
    }
}
console.log(user.address.street?.third);