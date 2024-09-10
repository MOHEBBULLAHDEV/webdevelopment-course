const ticketPrice = 120;
let BreakfastCost = 50;
let securityGuardPayment = 500;
let totalSellingTicket = "150";

function calculateMoney(ticketAmount) {
    if (ticketAmount > 0 && typeof ticketAmount === "number") {
        let ticketSellingAmount = ticketPrice * ticketAmount;
        let totalBreakfastCosts = BreakfastCost * 8;
        remainingMoney = ticketSellingAmount - (totalBreakfastCosts + 500);
        return remainingMoney;
        
    }else{
        return "Invalid Number";
    }
 
}
console.log(calculateMoney(totalSellingTicket));
