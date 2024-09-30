class Vehicle {
    constructor(site,ticket,price){
        this.site = site;
        this.ticket = ticket;
        this.price = price

    };
    move(){
        console.log("move");
    }
}
class Bus extends Vehicle{
    constructor(site,ticket,price,speed,passenger){
        super(site,ticket,price);
        this.speed = speed;
        this.passenger = passenger;

    }
}