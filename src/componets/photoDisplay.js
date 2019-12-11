import React, {useState, useEffect} from 'react';
import PhotoData from './photoData';
import TextData from './textData'
import axios from 'axios'



export default function PhotoDisplay(props){

    const [dataState, setDataState] = useState([])
    
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=vzx9XBC5MHpvFBJoz59sYHzKp3JjDNKMFRoqTVzr")
          .then(res => ( setDataState(res.data)))
          .catch(err => console.log(err, 'axios get on line 11 photoData.js failed'));
      }, []);
        console.log(dataState)
    return(
        <div className="photo-display">
            <div>Hello</div>
            <TextData key={dataState.date} date={dataState.date} explanation={dataState.explanation} title={dataState.title}/>
            <PhotoData key={dataState.media_type} img={dataState.url} explanation={dataState.explanation} />
        </div>
    )
}


//const Numbers = (props) => {