import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Resource from './Resource';
import Subpage from './Subpage';

const Course = ({ theme, name, lecturers, semester }) => {
    const [resources, setResources] = useState(null);
    const [isOverview, setIsOverview] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setIsOverview(location.pathname === `/${name}` ? true : false);
    }, [location]);

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
                {isOverview &&
                    <div>
                <Subpage
                    title={name}
                    subtitle={"/ " + semester + " / " + lecturers.join(" / ")}
                />

                <div className="resources flex-column">
                    {resources && 
                        resources.map((resource, i) => {
                            return (<div key={i} className="flex-row baseline">
                                        <Link className="italic-hover" to={resource}>
                                            <p className="sub-section-title bold">/ {resource}</p>
                                        </Link>
                                    </div>)
                        })
                    }
                </div>
                </div>
                }

                <Routes>
                    <Route path=':resource' element={<Resource course={name}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Course;

