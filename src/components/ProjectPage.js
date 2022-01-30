import { Link } from 'react-router-dom';

import Subpage from './Subpage';

const ProjectPage = ({ projects }) => {
  return (
    <div className="ProjectPage">
      <div className="main-container">
        <Subpage 
            title={"projects"}
            subtitle={"/ list of all projects"}
        />
      </div>
    </div>
  )
}

export default ProjectPage;
