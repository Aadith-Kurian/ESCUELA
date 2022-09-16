import {React,useState,useEffect} from 'react'
import emailjs from 'emailjs-com';
import '../Navbar/styles.css';

const Email = () => {
  const [userData,setUserData] = useState({});
  const fetchData = async () =>{
    try{
      const res =await fetch('/profile',{
          method:"GET",
          headers:{
            Accept:"appllication/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
      });
      const data = await res.json();
      // console.log(data);
      setUserData(data);
      if(!res.status===200){
        const error = new Error (res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
    }
  }
useEffect(() => {
  fetchData();
}, [])
const [data, setData] = useState({
  name:'',
  subject: '',
  email: '',
  regno: '',
  dept: '',
  message:'',
})
const submitHandler = (e) => {
  e.preventDefault();
  console.log(data);
emailjs.sendForm('service_dp542lf','template_vadbspa',e.target,'NdMVn0MMJ2NQN5wCC')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
}
  return (
    <>
 <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
<form onSubmit={submitHandler} className="email-component">
    <h2 className='heading'>Email</h2>
      <input className='form_field' placeholder='Name' type='text' value={userData.name} name='name' />
      <input  className='form_field' placeholder='Subject'  type="text" name="subject"/>
      <input  className='form_field'  placeholder='Email' type="email" value={userData.email}  name="email"/>
      <input  className='form_field'  placeholder='Number' type="number" name="regno" value={userData.regno} />
      <input  className='form_field'  placeholder='Department' type="text" name="dept" value={userData.dept}/>
      <textarea className='form_field' name="message" placeholder='Message' id=""></textarea>
   <button className='btn btn-success email-form emailbutton' type='submit'>Send</button>
</form>

    </>
  )
}
export default Email;