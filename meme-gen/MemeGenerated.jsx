import React, { useState } from 'react';
import { Meme } from '../Meme/Meme';
import { useHistory, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import './MemeGenerated.css';


export const MemeGenerated = () => {


        const [copied, setCopied] = useState(false);
        const history = useHistory();
        const location = useLocation();
        const url = new URLSearchParams(location.search).get('url');
        const clipboard = useClipboard();



        const copyLink = () => {
            clipboard.copy(url);
            setCopied(true);
        }


        return ( <
            div >
            <
            div className = 'container3' > {
                url && < img alt = 'MEME'
                src = { url }
                />} <
                div className = "div-animate1 " >
                <
                a href = { url }
                download > <
                button onClick = { copyLink }
                className = 'copyLink' > { copied ? 'Copied Successfully' : 'Copy Link' } <
                /button > </a >

                <
                button onClick = {
                    () => history.push('/')
                }
                className = "button-animate1"
                type = "button"
                name = "button" > Make More Memes!! <
                span > < /span></button >

                <
                /div >  < /
                div >
                <
                /div>


            );
        };