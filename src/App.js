import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"; // custom cursor
import useLocalStorage from 'use-local-storage'; // store information about colorscheme

import './styles/index.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Course from './components/Course';
import Share from './components/Share';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage.js';
import NotFound from './components/NotFound';
import Loader from './components/Loader';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [projects, setProjects] = useState(null);
    const [fetched, setFetched] = useState(false);

    const fetchProjects = async () => {
        fetch("https://api.github.com/users/jonas-mika/repos")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            });
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const courses = require('./courses.json');

    useEffect(() => {
        fetchProjects();

        const timer =  setTimeout(() => { 
            setFetched(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

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

                <Header theme={theme} toggleTheme={toggleTheme}/>
                {fetched  ?
                    <Routes>
                        <Route path='/' element={
                            <Home 
                                projects={projects}
                                courses={courses} 
                                theme={theme}/>}
                            />
                            {courses.map((course, i) => {
                                return <Route key={i} path={`/${course.name}/*`} element={<Course 
                                    name={course.name} 
                                    lecturers={course.lecturer}
                                    semester={course.semester}
                                    />}/>
                            })}
                            <Route path='share' element={<Share/>}/>
                            <Route path='contact' element={<Contact/>}/>
                            <Route path='projects' element={<ProjectPage/>}/>
                            <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    : <Loader theme={theme} fullPage={true}/>
                }
                <Footer/>
            </div>
        </Router>
    )
}

export default App;
