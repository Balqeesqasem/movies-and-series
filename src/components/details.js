import React,{useState , useEffect} from 'react';
import superagent from 'superagent';


function Details(props) {
     const [movieReview, setMovieReview] = useState([])
    
  useEffect(() => {
    (async function fetchData() {
    
        let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${props.fullDetails.Title}&api-key=3YeRygDn787ivX6AwxugmZASa1yEmGCR`;
        let result = await superagent(url); 
        let review=[];
        review = result.body.results;
      setMovieReview(review);    
    })()
  },[props.fullDetails.Title])

 
  return (
    <>
      <div className="test">
          
     {movieReview.length ? movieReview.map((res,i) =>{
        return(
            <>
            <div className="topDetails">
            <img className="imgWidth" alt="poster" src={props.fullDetails.Poster}></img>
            <div className="firstInfo">
            <p className="toDetailInfo"><span className="headDesc">Title : </span>{props.fullDetails.Title}</p>
        <p className="toDetailInfo"><span className="headDesc">Year : </span> {props.fullDetails.Year}</p>
        <p className="toDetailInfo"><span className="headDesc">Type :</span> {props.fullDetails.Type}</p>
            </div>
       
            </div>
       
            <p className="headTittle">Movies<span className="db">Reviews</span> </p>
        <div className="toDetailInfo">

        <p ><span className="headDesc">Title : </span>{res.display_title}</p>
        <p><span className="headDesc">Headline : </span>{res.headline}</p>
        <p><span className="headDesc">Bio : </span>{res.summary_short}</p>
        <p><span className="headDesc">Rating : </span>{res.mpaa_rating}</p>
        <p><span className="headDesc">Critics Pick : </span>{res.critics_pick}</p>
        <p><span className="headDesc">Byline : </span>{res.byline}</p>
        <p><span className="headDesc">Publication Date: </span>{res.publication_date}</p>
        <p><span className="headDesc">Opening Date : </span>{res.opening_date}</p>
        <p><span className="headDesc">Date Update : </span>{res.date_update}</p>
        <p><span className="headDesc">More Reviews : </span>{res.link.suggested_link_text} <a className="a" href={res.link.url}> LINK</a></p>
        </div>
        </>
        )
      })
    : <div className="topDetails">
    <img className="imgWidth" alt="poster " src={props.fullDetails.Poster}></img>
    <div  className="firstInfo">
    <p className="toDetailInfo"><span className="headDesc">Title : </span>{props.fullDetails.Title}</p>
<p className="toDetailInfo"><span className="headDesc">Year : </span> {props.fullDetails.Year}</p>
<p className="toDetailInfo"><span className="headDesc">Type :</span> {props.fullDetails.Type}</p>
    </div>
    
    </div>
   
    
    }
      </div>
        </>
  );
}

export default Details;
