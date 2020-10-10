import React,{useState} from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home.js';
import Details from './components/details.js'

function App() {

  const [search,setSearch]= useState('Dark');
  const [fullDetails,setFullDetails] = useState({});
 
  return (
    <>
        <Header setSearch={setSearch}/>
  <Route path="/" exact><Home  setFullDetails={setFullDetails} search={search}/></Route>
        <Route path="/Details" exact ><Details  fullDetails={fullDetails} /></Route>
        
        </>
  );
}

export default App;
