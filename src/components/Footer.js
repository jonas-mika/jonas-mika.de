import { TiSocialGithubCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = ({ theme }) => {
  return (
    <div id="Footer" className="Footer">
      <div className="main-container">
        <div className="left">
          <p className="bold primary normal" style={{marginBottom: '.2rem'}}>Jonas-Mika Senghaas</p>
          <p className="regular secondary normal" style={{marginBottom: '1.5rem'}}>2300 København</p>
          <a className="italic-hover" href="mailto:contact@jonas-mika.de"><p className="italic-hover secondary normal">contact@jonas-mika.de</p></a>
          <a className="italic-hover" href="https://jonas-mika.herokuapp.com/api/share/resume.pdf" download="resume">
            <p className="italic-hover secondary normal">download resume</p>
          </a>
          <p className="italic secondary" style={{fontSize:'0.7rem', marginTop: '1.5rem'}} >&copy; 2022 Jonas-Mika Senghaas</p>
        </div>
        <div className="right">
          <a
            href="https://www.facebook.com/jonasmika.senghaas/"
            target="noopener"
            rel="noreferrer"
          >
            <TiSocialFacebookCircular className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonas-mika-senghaas-194632182/"
            target="noopener"
            rel="noreferrer"
          >
            <TiSocialLinkedinCircular className="icon" />
          </a>
          <a
            href="https://github.com/jonas-mika"
            target="noopener"
            rel="noreferrer"
          >
            <TiSocialGithubCircular className="icon" />
          </a>
          <a
            href="https://www.instagram.com/mikasenghaas"
            target="noopener"
            rel="noreferrer"
          >
            <AiOutlineInstagram className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
