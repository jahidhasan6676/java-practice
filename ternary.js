
let price = 1100;
const isLeader = true;

// if(isLeader === true){
//     if(price > 500){
//         price = price /2;
//     }
//   else {
//         price = 0;
//     }
       
// }
// else{
//     price = price + 100;



price = isLeader === true ? price > 1000 ? price /2: 0 : price + 200;
console.log(price);