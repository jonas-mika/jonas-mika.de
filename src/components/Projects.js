import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectTile from './ProjectTile.js';

const Projects = ({ theme }) => {
    // const token = "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";

    const [fetched, setFetched] = useState(false);
    const [repos, setRepos] = useState(null);

    const topics = ['algorithms', 'machine-learning', 'nlp', 'webdev', 'other']

    const fetchData = async () => {
        const api = "https://api.github.com/users/jonas-mika/repos";

        const res = await axios.get(api);
        const data = res.data;

        /*
        data = data.sort((a, b) => a.topics.slice(0) === b.topics.slice(0) || 
            Date.parse(b.updated_at) - Date.parse(a.updated_at));
            */
        setRepos(data);
        setFetched(true);
    }

    const fetchLanguages = async (repo) => {
        const languages = fetch(repo.languages_url)
          .then((response) => response.json())
          .then((languages) => {
            return Object.keys(languages);
          });

        return languages
    }



    useEffect(() => {
        if (!fetched) {
            fetchData();
        }
    }, [fetched]);

    return (
        <div id="Projects" className="Projects section">
            <div className="main-container">
                <h1 className="section-title">projects</h1>
                <div>
                    {repos && topics.map(topic => {
                        return (
                            <div id={topic} className="sub-section">
                                <h2 className="subheader secondary italic regular">{topic}</h2>
                                {repos.map((repo, i) => {
                                    if (repo.topics.includes(topic)) {
                                        return <ProjectTile
                                            key={i}
                                            name={repo.name}
                                            updated_at={repo.updated_at.slice(0, 4)}
                                            created_at={repo.created_at.slice(0, 4)}
                                            languages={fetchLanguages(repo)}
                                            topics={repo.topics.filter(x => x != topic).slice(0, 3)}
                                            desc={repo.description}
                                            url={`https://github.com/jonas-mika/${repo.name}`}
                                           />
                                    }
                                })}
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
