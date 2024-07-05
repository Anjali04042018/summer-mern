// import {IoSearchSharp} from "react-icons/io5";

// import ProductInfoCard from "../components/productInfoCard";

// const categories = [
//     "Fresh",
//     "Amazon Mini TV",
//     "sell",
//     "Best Sellers",
//     "Mobile",
//     "fashion",
//     "Electronics",
//     "Customer Services",
//     "Amazon Pay"
// ]

// const productInfoCards = [
//     {
//         id:1,
//         title:"Revamp",
//         products:[
//         {
//             title:"cushion",
//             img:"https://www.abc.com",
//         },
//         {
//             title:"Vase",
//             img:"https://www.abc.com",
//         }
//     ]
//     }
// ]
// const HomePage = () => {
//     return (
//         <div className="homepage-root-container">
//             <nav className="homepage-nav">
//                 <h4>Amazon.in</h4>
//                 <p>Address:
//                     <br />LPU University
//                 </p>
//                 <div className="search-container">
//                     <select />
//                     <input />
//                     <button >
//                         <IoSearchSharp/>
//                     </button>

//                 </div>
//                 <h5>Profile</h5>
//                 <h5>Cart</h5>
//             </nav>
//             <div className="homepage-category-bar">
//                 <button>All</button>
//                 <div className="category-items">
//                     {categories.map((elem) => {
//                         return <p>{elem}</p>
//                     })}


//                 </div>
//             </div>
//             <div className="homapage-body">
//                 <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg"
//                     className="causoal-image" />
//                 <div className="products-cart-containers">
//                    {productInfoCards.map((elem) =>{
//                     return <ProductInfoCard />
//                    })}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;


import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductInfoCard from "../components/productInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categorybar";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
    const { productInfoCards, categories ,searchText, } = props;
    const navigate = useNavigate();

    const openSearchPage = () =>{
        navigate("/search")
    }
    return (
        <div className="homepage-root-container">
            <Navbar searchText={searchText} openSearchPage={openSearchPage}/>
            <CategoryBar categories={categories} />
            <div className="homepage-body">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                    className="carousal-image"
                />
                <div className="products-cards-container">
                    {productInfoCards.map((elem) => {
                        return <ProductInfoCard data={elem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;