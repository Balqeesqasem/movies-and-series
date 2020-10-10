import React, { useEffect, useState } from 'react';
// import Pop from 'components/popup.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './movies.css';
import './style.css';





 function Recently(props)  {

  const [active,setActive] =  useState(true);
     const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

useEffect(() =>{
    let favList=JSON.parse(localStorage.getItem('myFavMov')) || [];
   props.setFav(favList);
},[])


function favDesplay(){
  if (active === true){
    setActive(false);
    document.getElementById('favTrue').style.display='none';

  }
 else{
    setActive(true);
    document.getElementById('favTrue').style.display='block';

  }
}

 
   return (
 <>

<p className="viewd">Recently Viewd shows <i onClick={favDesplay} className="fas fa-angle-down"></i></p>

<div id="favTrue">

<Carousel responsive={responsive} >
        {props.fav.map((res,i)=>{
        return(
             <div key={`${i}-res`} className="favList">
            <img className="favImg" src={res}/>
              </div>
        )
    })}
       </Carousel>
</div>
  
    </>
     
     
   
   )
 }
     
     
  


export default Recently; 