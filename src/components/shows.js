import React, { useState , lazy ,Suspense} from 'react';
// import List from './list.js';
import './style.css';
const List = lazy(()=> import ('./list.js'));

function Shows(props) {

  const [type,setType]= useState('movie');
  
  return (
    <>
    <div className="buttonDiv" >
    <button className={`showButton ${type=== 'movie' ? 'borderClass' : null}`} onClick={e =>setType('movie')}> Movies</button>
    <button className={`showButton ${type=== 'series' ? 'borderClass' : null}`}  onClick={e =>setType('series')}> Series</button>
    </div>
    <Suspense fallback={<div className="load">...Loading</div>}>
     <List fav={props.fav} setFav={props.setFav} type={type} search={props.search}  setFullDetails={props.setFullDetails}/>
    </Suspense>
    </>
  );
}

export default Shows; 