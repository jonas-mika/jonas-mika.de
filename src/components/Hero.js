import { MdArrowDropDown } from 'react-icons/md';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = ({ theme } ) => {
  return (
    <div id="Hero" className="Hero">
      <div className="main-container">
            <h2 className="title bold primary">hej, i'm mika</h2>
            <AnchorLink href='#Projects' className="icon">
                <MdArrowDropDown/>
            </AnchorLink>
      </div>
    </div>
  );
}

export default Hero;
