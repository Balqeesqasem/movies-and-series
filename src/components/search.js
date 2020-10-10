import React  from 'react';
import './style.css';


function Search(props) {

function serchValue(e){
  e.preventDefault();
  let value=e.target.searchInput.value;
  if( value === ''){
      value="Dark";
}
props.setSearch(value);
}

  return (
    <>
     <div className="searchContainee">
     <form className="form" onSubmit={e =>serchValue(e)}>
     <input className="input"  name="searchInput" placeholder="Search"/>
     <button className="button"  type="submit"><i className="fas fa-search"></i></button>
     </form>   
     </div> 
    </>
        );
}

export default Search;