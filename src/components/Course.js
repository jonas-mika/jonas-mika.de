import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation } from "react-router-dom";

import Resource from './Resource';
import Subpage from './Subpage';
import { API } from '../configs';

const Course = ({ theme, name, lecturers, semester }) => {
  const location = useLocation();
  const [isOverview, setIsOverview] = useState(true);
  const [state, setState] = useState({
    "fetched": false,
    "data": null,
    "error": null
  });

  useEffect(() => {
    setIsOverview(location.pathname === `/${name}` ? true : false);
  }, [location]);

  useEffect(() => {
    fetch(`${API}/api/courses/${name}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setState({
            "fetched": true,
            "data": null,
            "error": true
          })
          return null;
        }
      })
      .then(res => {
        if (res) {
          setState({
            "fetched": true,
            "data": res,
            "error": false
          })
        }
      })
  }, [location]);

  const render = () => {
    console.log('fetched: ', state);
    if (!state.fetched) {
      return (
        <div className="primary">Loading...</div>
      )
    } else {
      if (state.data !== null) {
        return (
          state.data.map((resource, i) => {
            return (
              <div key={i} className="flex-row baseline">
                <Link className="italic-hover" to={resource}>
                  <p className="normal primary bold" style={{margin: '0.2rem 0'}}>/ {resource}</p>
                </Link>
              </div>
            )
          })
        )
      } else {
        return (
          <div className="primary">Nothing here yet</div>
        )
      }
    }
  }

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
              { render() }
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
