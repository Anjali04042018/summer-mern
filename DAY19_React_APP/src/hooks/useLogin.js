import { useContext } from "react";
import AppContext from "../context/appContext";

const useLogin = () => {

    const {appLogin} = useContext(AppContext)
    const login = async ({ email, password }) => {
        try{

            console.log("--Login called --");
    
            const URL = "http://localhost:1400/api/v1/auth/login";
            const OPTIONS = {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            };
    
            const res = await fetch(URL, OPTIONS);
            const data = await res.json();

            

            if(data.status === "success"){
                // alert("Logged IN");
                appLogin(data.data.user);
                localStorage.setItem("authorization", data.data.token);
            } else{
                alert("error", data.message);
            }
        }catch(err){
            alert(err.message);
        }
        };

    return { login };
};

export default useLogin;