import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'

const Header = ( {theme, toggleTheme} ) => {
  const width = useWindowWidth();
  const courses = require('../courses.json');

  return (
  <div className="Navbar" data-theme={theme}>
    <div className="main-container flex-row">
    <div className="logo no-select">
      <Link to='/'>
      <p className="bold change-color primary">jonas-mika</p>
      <p className="regular italic primary" style={{paddingLeft: '3px'}}>senghaas</p>
      </Link>
    </div>

    <div className="flex-row">
      {width > 1100 &&
        <div className="menu no-select flex-row">
            <Link className="link italic-hover" to="projects">
              <p className="regular primary italic-hover">projects</p>
            </Link>
            <div className="dropdown">
              <p className="dropbtn regular primary italic-hover">course materials</p>
              <div className="dropdown-content flex-column">
                {courses && 
                  courses.map((course, i) => {
                    return (<Link className="secondary" to={course.name} key={i}>{course.name}</Link>)
                  })
                }
              </div>
            </div>
            <a className="link italic-hover" href="https://jonas-mika.herokuapp.com/api/assets/general/resume.pdf" target="noopener">
              <p className="regular primary italic-hover">resume</p>
            </a>
            <Link className="link italic-hover" to="contact">
              <p className="regular primary italic-hover">contact</p>
            </Link>
            <Link to='/share' className="link italic-hover">
              <p className="regular primary italic-hover">share</p>
            </Link>
        </div>
      }
      <div className="toggle">
        <DarkModeToggle 
          onChange={toggleTheme}
          isDarkMode={theme === 'dark' ? true : false} 
          size={45} 
        />
      </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
