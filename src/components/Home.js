import Hero from './Hero';
import Projects from './Projects';
import CourseMaterials from './CourseMaterials';

const Home = ({ theme, projects, languages, courses}) => {
    return (
        <div id="Home" className="Home">
            <div className='Dummy'></div>
            <Hero theme={theme}/>
            <Projects theme={theme} projects={projects} languages={languages}/>
            <CourseMaterials theme={theme} courses={courses}/>
        </div>
    );
}

export default Home;
