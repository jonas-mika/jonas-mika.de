// import { useState, useEffect } from 'react';
import { DarkModeToggle } from "react-dark-mode-toggle-2";


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
                    <a className="link italic-hover" href="https://www.github.com/jonas-mika">
                        <p className="regular secondary">projects</p>
                    </a>
                    <a className="link italic-hover" href="https://www.github.com/jonas-mika">
                        <p className="regular secondary">material</p>
                    </a>
                    <a className="link italic-hover" href="https://www.github.com/jonas-mika">
                        <p className="regular secondary">resume</p>
                    </a>
                    <a className="link italic-hover" href="https://www.github.com/jonas-mika">
                        <p className="regular secondary">contact</p>
                    </a>

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
