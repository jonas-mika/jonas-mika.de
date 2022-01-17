import { Link } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';

const CourseMaterials = ({ theme, courses }) => {
    const isMobile = useMobileDetect();

    return (
        <div id="CourseMaterials" className="CourseMaterials section">
            <div className="main-container flex-column">
                <h1 className="section-title">course materials</h1>
                <div className="courses flex-column">
                    {courses.map((course, i) => {
                         return (
                             <div key={i} className="flex-row baseline">
                                {!isMobile.isMobile() &&
                                 <h2 className="semester sub-section-text">{course.semester} \</h2>
                                }
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

export default CourseMaterials;
