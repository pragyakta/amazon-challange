import React, { useState } from 'react'
import "./Login.css";
import {Link,useNavigate} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const login = (event) =>{
        event.preventDefault(); //stops the refresh

        //login logic

        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            //logged in ,redirect to homepage....
            navigate('/');
        }).catch((e) => alert(e.message));
    };

    const register= (event) =>{
        event.preventDefault();

        //Registor Logic
        auth.createUserWithEmailAndPassword(email,password).then(auth =>{
            
            //Create a user and logged in ,redirect homepage...
            navigate('/');
        }).catch((e) =>alert(e.message));
    };


    return (
        <div className="login">
            <Link to="/">
                <img
                  className="login_logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                  />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to amazon's condition of Use and Sale.
                    Please see our Privacy Notice,our cookies Notice and our interest -Based Ads Notice.              
                </p>
                <button onClick={register} type="submit">Create your Amazon Account</button>
            </div>
        </div>

    );
}

export default Login;
