import { Link } from 'react-router-dom';

const Share = () => {
    return (
        <div id="Share" className="Share">
            <div className="main-container">
                <Link className="back italic-hover" to='/'><h2 className="secondary small italic-hover">back</h2></Link> 
                <h1 className="title">share</h1> 
                <div className="flex-row"> 
                    <p className="semester sub-section-text">/ temporary downloads</p>
                </div>
                <div className="container flex-row">
                    <div className="flex-column">
                        <a className="italic-hover" href="/assets/general/resume.pdf" target="_blank" download="resume">
                            <p className="sub-section-title bold">/ download1</p>
                        </a>
                        <a className="italic-hover" href="/assets/general/resume.pdf" target="_blank" download="resume">
                            <p className="sub-section-title bold italic-hover">/ download2</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;
