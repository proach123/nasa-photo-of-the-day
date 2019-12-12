import React from "react";
// import "./App.css";
import PhotoDisplay from './componets/photoDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="text-center bg-blue">
      <h1 class="text-xl text-gray-800 leading-tight">Nasa Photo of the Day</h1>
      <PhotoDisplay/>
    </div>
  );
}

export default App;


// this is my api key
// https://api.nasa.gov/planetary/apod?api_key=vzx9XBC5MHpvFBJoz59sYHzKp3JjDNKMFRoqTVzr