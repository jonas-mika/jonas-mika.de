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
              my name is mika. i am a {getAge()}-year old student from germany that is currently
              studying data science at the it university of copenhagen, where i am also a teaching 
              assistant in several courses. among those are 
              <Link 
                className="secondary italic" 
                style={{margin: '0 0.2rem'}}
                to='../applied-stats'> applied statistics</Link>,
              <Link 
                className="secondary italic" 
                style={{margin: '0 0.2rem'}}
                 to='../algorithms-and-data-structures'> algorithms and data structures</Link>,
              <Link 
                className="secondary italic" 
                style={{margin: '0 0.2rem'}}
                to='../intro-to-programming'> introduction to data science and programming</Link>,
              and  
              <Link 
                className="italic" 
                style={{margin: '0 0.2rem'}}
                to='../study-lab'> study lab </Link>

              <br/><br/>

              besides my studies, i am working as a student data scientist at
              <a className="secondary italic" 
                 style={{margin: '0 0.2rem'}}
                 target='noopener'
                 href="https://www.linkedin.com/company/helpsome-com/about/">helpsome</a>,
              where i am mostly involved in statistical analysis and modelling of psychometric data.
              apart from that, i offer private tutoring sessions in mathematics and computer science and 
              develop websites and apps in freelance projects.

              <br/><br/>

              feel free to reach out to me via mail or any of the below socials. 
              <br/>
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
