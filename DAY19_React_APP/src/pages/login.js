import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const Login = () => {
    const { login } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        let validate1 = email.length>4;
        let validate2 = password.length>=8;
        if (validate1 && validate2) {
            login({ email, password });
        } else if(!validate1) {
            alert("Incorrect Email");
        }else{
            alert("Password must be greater than 7 character");
        }
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate}>Login</button>
        </div>
    );
};

export default Login;