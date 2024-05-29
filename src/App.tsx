import React, {useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {ThemeContext} from "./theme/themeContext";
import {useTheme} from "./theme/useTheme";
import classNames from "./helpers/classNames/classNames";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'./'}>ГЛАВНАЯ</Link>
            <Link to={'./about'}>О ПРИЛОЖЕНИИ</Link>
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/about'} element={<AboutPage />}/>
            </Routes>
        </div>
    );
};

export default App;