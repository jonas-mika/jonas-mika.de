import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Materials = ({ theme, courses }) => {
    return (
        <div id="Materials" className="Materials section">
            <div className="main-container flex-column">
                <h1 className="section-title">course materials</h1>
                <div className="courses flex-column">
                    {courses.map((course, i) => {
                         return (
                             <div className="flex-row baseline">
                                 <h2 className="semester sub-section-text">{course.semester}</h2>
                                 <Link className="italic-hover" to={`/${course.name}`}>
                                    <h1 className="name sub-section-title">{course.name}</h1>
                                 </Link>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Materials;
