import React , {createContext,useReducer} from 'react';
import {initialState,reducer} from './reducer/UseReduer';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Profile from './components/Navbar/Profile/Profile'
import Signup from './components/Navbar/Signup/Signup';
import Login from './components/Navbar/Login/Login';
import Home from './components/Home/Home';
import Email from './components/Email/Email';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Errorpage from './components/ErrorPage/Errorpage';
import Logout from './components/Navbar/Logout/Logout';
import Certifi from './components/Certificates/Certificates';
import ExcelSheet from './components/Staff/ExcelSheet/ExcelSheet';
import Staff from './components/Staff/Staff';
import AllCertificates from './components/Staff/AllCertificates/AllCertificates';
import Input from './components/Input/Input';
import Popup from './components/Staff/ExcelSheet/Popup';
export const userContext = createContext();
const Routing = () =>{
  return (
    <div style={{backgroundColor:"#DAFAE5"}}>
  <Router>
  <Navbar/>
  <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/profile"><Profile/></Route>
        <Route exact path="/certificate"><Certifi/></Route>
        <Route exact path="/register"><Signup /> </Route>
        <Route exact path="/login"><Login /> </Route>
        <Route exact path="/mail"><Email /></Route>
        <Route exact path="/logout"><Logout /></Route>
        <Route exact path="/sheet"><ExcelSheet/></Route>
        <Route exact path="/staff"><Staff/></Route>
        <Route exact path="/getAllUser"><AllCertificates/></Route>
        <Route exact path="/input"><Input/></Route>
        <Route exact path="/upload"><Popup/></Route>
        <Route >
          <Errorpage /> 
        </Route>
  </Switch>
  </Router>
    </div>
)
}

const  App = () =>{
const [state,dispatch] = useReducer(reducer,initialState);
 console.log("Test")

  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
    <Routing />
    </userContext.Provider>
    </> 
  );
}

export default App;
