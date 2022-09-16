import React, { useEffect, useState } from 'react'
import './styles.css'
const Certificates = () => {
  const [data,setData] = useState([]);
  const [reset,setReset] = useState(false);
  let cert;
  const callCertificate = async ()=>{
    try {
      const res = await fetch('/getData',{
        method:"GET",
        headers:{
          Accept:"appllication/json",
          "Content-Type":"application/json"
        },
        credentials:"include" 
      });
      cert = await res.json();
      setData(cert.certificates);

      setReset(false)
    } catch (error) {
      console.log(error);
    }
  } 
if(reset)
  <p>Loading...</p>
  useEffect(()=>{
    setReset(true)
    callCertificate ();
  },[])
  return (
    <div className='certificate-component'>
        <div className='cards-field'>
      {data && data.map((m)=>(
        <>
        <div className='single-field'>
          <h5>{m.title}</h5>
          <img src={m.selectedFile} alt=""/>
        </div>
        </>
      ))}
      </div>

    </div>
  )
}
export default Certificates