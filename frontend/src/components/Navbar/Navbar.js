import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { useContext } from 'react';
export default function Navbar(props) {
    const { state } = useContext(userContext);
    const RenderMenu=()=>{
        if(state){
            return(
                <>
                
                <nav class="navbar navbar-expand-lg py-3 fixed-top" style={{backgroundColor:"#0b4524"}}>
                        <div class="container">
                        <a class="navbar-brand text-light" href="/">ESCUELA</a>
                            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=" text-light" style={{color:"red"}}>↓↓↓</span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-light" to="/profile" >Profile</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/contact" >Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/mail" >Mail</Link></li>
                            
                            <li className="nav-item"><Link className="nav-link text-light" to="/certificate" >Certificate</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/logout" >Logout</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>                    
                </>
            )
        }
        else{
            return(
                <>
                <nav class="navbar py-3 fixed-top navbar-expand-lg" style={{backgroundColor:"#0b4524"}}>
                <div class="container">
                    <li class="navbar-brand text-light" >ESCUELA</li>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=" text-light" style={{color:"red"}}>↓↓↓</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link text-light" to="/register"> Register </Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/login" > Login</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/staff" > Staff</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>                    

                </>
            )
        }
    }

    return (
        <>
        
                        <RenderMenu />
                    
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };
