// import { useState, useEffect } from 'react';
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';

const Header = ( {theme, toggleTheme} ) => {
    const isMobile = useMobileDetect();

    return (
        <div className="Navbar" data-theme={theme}>
            <div className="main-container flex-row">
                <div className="logo no-select">
                    <Link to='/'>
                        <p className="bold change-color primary">jonas-mika</p>
                        <p className="regular italic primary" style={{paddingLeft: '3px'}}>senghaas</p>
                    </Link>
                </div>

                <div className="menu no-select flex-row">
                    {!isMobile.isMobile() &&
                            <AnchorLink className="link italic-hover" href="#Projects">
                                <p className="regular primary italic-hover">projects</p>
                            </AnchorLink>
                    }
                    {!isMobile.isMobile() &&
                            <AnchorLink className="link italic-hover" href="#CourseMaterials">
                                <p className="regular primary italic-hover">course materials</p>
                            </AnchorLink>
                    }
                    {!isMobile.isMobile() &&
                            <a className="link italic-hover" href="https://jonas-mika.herokuapp.com/api/assets/general/resume.pdf" target="noopener">
                                <p className="regular primary italic-hover">resume</p>
                            </a>
                    }
                    {!isMobile.isMobile() &&
                            <AnchorLink className="link italic-hover" href="#Footer">
                                <p className="regular primary italic-hover">contact</p>
                            </AnchorLink>
                    }
                    {!isMobile.isMobile() &&
                            <Link to='/share' className="link italic-hover">
                                <p className="regular primary italic-hover">share</p>
                            </Link>
                    }
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
