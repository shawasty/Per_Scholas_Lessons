import { useState, useEffect } from 'react'
import axios from 'axios'    // install axios first by  using npm i axios
import { CLIENT_URL } from '../services/constants';
import Pokemon from './Pokemon';
// import dotenv from 'dotenv'
// dotenv.config()

const PokeList = () => {
    const [pokemons,setPokemons] = useState([])

// let client_url = process.env.CLIENT_URL;
    useEffect (()=>{
                // create async as a variable because useEffect doesn't accept async
        const fetchData = async () => {
            try {
                const response = await axios.get(CLIENT_URL);
                // console.log(response)  
                // from the console, track and see where data can be retrieved and do this
                // const result = response.data; 
                 // this can be destructured as followws
                 const { results} = response.data;
                 console.log(results)
                 setPokemons(results)

                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    },[])


    return (
       <ul className="container collection with-header" style={{ marginTop: 25 }}>
           {
               //(pokemons).map(()=>{})
               (pokemons || [] ).map((pokemon,index)=>{
                   const {name,url} = pokemon;
                   return <Pokemon name = {name} url={url} key={index}/>
               })

           }
       </ul>
    );
};

export default PokeList;