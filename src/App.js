// import { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"; // custom cursor
import useLocalStorage from 'use-local-storage'; // store information about colorscheme
import './styles/index.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className="App" data-theme={theme}>
            <AnimatedCursor 
                innerSize={10}
                outerSize={10}
                color={'0, 170, 255'}
                outerAlpha={0.1}
                innerScale={0.5}
                outerScale={0}
            />
            <Hero theme={theme}/>
            <div className='Dummy'></div>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Projects theme={theme}/>
        </div>
    );
}

export default App;
