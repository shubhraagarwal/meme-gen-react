import React from 'react';
import cardDetails from './cardDetails'
import './card.css'

export const Card = (props) => {
    return (



        <
        div className = "div-card col-md-4" >

        <
        div className = "card" >
        <
        img className = "card-image "
        src = { props.imgURL }
        alt = { props.imgURL }
        / > <
        div className = "card-footer" >
        <
        a href = { props.imgURL } >
        <
        p className = "card-text" > { props.name } < /p> <
        h3 className = "card-title" > { props.tagline } < /h3></a >
        <
        a href = '{ props.imgURL }'
        download = { props.imgURL } >
        <
        button type = "button"
        name = "button" >
        download < /button> < /
        a > < /div > < /
        div > < /
        div >

    );
}