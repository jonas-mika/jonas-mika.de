const Course = ({ theme, name, lecturer, semester }) => {
    return (
        <div id="Course" className="Course">
            <div style={{height: '150px'}}/>
            <div className="main-container">
                <h1>{name}</h1> 
                <div className="flex-row"> 
                    <p className="lecturer italic">{lecturer} / </p>
                    <p className="semester italic"> {semester}</p>
                </div>
            </div>
        </div>
    );
}

export default Course;
