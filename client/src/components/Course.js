import { Link } from 'react-router-dom';

const Course = ({ theme, name, lecturers, semester }) => {
    return (
        <div id="Course" className="Course">
            <div className="main-container">
                <Link className="back italic-hover" to='/'><h2 className="secondary small italic-hover">back</h2></Link> 
                <h1 className="title">{name}</h1> 
                <div className="flex-row"> 
                    <p className="semester sub-section-text">/ {semester}</p>
                    {lecturers.length > 0 && lecturers.map((lecturer, i) => {
                        return <p className="lecturer sub-section-text">/ {lecturer}</p>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Course;
