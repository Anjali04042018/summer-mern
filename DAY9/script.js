// const student = {
//     username: 'Anjali',
//     rollno: '12212408',
//     city: 'Chhapra'

// }

// // console.log(student.username);

// // Using destructure

// const {username, city} = student;
// console.log(username, city)

// // const fruits= ["Apple", "Banana", "Orange"];
// // console.log(fruits[0]);

// // const [i1, i2] = fruits;
// // console.log(i1,i2);


// const student = {
//     username: 'Anjali',
//     rollno: '12212408',
//     city: 'Chhapra',
//     hobbies:['Painting','styling','Drawing']

// }

// const {hobbies} = student;
// hobbies[0] = 'Dancing';

// console.log(student)
// console.log(hobbies);


// rest -> to pack the value
// spread -> to unpack the value

// const s1 = {
//         username: 'Anjali',
//         rollno: '12212408',
//         city: 'Chhapra',
//         hobbies:['Painting','styling','Drawing']
    
//     }

//     const s2 = s1;
//     s2.username = 'Ajay';

//     console.log(s1);
//     console.log(s2);


    //    Spread
// const s1 = {
//     username: 'Anjali',
//     rollno: '12212408',
//     city: 'Chhapra',
//     hobbies:['Painting','styling','Drawing']
// }

// const s2 = {...s1};
// s2.username = 'Ajay';
// s2.hobbies[0] = 'Dancing';

// console.log(s1);
// console.log(s2);


// function sum(...arr){
//     let sum =0;
//     for(let i=0;i< arr.length;i++){
//         sum += arr[i];
//     }
//     console.log("sum is : " , sum);
// }

// function sum(...arr){
//     const ans = arr.reduce((a,b) =>{
//        return a+b;
//     },0);
//     console.log(ans);
// }


// sum();
// sum(10);
// sum(10,20);
// sum(10,20,30);
// sum(2,56,7,3,6)


// async function getData(){
//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json();
//     console.log(data);
// }
// getData();



function calc(s,...arr){
    let ans;
    if(s== 'sum'){
        ans = arr.reduce((a,b) =>a+b);
    }
    else{
        ans = arr.reduce((a,b) =>a*b);
    }
    return ans;
}

const a1 = calc('sum', 10,20,30,40);
const a2 = calc('mul',2,4,5);
const a3 = calc('sum',2,4);

console.log(a1,a2,a3)