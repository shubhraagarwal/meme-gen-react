import React from 'react';
import cardDetails from './cardDetails';
import { Card } from './card';
import './funny.css'

function createCard(cardDetails) {
    return <Card
    name = { cardDetails.name }
    imgURL = { cardDetails.imgURL }
    tagline = { cardDetails.tagline }
    /> ;
}

function Funny() {
    return ( < div className = 'div' > < h1 className = 'h1'
        id = 'memes' > MEMES < /h1> { cardDetails.map(createCard) } < /
        div >
    );
}

export default Funny;