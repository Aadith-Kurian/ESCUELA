import {React,useState,useEffect} from 'react'
import '../styles.css'
import './profile.css'
const Profile = () => {
  const [userData,setUserData] = useState({});
  const callAboutPage = async () =>{
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
      console.log(data);
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
  callAboutPage();
}, [])
  return (
   <>
     <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
   <div className="profile-component d-flex justify-content-center profile">
     <form method="GET">
        <div className='data-field'>
            <h5>Name : {userData.name}</h5>
            <h5>Email : {userData.email}</h5>
            <h5>Reg No : {userData.regno}</h5>
            <h5>Department : {userData.dept}</h5>
            <h5>Year : {userData.year}</h5>
        </div>
     </form>
   </div>
   
   </>
  )
}

export default Profile;