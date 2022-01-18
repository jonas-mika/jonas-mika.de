import { useState, useEffect } from 'react';

import Subpage from './Subpage';

const Share = () => {
    const [state, setState] = useState({
        "fetched": false,
        "data": null
    });

    useEffect(() => {
        if (!state.data) {
            const data = fetch(`https://jonas-mika.herokuapp.com/api/share`)
                        .then(res => res.json())
                        .then(data => {return data});

        const timer =  setTimeout(async () => { 
            setState({
                "fetched": true,
                "data": await data,
            });
        }, 10);
        return () => clearTimeout(timer);
        }
    }, [state.data]);

    return (
        <div id="Share" className="Share">
            <div className="main-container">
                <Subpage 
                    title={"share"} 
                    subtitle={"/ temporary downloads"}
                />

                <div className="container flex-column">
                    {state.data ? 
                        state.data.map((share, i) => {
                            return (<a className="italic-hover" href={`https://jonas-mika.herokuapp.com/api/share/${share}`} download={share}>
                                        <p className="sub-section-title bold">/ {share}</p>
                                    </a>)
                            })
                            :
                        <div className="primary">Loading...</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Share;
