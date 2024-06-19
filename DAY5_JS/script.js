// console.log("Working..");

// let name1 = "Anjali";
// let name2 = "Shyam";

// let n = name1 +' '+ name2;

// console.log(n);

// let a = name1 + 10;
// let b = 10 + name1;
// let c = name1 - 10;
// console.log(a);
// console.log(b);
// console.log(c);

// let r = 10+ 13+ 20+ " Hello";
// console.log(r);

// console.log(typeof(n));
// console.log(typeof(r));


// let v1 = "Hello";
// let v2 = "Hello";

// // Double equal will check for the equality of the value
// // It can do type correction
// if(v1 == v2){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// // Triple equal check for the equality of the value and datatypes also
            
// if(v1 === v2){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// let u1 = "Anjali";
// let u2 = "Nitish";

// let ans1 =  u1 + ' '+ u2;
// let ans2 = `${u1} ${u2}`;

// console.log(ans1);
// console.log(ans2);

//                         FUNCTION

// function printHello(x){
//     console.log("Hello" , x)
// }

// printHello("Anjali");

// const pH = function printHi(x){
//     console.log(x);
// }

// pH("Anjali");


// const pH1 = (x) => {
//     console.log(x);
// }

// pH1("AB");



// const a = 10;
// if(a < 30){
//     console.log("It is greater than a ");
// }
// else{
//     console.log("Is is less than a ")
// }

// const sum = (a, b) => {
//     if(a === undefined){
//         console.log(0);
//     }
//     if(b === undefined){
//         console.log(a);
//     }

// }

// sum();
// sum(10);


// const obj1 = new Object();
// const obj2 = {};

// obj1.name = "Anjali";
// obj1.city = "Chhapra";

// console.log(obj1);
// console.log(obj2);


// const obj= {
//  name: "Anjali", "Age ": 20, 10: "ten", "city" : "Jaipur",
// }
// console.log(obj);
// console.log(obj.name)
// console.log(obj[10])

// const input =  prompt("");
// console.log(obj[input]);


// Non Primitive 

// const o1 = {
//     name: "Anjali",
// }
// // o1.name= "Raj"

// const o2 = o1;
// o2.name = "Raj"

// console.log(o1);
// console.log(o2);


// Primitive 

// let u1 = "Anjali";
// let u2 = u1;
// u2 = "Raj";

// console.log(u1);
// console.log(u2);


// const obj = {
//     id: '1234',
//     name: 'Anjali',
//     3: 'Three',
// }
// const arr = ["Apple", "Banana", "Orange", "Mango"];

// for(let i = 0;i< 4 ;i++){
//     console.log(obj[i]);
// }
// for(let i = 0;i< 4 ;i++){
//     console.log(arr[i]);
// }
//   In loop is used of object and Of loop is used for array.

// for(let i in arr){
//     console.log(i);
// }

// for(let i of arr){
//     console.log(i);
// }



// console.dir(document)
// const div = document.getElementsByTagName('div')
// console.dir(div[0])

// div[0].innerText='DOM'

// const d1 = document.getElementsByClassName('container');
// console.dir(d1);
// // d1[0].style = "color: blue"
// d1[0].style.color = 'blue'
// d1[0].style.backgroundColor = 'red'


// const d1 = document.querySelector(
//     'div'
// )
// d1.style.color = 'red';

const d1 = document.querySelectorAll(
    'div'
)
d1[2].style.color = 'red';