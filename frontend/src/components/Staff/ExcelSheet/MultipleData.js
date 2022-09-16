import React from 'react'
import './styles.css'
import SingleData from './SingleData'
const MultipleData = ({mark,coluum}) => {
  return (
      <>

      {/*  */}
        <div className='container'>
        <div className='table-component table'>
                {/* {endpt} */}
            <table className='table tables'>
                <tbody  className='tables_row'>
                <tr>
                    {coluum && coluum.map((c)=>(
                        <th>{c.label}</th>
                    ))}
                </tr>
                {mark && mark.map(((m)=>
                    <SingleData m={m}/>  
                ))}
                </tbody>

            </table>
            </div>
    </div>

    </>
  )
}

export default MultipleData