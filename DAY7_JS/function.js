// console.log("Start")
// function Abc(x){
//     console.log(x*2);
//     temp (x/2);
// }
// Abc(8);
// console.log("Mid");

// function temp(x){
//     console.log(x/2);
// }
// console.log("End");


// function xyz(){
//     console.log("Inside XYZ")
//     function temp(x){
//         console.log(x*x);
//     }
//     console.log("End");
//     temp(12);
// }
// console.log("Start")
// xyz();

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', cb);

// function cb(){
//     console.log('Button Clicked');
// }


// const input = document.getElementsByTagName('input')[0];
// input.addEventListener('keyup', cb);

// function cb(event){
//     console.log("Input is " , event.target.value)
// }


// console.log("Start")
// const delay = 1000;

// const cb = () =>{
//     console.log("CB CLicked");
// }
// setTimeout(cb,delay);
// console.log("End")

// console.log("Start")
// setTimeout(() =>{ 
//     console.log("CB Called");

//     setTimeout(() =>{
//         console.log("sIntenal CB Called");
//     },10000);

// },10000);

// console.log("End")

// console.log("Start")
// setTimeout(() =>{
//     console.log("A")
// }, 0);

// console.log("MID");
// function abc(){
//     console.log('B')
// }
// function efg(){
//     console.log("C")
//     setTimeout(() =>{
//         console.log("D")
//     },0);
// }
// setTimeout(abc,0);
// efg();
// console.log("End");


// const pr = fetch('https://api.github.com/users/likbalpande');
// console.log(pr)

// const cb1 = (e) =>{
//     console.log('Fetch +' , e);
//     e.json();
// }
// const cb2 = (e) =>{
//     console.log('Fetch -',e)
// }
// pr.then(cb1).catch(cb2)


// pr.then((res) =>{
//     const pr2 = res.json();+


//     pr2.then((data) =>{
//         console.log(data);
//     })
// }).catch((e) =>{
//     console.log('Fetch -' , e);
// })

const root = document.getElementById('root')
const request = fetch('https://dummyjson.com/products');
request.then((result)=>{
    const convertData = result.json();
    // convertData.then((data) =>{
    //     console.log(data);
    // })

    convertData.then(renderUI);
}).catch((error) =>{
    alert(error)
});

const renderUI = (data) =>{
    const products = data.products;
    for(let i=0;i< products.length;i++){
        // root.append(products[i].title)
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
        <h3> ${products[i].title} </h3>
        <img src="${products[i].thumbnail}>
        <p> ${products[i].price}</p>
        `;
        root.appendChild(card);
}
}