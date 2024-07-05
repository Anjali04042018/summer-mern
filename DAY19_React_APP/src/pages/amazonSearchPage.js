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


import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categorybar";


const SearchPage = (props) => {
    const {categories,searchText, setSearchText} = props;
    const [products, setProducts] = useState([]);
    // console.log("initially: ", searchText);

    // const handleSearch = (e) => {
    //     const val = e.target.value;
    //     // searchText = val;
    //     setSearchText(val);
    // };

    // async function getData() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setProducts(data.products);
    // }

    async function getData() {

        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
       
    }
    useEffect (() =>{
        getData();

    }, [searchText])

    return (
        <>
        <Navbar setSearchText={setSearchText}/>
        <CategoryBar categories={categories} />
        <div>
            
            {products.map((elem) => {
                return <p key={elem.id}>{elem.title}</p>;
            })}
        </div>

        {/* <Revision/> */}
        </>
    );
};

export default SearchPage;