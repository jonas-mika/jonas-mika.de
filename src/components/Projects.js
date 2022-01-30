import ProjectTile from './ProjectTile.js';

const Projects = ({ theme, projects, languages }) => {
  const topics = ['algorithms', 'machine-learning', 'network-analysis', 'nlp', 'webdev', 'other']

  return (
    <div id="Projects" className="Projects section">
      <div className="main-container">
        <h1 className="section-title">projects</h1>
        <div>
        {topics.map(topic => {
          return (
            <div id={topic} className="sub-section">
            <h2 className="sub-section-divider">{topic}</h2>
            {projects && 
              projects.map((repo, i) => {
                if (repo.topics.includes(topic)) { 
                  return (
                    <ProjectTile
                      key={i}
                      name={repo.name}
                      updated_at={repo.updated_at.slice(0, 4)}
                      created_at={repo.created_at.slice(0, 4)}
                      languages_url={repo.languages_url}
                      topics={repo.topics.filter(x => x !== topic).slice(0, 3)}
                      desc={repo.description}
                      url={`https://github.com/jonas-mika/${repo.name}`}
                    />
                  )
                } else {
                    return null;
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
