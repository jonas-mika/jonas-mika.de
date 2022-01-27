import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div id="NotFound" className="NotFound">
      <div className="main-container">
        <Link className="back italic-hover" to='/'><h2 className="secondary small italic-hover">back</h2></Link> 
        <h1 className="title">404</h1> 
        <div className="flex-row"> 
            <p className="semester sub-section-text">/ sorry, this page does not exist</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
