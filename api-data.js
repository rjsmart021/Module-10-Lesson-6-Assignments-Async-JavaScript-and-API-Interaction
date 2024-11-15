//1. Exploring Asynchronous JavaScript
//Task 1: Obtaining API Key and Configuration
http(s)://gateway.marvel.com/
Request Url: http://gateway.marvel.com/v1/public/comics
Request Method: GET
Params: {
  "apikey": "your api key",
  "ts": "a timestamp",
  "hash": "your hash"
}
Headers: {
  Accept: */*
}
Status Code: 200
Access-Control-Allow-Origin: *
Date: Wed, 18 Dec 2013 22:00:55 GMT
Connection: keep-alive
ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
Content-Length: 54943
Content-Type: application/json
Request Url: http://gateway.marvel.com/v1/public/comics
Request Method: GET
Params: {
  "apikey": "your api key",
  "ts": "a timestamp",
  "hash": "your hash"
}
Headers: {
  Accept: */*
  If-None-Match: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
}
Status Code: 304
Access-Control-Allow-Origin: *
Date: Wed, 18 Dec 2013 22:03:20 GMT
Connection: keep-alive
ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY
Response:
{
  "code": 200,
  "status": "Ok",
  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
  "data": {
  … [other data points]
}
Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY&callback=callback_param
Response:
callback_param({
  "code": 200,
  "status": "Ok",
  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
  "data": {
  … [other data points]
})
//Task 2: Fetching Characters Using Fetch API
//Implement a function to fetch Marvel Comics characters asynchronously from the API endpoint using the Fetch API and promises. Utilize the API key and configurations obtained in Task 1. Log the fetched characters to the console.
async function fetchMarvelCharacters() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
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
