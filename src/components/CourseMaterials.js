import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'

const CourseMaterials = ({ theme, courses }) => {
  const width = useWindowWidth()

  return (
    <div id="CourseMaterials" className="CourseMaterials section">
      <div className="main-container flex-column">
        <h1 className="section-title">course materials</h1>
        <div className="courses flex-column">
          {courses.map((course, i) => {
             return (
               <div key={i} className="flex-row baseline">
                  {width > 700 &&
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
