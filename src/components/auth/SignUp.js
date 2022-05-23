import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const SignUp = () =>{
    const navigate = useNavigate();

    const [first_name , setFirst_name] = useState('');
    const [last_name , setLast_name] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signup_values = async () =>{
        // console.log(email, ' ', password);

        let result =await  fetch('http://localhost:8080/user/register',{
            method: 'post',
            body: JSON.stringify({first_name,last_name,email, password}),
            headers:{
                'content-Type' : 'application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate('/login');
        }
    }
    return <div className="main_section">
        <h1>Sign Up</h1>

        <input type="text" placeholder="first_name" onChange={(e) => setFirst_name(e.target.value) } />
        
        <input type="text" placeholder="last_name" onChange={(e) => setLast_name(e.target.value) } />
        
        <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value) } />

        <input type="password" placeholder="enter pass" onChange={(e)=> setPassword(e.target.value) } />

        <button type="button" className="signup_btn" onClick={signup_values}>Sign Up</button>
    </div>
}
export default SignUp;