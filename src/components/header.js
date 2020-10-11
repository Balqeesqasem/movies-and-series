import React from 'react';
import Search from './search.js';
import {Link} from 'react-router-dom'
import './style.css';


function Header(props) {
 
  return (
    <>
    <div className="headerDisplay">
     <Link className="link" to= '/'> <p className="headTittle">Movies<span className="db">DB</span> </p></Link>
    <Search setSearch={props.setSearch}/>  
    </div>
     
    </>
  );
}

export default Header;