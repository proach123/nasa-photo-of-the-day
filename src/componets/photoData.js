import React from 'react';

export default function PhotoData(props){

    return(
        <div>
            <img src={props.img} alt={props.explanation}></img>
        </div>
    )

    
}