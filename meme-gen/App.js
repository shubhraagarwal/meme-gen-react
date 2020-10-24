import React from 'react';
import { Home } from './Home';
import styles from './styles.module.css';
import { Meme } from '../Meme/Meme';
import { Switch, Route } from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
import { Footer } from './footer';

export const App = () => {
    return ( < div > < Home / >
        <
        Switch >
        <
        Route exact path = '/' >
        <
        Meme / >
        <
        /Route> <
        Route path = '/generated' >
        <
        MemeGenerated / >
        <
        /Route>


        <
        /Switch> <
        Footer / >
        <
        /
        div > );
}