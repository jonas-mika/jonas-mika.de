// import { useState, useEffect } from 'react';
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = ( {theme, toggleTheme} ) => {
    return (
        <div className="navbar" data-theme={theme}>
            <div className="main-container">
                <div className="logo no-select">
                    <a>
                        <p className="bold change-color primary">jonas-</p>
                        <p className="bold change-color primary">mika</p>
                        <p className="regular italic primary" style={{paddingLeft: '3px'}}>senghaas</p>
                    </a>
                </div>

                <div className="menu no-select">
                    <AnchorLink className="link italic-hover" href="#Projects">
                        <p className="regular secondary">projects</p>
                    </AnchorLink>
                    <AnchorLink className="link italic-hover" href="#Materials">
                        <p className="regular secondary">material</p>
                    </AnchorLink>
                    <a className="link italic-hover" href="/assets/general/resume.pdf" target="_blank" download="resume">
                        <p className="regular secondary">resume</p>
                    </a>
                    <AnchorLink className="link italic-hover" href="#Footer">
                        <p className="regular secondary">contact</p>
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
