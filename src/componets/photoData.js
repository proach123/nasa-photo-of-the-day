import React from 'react';
import {CardImg} from 'reactstrap';

export default function PhotoData(props){

    return(
        <>
            <CardImg top width="100%" src={props.img} alt={props.explanation} />
        </>
    )

    
}