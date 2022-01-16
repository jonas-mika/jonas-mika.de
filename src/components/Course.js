import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Resource from './Resource';
import Background from './Background';

import {
  Routes,
  Route,
  useParams, 
  useLocation, 
  useNavigate
} from "react-router-dom";

const pad = (d) => {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

const Course = ({ theme, setShowBackground, name, lecturers, semester }) => {
    const [resources, setResources] = useState(null);
    const [isOverview, setIsOverview] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const callApi = async (api) => {
        const response = await fetch(api);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        setResources(body);
    };

    useEffect(() => {
        setIsOverview(location.pathname === `/${name}` ? true : false);
    }, [location]);

    useEffect(() => {
        if (!resources) {
            callApi(`api/courses/${name}`);
        }
    }, []);

    return (
        <div id="Course" className="Course">
            <div className="main-container">
                <a className="italic-hover" onClick={() => navigate(-1)}>
                <h2 className="secondary small italic-hover">back</h2> 
                </a>
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
                    <Route path=':resource' element={<Resource course={name} setShowBackground={setShowBackground}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Course;

