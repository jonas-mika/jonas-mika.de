import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Resource from './Resource';
import Subpage from './Subpage';

const Course = ({ theme, name, lecturers, semester }) => {
    const location = useLocation();
    const [isOverview, setIsOverview] = useState(true);
    const [state, setState] = useState({
        "fetched": false,
        "error": false,
        "data": null
    });

    useEffect(() => {
        setIsOverview(location.pathname === `/${name}` ? true : false);
    }, [location]);

    useEffect(() => {
        if (!state.data) {
            const data = fetch(`https://jonas-mika.herokuapp.com/api/courses/${name}`)
                        .then(res => res.json())
                        .then(data => {return data});
                        //.catch(err => {console.log(err); setState({}))

            const timer =  setTimeout(async () => { 
                setState({
                    "fetched": true,
                    "data": await data,
                });
            }, 10);
            return () => clearTimeout(timer);
        }
    }, []);

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
                    {state.fetched ?
                        state.data.map((resource, i) => {
                            return (<div key={i} className="flex-row baseline">
                                        <Link className="italic-hover" to={resource}>
                                            <p className="sub-section-title bold">/ {resource}</p>
                                        </Link>
                                    </div>)
                        })
                        : 
                        <div className="primary">Loading...</div>
                    }
                    {!state.fetched &&  <div className="primary">Nothing here yet...</div>}
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
