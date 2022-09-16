
import React,{useEffect, useState} from 'react'
import './styles.css'
import MultipleData from './MultipleData'
import { useHistory } from 'react-router-dom';
const ExcelSheet = () => {
    let rows,cols,sid;
    const [loading, setLoading] = useState(false); 
    const [coluum,setColumn] = useState([]);
    const [mark,setMark] = useState([]);
    const history = useHistory();
  let link = history.location.state.data;
    console.log(link)
   
    if(link !=="agnes")
    {
      link = history.location.state.data;
      sid = link.slice(39,83);
    }
    else{
      sid = '1ehq3HdmLc3pYj4HF0W5rQh8UafY1_AbMxHmt_HxVXcE';
    }
    const url = 'https://docs.google.com/spreadsheets/d/';
 const query = `/gviz/tq?`
    let endpt = `${url}${sid}${query}`;
    useEffect(()=>{
        setLoading(true);
    fetch(endpt)
    .then(response=>response.text())
    .then(data=>{
        const hold = data.substring(47).slice(0,-2);
        const jsonFormat = JSON.parse(hold);
        cols = jsonFormat.table.cols;
        setColumn(cols);
        rows = jsonFormat.table.rows;
        setMark(rows)          
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        setLoading(false);
    })
    },[]);
  return (
      <>
        <div>
          <MultipleData coluum={coluum} mark={mark}/>
        </div>
      </>

  )
}

export default ExcelSheet