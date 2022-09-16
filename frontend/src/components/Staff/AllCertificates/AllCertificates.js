import React, { useState,useEffect } from 'react'
import './styles.css'
const AllCertificates = () => {
  const[allCert,setAllCert] = useState([]);
  const[loading,setLoading] = useState(false);
  const callAllCertificates = async () =>{
    try {
      const res = await fetch('/getAllData',{
        method:"GET",
        headers:{
          Accept:"appllication/json",
          "Content-Type":"application/json"
        },
        credentials:"include"        
      })
      const info = await res.json();
      setAllCert(info);
      console.log(info);
      if(!res.status===200){
        const error = new Error (res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }
  if(loading)
  <p>Loading...</p>
  useEffect (()=>{
    setLoading(true);
    callAllCertificates();
    setLoading(false);
  },[])
  return (
    <div className='all-certificate-component'>
      
        {allCert && allCert.map((cert)=>(
          <ul>
          <li><h2>{cert.name}</h2></li>
          <div className='all-data'>
          {cert.certificates.map((c) =>(
            <div className='all-single-certificates'>
              <h5>{c.title}</h5>
              <img src={c.selectedFile} alt=""/>
            </div>
          ))}            
          </div>
          <hr></hr>
          </ul>
        ))}
    </div>
  )
}

export default AllCertificates