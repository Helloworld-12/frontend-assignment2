import { useState } from "react";


function App(){
  const [query,setquery]=useState('');
  const [movies,setmovies]=useState([]);

 const nihar = async (e)=>{
   e.preventDefault();
const url="http://www.omdbapi.com/?apikey=cd7cd8dd&query=${query}";
const res=await fetch( url);
const data=await res.json();
setmovies(data.results);
}
return (

<>

  <form className="form" onSubmit={nihar} >
    <label className="label" htmlFor="query">Movie Name </label>
    <input className="input" type="text" name="query" 
    placeholder="pushpa" value={query} onChange={(e)=>setquery(e.target.value)}  /><br/>
  
    <button className="button" type="submit">Search</button>


  </form>
  <div className="card-list">
    {
      movies.map(movie=>(
        <div className="rating">
          <h1>{movie.imdbRating>7}?"blockbuster hit":"blockbusterflop"</h1>
          </div>
      ))
    }
  </div>

 </>
  )
}

export default App;
