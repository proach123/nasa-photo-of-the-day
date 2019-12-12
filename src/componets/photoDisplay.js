import React, {useState, useEffect} from 'react';
import PhotoData from './photoData';
import TextData from './textData'
import axios from 'axios'
import {Card} from 'reactstrap';



export default function PhotoDisplay(props){

    const [dataState, setDataState] = useState([])
    
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=vzx9XBC5MHpvFBJoz59sYHzKp3JjDNKMFRoqTVzr")
          .then(res => ( setDataState(res.data)))
          .catch(err => console.log(err, 'axios get on line 11 photoData.js failed'));
      }, []);
        console.log(dataState)
    return(
        <div width={'500px'} height={'200px'}>
        <Card width={"50%"} >
            <TextData key={dataState.date} date={dataState.date} explanation={dataState.explanation} title={dataState.title}/>
            <PhotoData key={dataState.media_type} img={dataState.url} explanation={dataState.explanation} />
        </Card>
    </div> 
    )
}





//const Numbers = (props) => {