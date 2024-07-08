
import Navbar from "../components/navbar";
import CategoryBar from "../components/categorybar";
import { useNavigate } from "react-router-dom";
import ProductInfoCard from "../components/ProductInfoCard";
import useGetProducts from "../hooks/useGetProducets";


const HomePage = () => {
    const navigate = useNavigate();

    const openSearchPage = () =>{
        navigate("/search")
    }

    const products = useGetProducts();
    let cnt =0;
    const reqLength = 16;
    const filteredProducts = products.filter((elem,idx) =>{
        if(Math.random() >= 0.5 || reqLength - cnt === products.length - idx){
            if(cnt < reqLength){
                cnt++;
                return true;
            }else{
                return false;
            }
            
        }
        else{
            return false;
        }

    });

    const dummy = [0,1,2,3];
    return (
        <div className="homepage-root-container">
            <Navbar openSearchPage={openSearchPage}/>
            <CategoryBar  />
            <div className="homepage-body">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                    className="carousal-image"
                />
                <div className="products-cards-container">
                    {/* {productInfoCards.map((elem) => {
                        return <ProductInfoCard data={elem}/>
                    })} */}
                    {dummy.map((elem) =>{
                        return <ProductInfoCard data ={filteredProducts.slice(elem * 4, elem* 4 + 4)}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;