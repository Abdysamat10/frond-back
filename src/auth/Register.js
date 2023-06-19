import React, { useState } from  'react';
import {useDispatch} from 'react-redux';
import { signInUser } from '../redux/authSlice';

const Register = () =>{
const [name, setname]= useState("");
const [email, setemail]= useState("");
const [password, setpassword]= useState("");


const dispatch = useDispatch();
const registerHandler = ()=>{
    console.log(name,email,password)
    dispatch(signInUser({name,email,password}))
}   
   
    return (
        <div>
            <div className='flex flex-column align-items-center'>
            <h3>Register</h3>
            <label htmlFor=''>Name</label>
            <input type="text" placeholder='Name'  value ={name} on onChange={(e) => setname(e.target.value)}/>
            <label htmlFor=''>Email</label>
            <input type="email" placeholder='Email'value ={email} on onChange={(e) => setemail(e.target.value)} />
            <label htmlFor=''>Password</label>
            <input type="password" placeholder='Password'value ={password} on onChange={(e) => setpassword(e.target.value)} />
            <button onClick={registerHandler} className='mt-3'>Register</button>

            </div>
                
        </div>
    )
}

export default Register