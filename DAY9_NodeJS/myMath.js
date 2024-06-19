function sum(a, b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

module.exports = [sum,mul];


// function sum(a, b) {
//     return a + b;
// }

// function mul(a, b) {
//     return a * b;
// }

// module.exports = {sum,mul};



const figlet = require("figlet");
figlet("ANJALI",(err,data) =>{
    if(err ) console.log(err);
    else console.log(data);
})