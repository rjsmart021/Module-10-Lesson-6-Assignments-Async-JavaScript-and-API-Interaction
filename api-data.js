//1. Exploring Asynchronous JavaScript
//Task 1: Obtaining API Key and Configuration
http(s)://gateway.marvel.com/
Request Url: http://gateway.marvel.com/v1/public/comics
Request Method: GET
Request: GET https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<1655f2c81e8dca444e02ba3b42f0fe73>&hash=<641c4dfbe5e4af30a645d14c4f7518e2
//Implement a function to fetch Marvel Comics characters asynchronously from the API endpoint using the Fetch API and promises. 
//Utilize the API key and configurations obtained in Task 1. Log the fetched characters to the console.
async function fetchMarvelCharacters() {
    const apiKey = '1655f2c81e8dca444e02ba3b42f0fe73'; 
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<1655f2c81e8dca444e02ba3b42f0fe73>&hash=<641c4dfbe5e4af30a645d14c4f7518e2`;

    try {
        const response = await fetch(https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<1655f2c81e8dca444e02ba3b42f0fe73>&hash=<641c4dfbe5e4af30a645d14c4f7518e2);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.results; // Returns the array of characters
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Example usage
fetchMarvelCharacters().then(characters => {
    console.log(characters);
});
let ts ="168180292982683"
let publicKey = "";
let hashVal = "afcbeldde7d32a25088b712beb8b3fe0";
import React, { useEffect, useState } from 'react';
import './stylesheets.css';
import Header from './components/header/Header';
import CharacterContainer from './components/marvels/CharacterContainer';
import axios from 'axios';
import { notification } from 'antd'

export const UserContext = React.createContext();
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarvelCharacters = async() => {
      try{
        let baseUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_KEY}`;
        let result = await axios(baseUrl);
        setItems(result.data.data.results)
      } catch(ex) {
        setItems([]);
        notification.error({
          message: 'Failed to fetch marvel characters',
          description: ex.message,
          placement: 'top',
        });
      } finally {
        setIsLoading(false)
      }   
    }

    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <UserContext.Provider value={items}>
        <Header/>
        <CharacterContainer items={items} isLoading={isLoading}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
