// const pr = new Promise((resolve,reject) =>{
//     let flag = true;

//     if(flag === true){
//         setTimeout(() =>{
//             resolve(["apple", 'mango']);

//         })
//     }
//     else{
//         reject("Not done");
//     }
// });

// pr.then((val) =>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })




// console.log("START")
// const pr = new Promise((resolve,reject) =>{
//     let flag = true;

//     if(flag === true){
//         setTimeout(() =>{
//             resolve(["apple", 'mango']);

//         },4000);
//     }
//     else{
//         reject("Not done");
//     }
// });

// console.log("MID")
// setTimeout(() =>{
//     console.log("Done");
// }, 4000)
// pr.then((val,e) =>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })

// console.log("END");






let cnt = 0;
let id;
const cb = () =>{
    cnt++;
    console.log("Done", cnt);
    if(cnt == 4){
        clearInterval(id);
    }
};
const time = 1000;

id = setInterval(cb, time);

// map , for Each and filter  method ka code likna hai 

