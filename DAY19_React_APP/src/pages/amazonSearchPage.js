
import { useContext } from "react";
import CategoryBar from "../components/categorybar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducets";
import AppContext from "../context/appContext";

const SearchPage = (props) => {
   
    const { categories } = props;
    const products = useGetProducts();
    return (
        <>
            <Navbar  />
            <CategoryBar categories= {categories} />
            <div>
                {products.map((elem) => {
                    return <p key={elem.id}>{elem.title}</p>;
                })}
            </div>
        </>
    );
};

export default SearchPage;