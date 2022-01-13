// import { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"; // custom cursor
import useLocalStorage from 'use-local-storage'; // store information about colorscheme
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './styles/index.scss';

import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import Footer from './components/Footer';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const courses = require('./courses.json');

    return (
        <Router>
            <div className="App page-container" data-theme={theme}>
                <div className="content-wrap">
                    <AnimatedCursor 
                        innerSize={10}
                        outerSize={10}
                        color={'0, 170, 255'}
                        outerAlpha={0.1}
                        innerScale={0.5}
                        outerScale={0}
                    />
                    <div id="Top"></div>
                    <Header theme={theme} toggleTheme={toggleTheme}/>

                    <Routes>
                        <Route path='/' element={<Home courses={courses} theme={theme}/>}/>
                        {courses.map((course, i) => {
                            return <Route path={`/${course.name}`} element={<Course name={course.name} lecturer={course.lecturer[0]} semester={course.semester}/>}/>
                        })}
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
