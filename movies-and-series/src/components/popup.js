import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import superagent from 'superagent';
import './movies.css';
import './style.css';


function Popup(props){
  const [popUp,setPop] = useState({});
  const [rate , setRate] =useState(1)
  const [redirecet, setRedirecet] = useState(false);
  useEffect(() => {
    
    (async function fetchData() {
      let url = `http://www.omdbapi.com/?apikey=417aa991&i=${props.imdbID}`;
      let result = await superagent(url); 
      let movieData=[];
      movieData= result.body;
      setPop(movieData);
          let rateVal= Number(movieData.imdbRating)/2;
          setRate( rateVal);
          }   
        )()
      },[props.imdbID])

    let onSubmit = () => {
        props.setFullDetails(popUp);
        setRedirecet(true);
        
     }

return(
    <>
    <div>
   <i className="fas fa-sort-up"></i>
    <div className="detailsOfPop" style={{ backgroundImage: `url(${popUp.Poster})` }}>

<p className="border">{popUp.Title}</p>
<p className="bio">Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fourth film in the Marvel Cinematic Universe (MCU).</p>

<div className="detailsData">

<div><span className="border">Rating</span> <br/>

<StarRatings
          rating={rate ? rate : 3.5}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
        /></div>
<p><span className="border">Genre</span> <br/><span className="genreLarge">{popUp.Genre ? popUp.Genre.split(',').map((res,i)=>{
 return( <span className="genre" key={`${i}-genre`}>{res}</span>)
}) : null}</span></p>
<p><span className="border">Released</span>  <br/>{popUp.Released}</p>
<p><span className="border">Directors</span>  <br/>{popUp.Director}</p>
<p><span className="border">Language</span>  <br/><span className="langColor">{popUp.Language}</span></p>
</div>

{redirecet ? <Redirect  to="/Details/" /> : null}
<button className="seeMoreBtn" onClick={e => onSubmit()}> More Info</button>
</div>
    </div>

</>
)

}

export default Popup; 









 
