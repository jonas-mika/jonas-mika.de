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
              <a key={i} className="italic-hover" href={`https://jonas-mika.herokuapp.com/api/share/${share}`} download={share}>
                <p className="normal primary bold" style={{margin: '.2rem 0'}}>/ {share}</p>
              </a>
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
          subtitle={"/ temporary downloads"}
        />

        <div className="container flex-column">
          { render() }
        </div>
      </div>
    </div>
  );
}

export default Share;
