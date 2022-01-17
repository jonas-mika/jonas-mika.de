import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Resource from './Resource';

const Course = ({ theme, name, lecturers, semester }) => {
    const [resources, setResources] = useState(null);
    const [isOverview, setIsOverview] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsOverview(location.pathname === `/${name}` ? true : false);
    }, [location, name]);

    useEffect(() => {
        if (!resources) {
            const fetchApi = async (route) => {
                fetch(`https://jonas-mika.herokuapp.com/${route}`)
                    .then(res => res.json())
                    .then(data => setResources(data));
            }

            fetchApi(`api/courses/${name}`);
        }
    }, [name, resources]);

    return (
        <div id="Course" className="Course">
            <div className="main-container">
                <button className="italic-hover" onClick={() => navigate(-1)}>
                <h2 className="secondary small italic-hover">back</h2> 
                </button>
                {isOverview &&
                    <div>
                    <h1 className="section-title">{name}</h1> 
                    <div className="flex-row"> 
                        <p className="semester sub-section-text">/ {semester}</p>
                        {lecturers.length > 0 && lecturers.map((lecturer, i) => {
                            return <p key={i} className="lecturer sub-section-text">/ {lecturer}</p>;
                        })}
                    </div>
                    <div className=" resources flex-column">
                        {resources && 
                            resources.map((resource, i) => {
                                return (<div key={i} className="flex-row baseline">
                                            <Link className="italic-hover" to={resource}>
                                                <h1 className="name sub-section-title">/ {resource}</h1>
                                            </Link>
                                        </div>)
                            })
                        }
                    </div></div>
                }

                <Routes>
                    <Route path=':resource' element={<Resource course={name}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Course;

