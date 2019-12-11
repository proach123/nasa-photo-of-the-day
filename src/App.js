import React from "react";
import "./App.css";
import PhotoDisplay from './componets/photoDisplay';

function App() {
  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <PhotoDisplay/>
    </div>
  );
}

export default App;


// this is my api key
// https://api.nasa.gov/planetary/apod?api_key=vzx9XBC5MHpvFBJoz59sYHzKp3JjDNKMFRoqTVzr