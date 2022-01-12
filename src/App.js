import { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor" // custom cursor
import useLocalStorage from 'use-local-storage' // store information about colorscheme
import './styles/index.scss';

import Header from './components/Header';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const [darkmode, setDarkmode] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className="App" data-theme={theme}>
            <AnimatedCursor 
                innerSize={10}
                outerSize={10}
                color={theme === 'light' ? '135, 0, 0' : '8, 180, 4'}
                outerAlpha={0.1}
                innerScale={0.5}
                outerScale={0}
            />
            <Header theme={theme} toggleTheme={toggleTheme}/>
        </div>
    );
}

export default App;
