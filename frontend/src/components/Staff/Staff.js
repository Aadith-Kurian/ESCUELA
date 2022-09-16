import React,{useState} from 'react'
import '../Navbar/styles.css'
import Modal from 'react-modal';
import { useHistory} from 'react-router-dom';
import './staff.css';
const Staff = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const history = useHistory();
    function openModal() {
      history.push("/upload");
    }
    function closeModal() {
      setIsOpen(false);
    }
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        position:'absolute',
        transform: 'translate(-50%, -50%)',
        textAlign:'center',
        backgroundColor:'#DAFAE5',
        height:'250px',
        width:'600px',
        border:'1px solid #0b4525'
      },  
    };
    const extraButton = ()=>{
        history.push("/getAllUser")
    }

  return (
    <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content">
            <h1>GOOD DAY</h1>
            <h2>For Mark, Click below</h2>
            <button className='btn btn-primary'onClick={openModal}>Academic Details</button>
            <h2>For Certificates, Click below</h2>
            <button className='btn btn-secondary' onClick={extraButton}>Extra Curricular</button>
        </div>
    </div>
  )
}

export default Staff