import { useState, useEffect } from 'react';
import { DiPython, DiRust, DiJava, DiJavascript1, DiHtml5, DiVim, DiCss3 } from 'react-icons/di';
import { SiCplusplus, SiJupyter } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';


const ProjectTile = ({ theme, name, updated_at, created_at, languages, topics, desc, url }) => {
    const [langs, setLangs] = useState(null);

    const getLangs = () => {
        languages.then((a) => {
            setLangs(a);
      });
    };

    useEffect(() => {
        getLangs();
    }, [languages])


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

    return (
        <div className="ProjectTile flex-column">
            <div className="container flex-row">
                <a className="italic-hover" href={url} target="_blank">
                    <h1 className="project-title primary italic-hover">{name}</h1>
                </a>

                <div className="metadata flex-row">
                    <div className="languages flex-row">
                    {langs && langs.map((lang, i) => {
                        return (<div key={i} className="metadata-item lang-icon">
                                   {langIcon(lang)}
                               </div>)
                    })}
                    </div>

                    <div className="metadata-item"><h2 className="bold primary">{created_at}</h2></div>

                    <div className="topics flex-row">
                        {topics.map((topic, i) => {
                            return <div key={i} className="topic metadata-item"><h2 key={i} className="bold primary">/ {topic}</h2></div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectTile;
