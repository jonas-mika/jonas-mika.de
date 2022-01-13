// import { useState, useEffect } from 'react';
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Header = ( {theme, toggleTheme} ) => {
    return (
        <div className="Navbar" data-theme={theme}>
            <div className="main-container">
                <div className="logo no-select">
                    <Link to='/'>
                        <p className="bold change-color primary">jonas-mika</p>
                        <p className="regular italic primary" style={{paddingLeft: '3px'}}>senghaas</p>
                    </Link>
                </div>

                <div className="menu no-select">
                    <AnchorLink className="link italic-hover" href="#Projects">
                        <p className="regular primary italic-hover">projects</p>
                    </AnchorLink>
                    <AnchorLink className="link italic-hover" href="#Materials">
                        <p className="regular primary italic-hover">material</p>
                    </AnchorLink>
                    <a className="link italic-hover" href="/assets/general/resume.pdf" target="_blank" download="resume">
                        <p className="regular primary italic-hover">resume</p>
                    </a>
                    <AnchorLink className="link italic-hover" href="#Footer">
                        <p className="regular primary italic-hover">contact</p>
                    </AnchorLink>

                    <div className="toggle">
                        <DarkModeToggle 
                          onChange={toggleTheme}
                          isDarkMode={theme === 'dark' ? true : false} 
                          size={55} 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
