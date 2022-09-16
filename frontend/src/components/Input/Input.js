import React,{useState,useEffect} from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';

const Input = () => {
    const [data,setData] = useState({title:"",selectedFile:""});
    const history = useHistory();
    const userCertificate = async()=>{
        try{
            const res =await fetch('/getData',{
                method:"GET",
                headers:{
                  "Content-Type":"application/json"
                },
            });
            const cert = await res.json();
            console.log(cert);
            setData({...data,title:cert.title,selectedFile:cert.selectedFile});
            if(!res.status===200)
            {
                const error = new Error (res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
          }
    }
    useEffect(() => {
        userCertificate();
      }, [])
    const putData = async(e)=>{
        e.preventDefault();
        const {title,selectedFile} = data;
        const result = await fetch('/certificate',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              title,selectedFile
            })
        });
        const out = await result.json();
        if(result.status ==201  || !out)
        {
            console.log("Upload success");
            history.push("/certificate");
        }
        else{
            console.log("Upload success");
            setData({...data,
                selectedFile:"",title:""
               
            })
        }
    }
  return (
    <div className='input-component'>
        <form method='POST' className='uploadpicform'>
            <h3 className='inputheading'>CERTIFICATE DETAILS</h3>
        <input
                className='form_field picuploadform'
                placeholder="Enter title"
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}    
                name="title"            
            />
            <div className='file_input picuploadforminput'>
            <FileBase  className="file-upload"
                name="selectedFile" type="file" multiple={false}
                onDone={({ base64 }) => setData({
                    ...data, selectedFile: base64 })} />
            </div>
        <div>
        <button className='buttons btn btn-primary' value="put" onClick={putData}>Post</button>
        </div>
        </form>
    </div>
  )
}

export default Input