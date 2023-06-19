import './App.css';
import {Login} from './auth/Login';
import {Register} from './auth/Register';
import  React,{ useState } from 'react';


const App = ()  => {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("")
const handlerLogin = () =>{
console.log(email,password);
}



return(
    <form>
        
        <h3>Login System</h3>
        <input type='emai' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input className="my-3" type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handlerLogin}>Login</button>
    </form>
)

}

  
   



export default App;
