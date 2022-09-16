import { useContext } from 'react';
import {React,useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {userContext} from "../../../App"
import '../styles.css';
import './login.css'

const Login = () => {

  const {state,dispatch} = useContext(userContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const loginUser =async (e)=>{
    e.preventDefault();
    const res =await  fetch('/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const data = await res.json();

    if(res.status === 400 || !data){
      window.alert('Invalid Credentials');
    }else{
      dispatch({type:"USER",payload:true});
      window.alert('Login Successful');
      history.push('/');
    }
 }

  return (
   <>
     <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div className='log-component'>
<h4>Login</h4>
    <form method='POST'>
        <input
            onChange={(e)=>setEmail(e.target.value)}
            className='form_field'
            placeholder="Enter Mail"
            type="email"
            value={email}
            name="mail"
            required
        />
        <input
            onChange={(e) => setPassword(e.target.value)}
            className='form_field'
            placeholder="Enter Password"
            type="password"
            value={password}
            name="password"
            required
        />
          <div>
            <button className='buttons btn btn-danger loginbutton' value="login" onClick={loginUser}>Login</button>
          </div>
    </form>
    </div>
   </>
  )
}

export default Login