import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Errorpage = () => {
  return (
    <div className="error-component">
    <h1>404</h1>
    <h1>Page Not Found</h1>
    <h3>Back to home page</h3>
    <Link to="/"><button  className="btn btn-primary ms-5">Home Page</button> </Link>
    </div>
  )
}
export default Errorpage