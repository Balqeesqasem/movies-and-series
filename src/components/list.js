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
     document.getElementsByClassName(' fa-sort-up')[0].className='none';

    }
    document.getElementById(i).className='block';
    document.getElementById(`${i}-cardUl`).className='cardUl';
    document.getElementById(`${i}-arrow`).className='fas fa-sort-up';

    if(!props.fav.includes(poster)){
      props.setFav([...props.fav,poster]);
      localStorage.setItem('myFavMov', JSON.stringify(props.fav));
    }
    // console.log(document.getElementById(`${i}-cardUl`).getBoundingClientRect() ,'hiiiiii');
    // console.log(document.getElementById(`${i}-cardUl`).getBoundingClientRect().height ,'hiiiiii');
    let top=document.getElementById(`${i}-cardUl`).getBoundingClientRect().height;
    let count =1;
    let ix=i;
    // console.log(i , 'iiiiiiiiiiii' , ix,'ixxxxxxxxxx');
    if(ix === 5){
      count++;
    }
    else{
      while(ix/5 >=1 && ix !== 0 ){
        if(ix === 5){
          break;
        }
        // console.log(count ,'hahhaahhahhhah', ix);
         count++;
         ix= ix-(ix-5);  
      }
    }
    top = (top+40)*count;
    // console.log(top , 'tooooooop ' , count , 'cooooont' , ix);
    document.getElementsByClassName('block')[0].style.top= `${top}px`;
   }


   return (
 
 <>

<div className="moviesDiv">
      {data.map((res,i) =>{

       return (
   
         <div className="card" key={`${i}-ms`} >
            <span className="arrowTest">
             <i id={`${i}-arrow`} className="none"></i>

            </span>
         <ul id={`${i}-cardUl`} onClick={e=> popFunc(i,res.Poster)}>
          <div className="titleOfMovie" >
          <p>{res.Title}</p>
          </div>            
             <img  alt="poster" src={res.Poster}/>
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