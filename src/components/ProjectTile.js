//import { useState, useEffect } from 'react';
//import { DiPython, DiRust, DiJavascript1, DiHtml5, DiVim, DiCss3 } from 'react-icons/di';
//import { SiCplusplus, SiJupyter } from 'react-icons/si';
//import { VscTerminalPowershell } from 'react-icons/vsc';
import { useWindowWidth } from '@react-hook/window-size'

const ProjectTile = ({ key, theme, name, updated_at, created_at, languages_url, topics, desc, url }) => {
  const width = useWindowWidth();
  /*
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const fetchLanguage = async () => {
      fetch(languages_url)
      .then(res => res.json())
      .then(res => setLanguages(Object.keys(res)))
    }
    fetchLanguage();
  }, [languages_url])

  const langs = ['Python', 'Jupyter Notebook', 'Rust', 'JavaScript', 'HTML', 'CSS', 'C++', 'Vim script', 'Shell'];
  const langIcon = (lang) => {
    if (lang === 'Python') {
      return <DiPython/>
    } else if (lang === 'Jupyter Notebook') {
      return <SiJupyter/>
    } else if (lang === 'Rust') {
      return <DiRust/>
    } else if (lang === 'JavaScript') {
      return <DiJavascript1/>
    } else if (lang === 'HTML') {
      return <DiHtml5/>
    } else if (lang === 'CSS') {
      return <DiCss3/>
    } else if (lang === 'C++') {
      return <SiCplusplus/>
    } else if (lang === 'Vim script') {
      return <DiVim />
    } else if (lang === 'Shell') {
      return <VscTerminalPowershell />
    } 
  }
  */

  return (
    <div className="ProjectTile flex-column" key={key}>
      <div className="container flex-row">
          <a className="italic-hover" 
             href={url} target="noopener" 
             style={{maxWidth: width < 700 ? '100%' : '85%'}}>
            <h1 className="page-item italic-hover">{name}</h1>
          </a>

        {width > 700 &&
          <div className="metadata flex-row">
            <div className="metadata-item"><h2 className="page-item-subtext">/ {created_at}</h2></div>
          </div>
        }
      </div>
    </div>
  );
}

export default ProjectTile;

/*
{languages && languages.map((lang, i) => {
  console.log(lang);
  if (langs.includes(lang)) {
    console.log('is in here');
    return (<div key={i} className="sub-section-text lang-icon">
           {langIcon(lang)}
         </div>)
  }
})}

<div className="topics flex-row">
  {topics.map((topic, i) => {
    return <div key={i} className="topic"><h2 key={i} className="sub-section-text">/ {topic}</h2></div>
  })}
</div>
*/
