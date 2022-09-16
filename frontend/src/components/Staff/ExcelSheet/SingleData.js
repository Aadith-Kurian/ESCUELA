import React from 'react'
import '../ExcelSheet/styles.css'
const SingleData = ({m}) => {
  return (
    <>    
    {Object.values(m).map((i)=>(
    <tr>
      {/* {i.map((o)=>( */}
        <td>{i[0].v}</td> 
        <td>{i[1].v}</td>   
        <td>{i[2].v}</td>   
        <td>{i[3].v}</td>   
        <td>{i[4].v}</td>   
        <td>{i[5].v}</td>   
        <td>{i[6].v}</td>
    </tr>

    ))}      
    </>
  )
}

export default SingleData;