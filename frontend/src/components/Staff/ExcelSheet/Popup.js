import React from 'react'
import { useHistory} from 'react-router-dom';

const Popup = () => {
    const history = useHistory();

    const yesBUtton = ()=>{
        let link="";
        link += prompt("Enter the Goggle sheets link : ");
        console.log(link);
        history.push('/sheet',{data:link})
       }
       const noButton = ()=>{
           let nope = "agnes";
           history.push('/sheet',{data:nope});
       }
  return (
    <div className="popup-component">
              <h2>Would you like to add any sheets ?</h2>
            <button className='btn btn-primary yesNoButtons' onClick={yesBUtton}>YES</button>
            <button onClick={noButton} className='btn btn-danger yesNoButtons'>NO</button>
    </div>
  )
}

export default Popup