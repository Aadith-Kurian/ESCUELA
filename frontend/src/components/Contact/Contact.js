import {React,useState,useEffect} from 'react';
import './styles.css'

const Contact = () => {
  const [userData,setUserData] = useState({
    name:'',
    email:'',
    message:''
  });

  const userContact = async () =>{
    try{
      const res =await fetch('/getData',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
      });
      const data = await res.json();
      console.log(data);
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone});

      if(!res.status===200){
        const error = new Error (res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
     

    }
    }
    useEffect(() => {
  userContact();
}, [])

// 
const handleInputs =(e)=>{
const name = e.target.name;
const value = e.target.value;
setUserData({...userData,[name]:value});
}

const contactForm = async (e)=>{
  e.preventDefault();
  const {name,email,phone,message} = userData;
  const res = fetch('/contact',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,phone,message})
  })
  const data = await res.json();
  // console.log(data);
  if( res.status == 201 ||!data){
    window.alert("Please fill all fields");
  }else{
    window.alert("Message sent");
    setUserData({...userData,message:""});
  }

}


  return (
    <>
    <div className='contact-component'> 
       <h3 className='heading'>Contact Form</h3>
    <form method='POST'>
    <div className="mb-3">
        <label htmlFor="name" for="exampleInputEmail1" className="form-label">Name</label>
         <input type="text" className="form-control" id="name" name="name" autoComplete="off" placeholder="Enter userName" value={userData.name} onChange={handleInputs} aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" for="exampleInputEmail1" className="form-label">Email</label>
         <input type="email" className="form-control" id="email" name="email" autoComplete="off" placeholder="Enter email"  value={userData.email} onChange={handleInputs} aria-describedby="emailHelp" />
       </div>
       <div className="mb-3">
         <label htmlFor="phone" for="exampleInputEmail1" className="form-label">Phone</label>
         <input type="number" className="form-control" id="phone" name="phone" autoComplete="off" placeholder="Enter phone " value={userData.phone} onChange={handleInputs} aria-describedby="emailHelp" />
        </div>

          <div className="text-field">
            <textarea placeholder="Message" name="message" value={userData.message} onChange={handleInputs}></textarea>
          </div>

      <button type="submit" name="submit" id="submit" value="submit" onClick={contactForm} class="btn btn-primary">Submit</button>
      </form>      
    </div>

    </>
  )
}

export default Contact