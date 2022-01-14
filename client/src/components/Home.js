import Hero from './Hero';
import Projects from './Projects';
import Materials from './Materials';

const Home = ({ theme, courses }) => {
    return (
        <div id="Home" className="Home">
            <div className='Dummy'></div>
            <Hero theme={theme}/>
            <Projects theme={theme}/>
            <Materials theme={theme} courses={courses}/>
        </div>
    );
}

export default Home;
