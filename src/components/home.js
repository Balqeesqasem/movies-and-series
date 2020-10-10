import React,{useState} from 'react';
import Recently from './recentlyviewed.js';
import Shows from './shows.js'


function Home(props) {


    const [fav,setFav] = useState(['']);
    
    return (
      <>   
          <Recently fav={fav} setFav={setFav}/>
          <Shows fav={fav} setFav={setFav} search={props.search} setFullDetails={props.setFullDetails}/>
          </>
    );
  }
  
  export default Home;
  