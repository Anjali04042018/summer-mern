// Internal Module

// Blocking 

// const fs = require('fs');
// const data = fs.readFileSync('./hello.txt');
// const text = data.toString();
// console.log(text);

// const data2 = fs.readFileSync('./hello.txt',{encoding:"utf8"})
// console.log(data2);

// Non blocking

// const fs = require('fs');

// fs.readFile('./hello.txt',{encoding:"utf8"}, (err,data) =>{
//     if(err){
//         console.log("Error Occured", err);
//     }else{
//         console.log(data);
//     }
// });

// Write file 


// const fs = require('fs');
// const res = fs.writeFileSync('./text.txt', "Hello World");
// console.log(res);


// const fs = require('fs');
// fs.writeFile('./text.txt', "Hello World",(err,data) =>{
//     console.log(err,data);
// });


// Promises

// const fsPromises = require('fs/promises');
// fsPromises.readFile('./hello.txt',{encoding:"utf8"}).then((data) =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log("Error",err);
// })

// const fsPromises = require('fs/promises');
// fsPromises.writeFile('./fileWrite.txt',"Dummy Text \n").then(() =>{
//     console.log("Write Done");
// }).catch((err) =>{
//     console.log("Error",err);
// })


// fsPromises.writeFile('./fileAppend.txt',"Dummy Text \n").then(() =>{
//     console.log("Append Done");
// }).catch((err) =>{
//     console.log("Error",err);
// })

const fsPromises = require('fs/promises');
const pr = fsPromises.readFile('./data.json');
// pr.then((bf) =>{
//     const text = bf.toString();
//     const arr = JSON.parse(text);
//     console.log(arr);
//     let math = 0;
//     for(let i = 0;i< arr.length; i++){
//         math += arr[i].MathScore;
//     }
//     console.log(math);
    
// }).catch((err) =>{
//     console.log("Error",err)
// })

const getObjectById = (id,arr) =>{
    const res = arr.filter((Element) =>{
        if(Element.id == id)return true;
        else return false;
    })
    return res;
}
pr.then((bf) =>{
    const text = bf.toString();
    const arr = JSON.parse(text);
    // console.log(arr);
    const obj = getObjectById(3,arr);
    console.log(obj)
}).catch(console.log)