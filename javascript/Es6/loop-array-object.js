const num = [2,25,36,14,47,58,69];
for (const n of num) {
    console.log(n);
    
}
const parent = {
    pName: "mohebbullah",
    age:25,
    phone:1743222365,
    address: "Barisal",

}
for (const key in parent) {
    console.log(key);
    console.log(parent[key]);
}
const keys = Object.keys(parent);
console.log(keys);
for (const k of keys) {
    console.log(parent[k]);
    
}