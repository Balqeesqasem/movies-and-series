import React , { useState } from 'react';
import Search from './search.js';
import './style.css';


function Header(props) {
 
  return (
    <>
    <div className="headerDisplay">
      <p className="headTittle">Movies<span className="db">DB</span> </p>
    <Search setSearch={props.setSearch}/>  
    </div>
     
    </>
  );
}

export default Header;