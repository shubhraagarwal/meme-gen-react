import React from 'react';
import './header.css';


export const Header = () => {
    return ( <
        div className = 'header' >
        <
        h1 className = 'h1' > Meme Generator < /h1>  <
        div className = 'about' > A piece of software which allows you to create those awesome memes and share it with your friends.Simply choose from some random pre - existing templates or just upload your own template according to your wish.Not in the mood to create memes ? Do not worry, we got you covered there too, just download the memes we have created
        for you.Just navigate to your preferred section using the navbar and get creative!
        <
        br / > < br / >

        <
        div className = "div-animate " >
        <
        a href = "#" >
        <
        button className = "button-animate"
        type = "button"
        name = "button" > Create From Random templates <
        span > < /span></button >
        <
        /a> </div >
        <
        br / >

        <
        /
        div > <
        div className = 'displayImg ' >
        <
        img src = 'https://image.freepik.com/free-vector/funny-lol-stickers-collection_23-2148613745.jpg'
        alt = 'Just a happy image'
        className = 'displayImg ' /
        >

        <
        /div>  < /
        div >
    );
}