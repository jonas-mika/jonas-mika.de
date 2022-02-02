import { useNavigate } from 'react-router-dom';

const Subpage = ({ title, subtitle, content }) => {
    const navigate = useNavigate();

    return (
      <div id="Subpage" className="Subpage">
        <button className="italic-hover" onClick={() => navigate(-1)}>
          <p className="secondary small italic-hover">back</p> 
        </button>

        <h1 className="title" style={{marginBottom: '0.2rem', marginTop: '2rem'}}>{ title }</h1> 
        <div className="flex-row"> 
          <p className="semester page-item-subtext">{ subtitle }</p>
        </div>
      </div>
    );
};

export default Subpage;
