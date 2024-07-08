
import ReactDOM from "react-dom/client";
import "./style.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import AppContext from "./src/context/appContext";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const productInfoCards = [
    // {
    //     id: 1,
    //     title: "Revamp",
    //     products: [
    //         {
    //             title: "Air Conditioners",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Refrigerators",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Microwaves",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Washing Machines",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
    //         },
    //     ],
    // },
    // {
    //     id: 2,
    //     title: "Revamp",
    //     products: [
    //         {
    //             title: "Air Conditioners",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Refrigerators",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Microwaves",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Washing Machines",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
    //         },
    //     ],
    // },
    // {
    //     id: 3,
    //     title: "Revamp",
    //     products: [
    //         {
    //             title: "Air Conditioners",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Refrigerators",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Microwaves",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Washing Machines",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
    //         },
    //     ],
    // },
    // {
    //     id: 4,
    //     title: "Revamp",
    //     products: [
    //         {
    //             title: "Air Conditioners",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Refrigerators",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Microwaves",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
    //         },
    //         {
    //             title: "Washing Machines",
    //             img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
    //         },
    //     ],
    // },
];

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
    const router = createBrowserRouter([
        {
            path: '/',
            element:<HomePage />
        },
        {
            path:'/search',
            element: <SearchPage />
        },
        {
        path:"/search/:id",
        element: <ProductInfo/>
        }
    ]);

    const contextValues = {
        categories,
        searchText,
        setSearchText
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

root.render(<App />);