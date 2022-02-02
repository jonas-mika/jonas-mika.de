import { MdArrowDropDown } from 'react-icons/md';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Hero = ({ theme } ) => {
  return (
    <div id="Hero" className="Hero">
      <div className="main-container flex-column">
        <h2 className="hero-title flex-row">
          hej, i'm  
          <Link className="italic-hover underline" to="contact"><p>mika</p></Link>
        </h2>
        <AnchorLink href='#Projects' className="down">
          <MdArrowDropDown className="icon"/>
        </AnchorLink>
      </div>
    </div>
  );
}

export default Hero;
