const nayok = {
    nayokName: "anata",
    age: 40,
    phoneNumber: 1743222362,
    movie: "borsah keno Jele"

}
const keys = Object.keys(nayok);
console.log(nayok);
console.log(keys);
const values = Object.values(nayok);
console.log(values);
const pair = Object.entries(nayok);
console.log(pair);
delete nayok.movie;
console.log(nayok);
const {age , ...youngNayok} = nayok;
console.log(youngNayok);
Object.freeze(nayok)