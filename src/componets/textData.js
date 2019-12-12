import React from 'react';
import {
    CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export default function textData(props){

    return(
        <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.date}</CardSubtitle>
            <CardText>{props.explanation}</CardText>
        </CardBody>
    )

    
}