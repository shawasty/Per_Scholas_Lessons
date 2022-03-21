import { useEffect, useState } from "react"
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({hits:[]})
  //hits is variable from the api and since the data is an array, you do as shown above
 async function fetchData (e){
   const response = await axios (
     'https://hn.algolia.com/api/v1/search?query=redux'
   );
    setData( response.data);
  }
  
  useEffect(()=>{
    fetchData()
    console.log( 'running...')  // if we leave it like this, it will runn constatntly , so we add  []after the curly braces  to make it render once

  }, [])



  return (
    <ul>
      {data.hits.map ((item) => {
        return <li key = {item.objectID}> 
                <a href={item.url}> {item.title} </a>
                </li>
      })}
    </ul>
  );
}

export default App;
