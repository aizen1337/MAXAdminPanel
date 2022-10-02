import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../components/context/AuthContext";
const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    const {dispatch} = useContext(AuthContext)
    const handleLogin = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch({type:"LOGIN", payload:user})
                    navigation("/");
                })
                .catch((error) => {
                    console.log(error)
                    setError(true)
                    // ..
        });
    }
        return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" name="" id="" onChange={ e => setEmail(e.target.value) } placeholder="Login or e-mail"/>
                <input type="password" name="" id="" onChange={ e => setPassword(e.target.value) } placeholder="Your password"/>
                <button type="submit">Login</button>
                {error && <span> Wrong email or password! </span>}
            </form>
        </div>
      );
}
 
export default Login;