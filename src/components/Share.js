import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Share = () => {
    const [shares, setShares] = useState(null);

    const callApi = async (api) => {
        const response = await fetch(api);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        setShares(body);
    };

    useEffect(() => {
        if (!shares) {
            callApi('api/share');
        }
    }, []);


    return (
        <div id="Share" className="Share">
            <div className="main-container">
                <Link className="back italic-hover" to='/'><h2 className="secondary small italic-hover">back</h2></Link> 
                <h1 className="title">share</h1> 
                <div className="flex-row"> 
                    <p className="semester sub-section-text">/ temporary downloads</p>
                </div>
                <div className="container flex-row">
                    <div className="flex-column">
                        {shares &&
                            shares.map((share, i) => {
                                return (<a className="italic-hover" href={`/share/${share}`} target="_blank" download={share}>
                                            <p className="sub-section-title bold">/ {share}</p>
                                        </a>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;
