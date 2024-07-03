let parent = document.getElementById('root');

// const list = document.createElement("ul");

// // list.setAttribute(`
// //     width:400px;
// //     display:block;
// //     padding:24px;
// //      background-color: yello;
// //      margin :48 px auto;
// //      `
// // )

// list.setAttribute("style","width:400px; display:block; padding:24px; background-color:yello; margin :48 px auto;")

// const listItem1 = document.createElement('li');
// list.setAttribute("style","margin:12px auto; color:brown")
// list.innerText= "item 1";
// list.appendChild(listItem1);

// const listItem2 = document.createElement('li');
// list.setAttribute("style","margin:12px auto; color:brown")
// list.innerText= "item 2";
// list.appendChild(listItem2);

// parent.appendChild(list);


// const listItem1 = React.createElement("li",{},"Item1");
// const listItem2 = React.createElement("li",{},"Item2");
// const list = React.createElement("ul",{},[listItem1,listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list)


// const d1 = document.createElement("div");
// console.log(d1);
// console.dir(d1);

// const d2 = document.createElement("div",{},"hello");
// console.dir(d2);


 // ===================== React with babbel =======================
// const listItem1 = <li>Item 1</li>
// const list = <ul>{listItem1}</ul>

// const root = ReactDOM.createRoot(parent);
// root.render(list);

// ==================== React JSX ====================


const root = ReactDOM.createRoot(parent);
const divHello = <h3>Hello</h3>;
const textForm = () =>{ return <h3>Form</h3>;}
const divReact =() => <h3>React</h3>;

const container = (
    <div>{divHello}{textForm()}{divReact()}</div>
);

root.render(container)