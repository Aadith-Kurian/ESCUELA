import {React,useState} from 'react';
import '../styles.css'
import {Link, useHistory} from 'react-router-dom';
import './signup.css'
const Signup = () => {

  const history = useHistory();

  const [user, setUser] = useState({name:"",email:"",password:"",regno:"",dept:"",year:""})
  let name,value;
  const handleInputs = (e) =>{
      console.log(e);
      name = e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
}

const PostData = async (e) =>{
  e.preventDefault();

  const {name,email,password,regno,dept,year} = user;

  const res = await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,password,regno,dept,year
    })
  });
  const data = await res.json();
    if(res.status=== 422  || !data){
          window.alert("Failed");
    }else{
      window.alert("Registration Success");
      history.push("/login")
    }
}
  return (
    <>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div className='form-component'>
        <h4>Register</h4>
        <form method="POST" > 
            <input
                className='form_field'
                placeholder="Enter Name"
                type="text"
                value={user.name}
                onChange={handleInputs}
                name="name"
            />
            <input
               onChange={handleInputs}
                className='form_field'
                placeholder="Enter Mail"
                type="text"
                value={user.email}
                name="email"
            />
            <input
                onChange={handleInputs}
                className='form_field'
                placeholder="Enter Password"
                type="text"
                value={user.password}
                name="password"
            />
            <input
                onChange={handleInputs}
                className='form_field'
                placeholder="Enter Reg No"
                type="text"
                value={user.regno}
                name="regno"
            />
            <input
               onChange={handleInputs}
                className='form_field'
                placeholder="Enter Dept"
                type="text"
                value={user.dept}
                name="dept"
            />
          <select className='form_field registerdropdown' name='year' onChange={handleInputs} value={user.year || ""}>
            <option value="none" selected  hidden>Select your year</option>
            <option value="1">I year</option>
            <option value="2">II year</option>
            <option value="3">III year</option>
            <option value="4">IV year</option>
          </select>
          <div>
          <button className='buttons btn btn-danger ' value="register" onClick={PostData}>Register</button>
          
          </div>
    
        </form>
    </div>

    
    </>
  )
}

export default Signup