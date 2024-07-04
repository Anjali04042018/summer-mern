// import CategoryBar from "../components/categorybar";
// import Navbar from "../components/navbar";

// const SearchPage = (props) => {
//     const { categories } = props;

//     const customStyles = {
//         padding: "48px",
//         textAlign: "center",
//         backgroundColor: "Yellow",
//     };

//     let searchText = "";
//     console.log("initially: ", searchText);

//     const handleSearch = (e) => {
//         const val = e.target.value;
//         console.log(val);
//     };

//     return (
//         <div>
//             <Navbar />
//             <CategoryBar categories={categories} />
//             <div style={customStyles}>
//                 <input type="text" onChange={handleSearch} />
//             </div>
//         </div>
//     );
// };

// export default SearchPage;


import { useState } from "react";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categorybar";

const SearchPage = (props) => {
    const {categories} = props;
    // let searchText = "";
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    // console.log("initially: ", searchText);

    const handleSearch = (e) => {
        const val = e.target.value;
        // searchText = val;
        setSearchText(val);
    };

    // async function getData() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setProducts(data.products);
    // }

    async function getData(e) {
        const val = e.target.value;
        const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("API Called");
    }

    return (
        <>
        <Navbar getData={getData}/>
        <CategoryBar categories={categories} />
        <div>
            
            {products.map((elem) => {
                return <p key={elem.id}>{elem.title}</p>;
            })}
        </div>
        
        </>
    );
};

export default SearchPage;