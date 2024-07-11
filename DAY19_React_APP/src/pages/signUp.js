import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
    const { signUp } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        let validation1 = email.length>4;
        let validation2 = password.length>=8;
        if (validation1 && validation2) {
            signUp({ email, password });
        } else if(!validation1) {
            alert("Incorrect Email");
        }
        else{
            alert("Password must be greater than 7 character");
        }
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate}>Sign Up</button>
        </div>
    );
};

export default SignUp;