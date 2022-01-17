import { useNavigate } from 'react-router-dom';

const Subpage = ({ title, subtitle, content }) => {
    const navigate = useNavigate();

    return (
        <div id="Subpage" className="Subpage">
            <button className="italic-hover" onClick={() => navigate(-1)}>
                <h2 className="secondary small italic-hover">back</h2> 
            </button>

            <h1 className="section-title">{ title }</h1> 
            <div className="flex-row"> 
                <p className="semester sub-section-text">{ subtitle }</p>
            </div>
        </div>
    );
};

export default Subpage;
