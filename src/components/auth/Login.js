import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const login_values = async () =>{
        // console.log(email, ' ', password);

        let result =await  fetch('http://localhost:8080/user/login',{
            method: 'post',
            body: JSON.stringify({email, password}),
            headers:{
                'content-Type' : 'application/json'
            }
        });
        result = await result.json();
        if(result){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        }
    }
    return <div className="main_section">
        <h1>Sign In</h1>

        <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value) } />

        <input type="password" placeholder="enter pass" onChange={(e)=> setPassword(e.target.value) } />

        <button type="button" className="signup_btn" onClick={login_values}>Sign Up</button>
    </div>
}
export default Login;