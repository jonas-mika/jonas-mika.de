import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useLocation } from "react-router-dom";

import Resource from './Resource';
import Subpage from './Subpage';
import { API } from '../configs';

const Course = ({ theme, coursename, lecturers, semester }) => {
  const location = useLocation();
  const [isOverview, setIsOverview] = useState(true);
  const [state, setState] = useState({
    "fetched": false,
    "data": {},
    "error": null
  });

  useEffect(() => {
    setIsOverview(location.pathname === `/${coursename}` ? true : false);
  }, [location]);

  useEffect(() => {
    setState({
      "fetched": false,
      "data": {},
      "error": null
    })
  }, [location])

  useEffect(() => {
    fetch(`${API}/api/courses/${coursename}/topics`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => {
        setState({
          "fetched": true,
          "data": null, 
          "error": true
        })
        return null
      })
      .then((topics) => {
        if (topics !== null) {
          if (topics.length > 0) {
            let data = {}
            topics.forEach(topic => {
              const url = `${API}/api/courses/${coursename}/${topic}`
              let tmp = new Object();
              fetch(url)
                .then(res => res.json())
                .then(res => {
                  tmp[topic] = res
                  data = {...data, ...tmp}
                  return data
                })
                .then(data => {
                  setState({
                    ...state,
                    "fetched": true,
                    "data": data
                  })
                })
              })
            } else {
              setState({
                "fetched": true,
                "data": null, 
                "error": true
              })
            }
          } 
      })
  }, [location]);

  const renderTopic = (topic) => {
    return (
      <div>
        <h2 className="divider">{topic}</h2>
        {
          state.data[topic].map((resource, i) => {
            return (
              <div className="flex-row">
                <h1 className="page-item" style={{fontSize: '1.6rem', paddingRight: '.5rem'}}>/</h1>
                <div key={i} className="flex-row baseline">
                  <Link className="italic-hover" to={`${topic}/${resource}`} >
                    <h1 className="page-item italic-hover" style={{fontSize: '1.6rem'}}>{resource}</h1>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  const renderAll = () => {
    if (!state.fetched) {
      return ( <div className="primary" style={{maringTop: '3rem'}}>Loading...</div> )
    } else {
      if (state.data !== null) {
        return (
          Object.keys(state.data).map((topic) => {
            return renderTopic(topic) 
          })
        )
      } else {
        return <div className="primary" style={{marginTop: '3rem'}}>Nothing here yet</div>
      }
    }
  }

  return (
    <div id="Course" className="Course">
      <div className="main-container">
        {isOverview &&
          <div>
            <Subpage
                title={coursename}
                subtitle={"/ " + semester + " / " + lecturers.join(" / ")}
            />
            <div className="resources flex-column">
              { renderAll() }
              </div>
          </div>
        }

        <Routes>
            <Route 
              path={`:topic/:resource`}
              element={<Resource course={coursename} theme={theme}/>}
            />
        </Routes>
      </div>
    </div>
  );
}

export default Course;

/*
              <div key={i} className="flex-row baseline">
                <Link className="italic-hover" to={resource}>
                  <p className="normal primary bold" style={{margin: '0.2rem 0'}}>/ {resource}</p>
                </Link>
              </div>
              */
