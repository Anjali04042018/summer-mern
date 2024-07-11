import ReactDOM from "react-dom/client";
import "./style.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import SignUp from "./src/pages/signUp";
import AppContext from "./src/context/appContext";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const productInfoCards = [
//     // {
//     //     id: 1,
//     //     title: "Revamp",
//     //     products: [
//     //         {
//     //             title: "Air Conditioners",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Refrigerators",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Microwaves",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Washing Machines",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//     //         },
//     //     ],
//     // },
//     // {
//     //     id: 2,
//     //     title: "Revamp",
//     //     products: [
//     //         {
//     //             title: "Air Conditioners",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Refrigerators",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Microwaves",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Washing Machines",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//     //         },
//     //     ],
//     // },
//     // {
//     //     id: 3,
//     //     title: "Revamp",
//     //     products: [
//     //         {
//     //             title: "Air Conditioners",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Refrigerators",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Microwaves",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Washing Machines",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//     //         },
//     //     ],
//     // },
//     // {
//     //     id: 4,
//     //     title: "Revamp",
//     //     products: [
//     //         {
//     //             title: "Air Conditioners",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Refrigerators",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Microwaves",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
//     //         },
//     //         {
//     //             title: "Washing Machines",
//     //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
//     //         },
//     //     ],
//     // },
// ];

const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];


const App = () => {
    const [searchText, setSearchText] = useState("");
    const [cart, setCart] = useState([]);
    const [loggedInUser,setLoggedInUser] = useState([null]);
    const router = createBrowserRouter([
        {
            path: '/',
            element:loggedInUser ? <SignUp/> : < HomePage />
        },
        {
            path:'/search',
            element:loggedInUser ? <SignUp/> : <SearchPage />
        },
        {
        path:"/search/:id",
        element:loggedInUser ? <SignUp/> : <ProductInfo/>
        },
        {
            path:"/signup",
            element:loggedInUser ? <HomePage/> :<SignUp/>
        },
        {
            path:"/login",
            element:loggedInUser ? <HomePage/> :<login/>
        },
    ]);

const addToCart = (elem) => {
    console.log(elem);
    const isPresent = cart.findIndex((cI) => cI.id === elem.id);
    if (isPresent === -1) {
        const newCart = [...cart];
        newCart.push({
            title: elem.title,
            id: elem.id,
            price: elem.price,
            count: 1,
        });
        setCart(newCart);
    } else {
        const newCart = cart.map((cartItem) => {
            if (cartItem.id === elem.id) {
                const newCartItem = { ...cartItem };
                newCartItem.count = newCartItem.count + 1;
                return newCartItem;
            } else return cartItem;
        });
        setCart(newCart);
    }
};

const appLogin=(user) =>{
    setLoggedInUser(user);
}


    const contextValues = {
        loggedInUser,
        cart,
        addToCart,
        categories,
        searchText,
        setSearchText,
        appLogin,
    }
    
        // <div>
        //     <HomePage 
        //         productInfoCards={productInfoCards} 
        //         categories={categories}
        //     />
        //     <SearchPage categories={categories} />
        // </div>

        return(
            <AppContext.Provider value = {contextValues}>
            <RouterProvider router = {router}/>
            </AppContext.Provider>
            
        )                                                      
    
};

root.render(<App/>);