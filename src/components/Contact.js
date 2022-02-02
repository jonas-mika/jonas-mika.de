import { TiSocialGithubCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { getAge } from '../helpers.js';

import Subpage from './Subpage';

const Contact = () => {
  return ( 
    <div id="Contact" className="Contact">
      <div className="main-container">
        <Subpage 
          title={"contact"}
          subtitle={""}
        />

        <div className="container flex-column" style={{marginTop: '3rem'}}>
          <h1 className="normal primary bold" style={{marginBottom: '1rem'}}>hej!</h1>
          <p className="normal primary">
              my name is mika and I am a {getAge()}-year old student from germany that is currently
              studying a bachelor of data science at the it university of copenhagen. 
              <br/><br/>
              besides my studies, i am working as a teaching assistant at my universities in the courses
              <Link className="italic" to='../applied-stats'> applied statistics</Link>,
              <Link className="italic" to='../algorithms-and-data-structures'> algorithms and data structures</Link>,
              <Link className="italic" to='../intro-to-programming'> introduction to data science and programming</Link>,
              and am part of 
              <Link className="italic" to='../study-lab'> study lab </Link>
              for the first year data science students. i offer private tutoring
              sessions in mathematics and computer science and develop websites and apps as freelance projects.
              <br/><br/>
              feel free to reach out to me via mail or any of the below socials. 
              <br/>
              i am looking forward to hearing from you!
          </p>
          <div className="socials flex-row" style={{marginTop: "2rem"}}>
              <a
                  href="mailto:contact@jonas-mika.de"
              >
                  <MdAlternateEmail className="icon" />
              </a>
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
    </div>
  );
}

export default Contact;
