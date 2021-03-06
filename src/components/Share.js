import { useState, useEffect } from 'react';

import Subpage from './Subpage';
import { API } from '../configs.js';

const Share = () => {
  const [state, setState] = useState({
    "fetched": false,
    "data": null, 
    "error": null
  });

  useEffect(() => {
    fetch(`${API}/api/share`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setState({
            "fetched": true,
            "data": null,
            "error": true
          })
          return null;
        }
      })
      .then(res => {
        if (res) {
          setState({
            "fetched": true,
            "data": res,
            "error": false
          })
        }
      })
  }, []);

  const render = () => {
    if (!state.fetched) {
      return (
        <div className="primary">Loading...</div>
      )
    } else {
      if (state.data !== null) {
        return (
          state.data.map((share, i) => {
            return (
              <div className="flex-row">
                <h1 className="page-item large primary" style={{paddingRight: '.5rem'}}>/</h1>
                <div key={i} className="flex-row baseline">
                  <a key={i} 
                     className="italic-hover" 
                     href={`https://jonas-mika.herokuapp.com/api/share/${share}`} 
                     download={share}>
                    <h1 className="page-item large italic-hover">{share}</h1>
                  </a>
                </div>
              </div>
            )
          })
        )
      } else {
        return (
          <div className="primary">Nothing here yet</div>
        )
      }
    }
  }

  return (
    <div id="Share" className="Share">
      <div className="main-container">
        <Subpage 
          title={"share"} 
          subtitle={""}
        />

        <div className="container flex-column" style={{marginTop: '3rem'}}>
          { render() }
        </div>
      </div>
    </div>
  );
}

export default Share;
