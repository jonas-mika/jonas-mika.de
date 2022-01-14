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

import { useEffect } from 'react';

import Background from './components/Background';
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import Footer from './components/Footer';
import Share from './components/Share';
import NotFound from './components/NotFound';

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
                <AnimatedCursor 
                    innerSize={10}
                    outerSize={10}
                    color={theme === 'dark' ? '0, 170, 255' : '3, 0, 171'}
                    outerAlpha={0.1}
                    innerScale={0.5}
                    outerScale={0}
                />

                <Background theme={theme} />
                <Header theme={theme} toggleTheme={toggleTheme}/>

                <Routes>
                    <Route path='/' element={<Home courses={courses} theme={theme}/>}/>
                    {courses.map((course, i) => {
                        return <Route path={`/${course.name}/*`} element={<Course name={course.name} lecturers={course.lecturer} semester={course.semester}/>}/>
                    })}
                    <Route path='share' element={<Share/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
