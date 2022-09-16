
import {React,useState,useEffect} from 'react';
import './styles.css'
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [userName,setUserName] = useState('');
  const history = useHistory();
  const [show ,setShow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    history.push('/input')
  }
  function openSheet()
  {
    history.push('/sheet',{data:"agnes"});

  }
  const userHomePage = async () =>{
    try{
      const res =await fetch('/getData',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

      if(!res.status===200){
        const error = new Error (res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
    }
  }
useEffect(() => {
  userHomePage();
}, [])
  return (
    <div>
<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
<h1 style={{color:"#0B4524"}}>{userName}</h1>
  <h1 style={{color:"#0B4524"}}>{show ? "Welcome to Escuela portal":'PLease log in to your Escuela Portal'}</h1>
  {show ? (
    <>
    <button type="button" class="btn btn-outline-success btn btn-lg " onClick={openModal}>{show?"Add certificate":""}</button>
    <button type="button" className='btn btn-outline-primary btn-lg' onClick={openSheet}>{show ? "Check Marks":""}</button>
    </>
  ):null}
</div>
    </div>
  )
}

export default Home