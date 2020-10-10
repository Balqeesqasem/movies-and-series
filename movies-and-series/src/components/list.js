import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import Popup from './popup';
import './movies.css';
import './style.css';
require('dotenv').config();


function List(props)  {

  const [data, setData] = useState([{
    "Title": "Dark",
    "Year": "2017–2020",
    "imdbID": "tt5753856",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"}]);
    
    
    useEffect(() => {
      (async function fetchData() {
        let url = `http://www.omdbapi.com/?apikey=417aa991&s=${props.search}&type=${props.type}`;
        let result = await superagent(url); 
        let newData=[];
        if(result.body.Error){
        newData[0] ={Title:'', Poster:"https://i.pinimg.com/474x/1b/e7/2f/1be72fad194cff9d632b1a9c6adc34f6.jpg" , imdbID: '125488'};
      }
      else{
        newData= result.body.Search;
      }
      setData(newData);    
    })()
  },[props.search,props.type])



 function popFunc(i,poster){
   if( document.getElementsByClassName('block').length){
     document.getElementsByClassName('cardUl')[0].className = '';
     document.getElementsByClassName('block')[0].className='none';
    }
    document.getElementById(i).className='block';
    if(!props.fav.includes(poster)){
      props.setFav([...props.fav,poster]);
      localStorage.setItem('myFavMov', JSON.stringify(props.fav));
    }
    document.getElementById(`${i}-cardUl`).className='cardUl';
   }


   return (
 
 <>

<div className="moviesDiv">
      {data.map((res,i) =>{
       return (
   
         <div className="card" key={`${i}-ms`} >
         <ul id={`${i}-cardUl`} onClick={e=> popFunc(i,res.Poster)}>
          <div className="titleOfMovie" >
          <p>{res.Title}</p>
          </div>            
             <img  src={res.Poster}/>
        </ul>
      
        <div className="none" id={i}>
       
            <Popup  fullDetails={props.fullDetails}   setFullDetails={props.setFullDetails} imdbID={res.imdbID}/>
             </div>
         </div>


        )
      })}
     </div>
 </>

     
   )
  
}

export default List; 