import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css';

const Resource = ({ course, setShowBackground }) => {
    const { resource } = useParams();
    const [data, setData] = useState(null);


    /*
    const fetchResource = () => {
        import(`${process.env.PUBLIC_URL}/public/content/${course}/${resource}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setData(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    
    useEffect(() => {
        fetchResource();
        setShowBackground(false);
    }, []);
    */

    return (
        <div id="Resource" className="Resource">
            <div className="markdown-body" style={{marginTop: '3rem'}}>
                <ReactMarkdown 
                    children={data} 
                    remarkPlugins={[remarkGfm]}
                    skipHtml={true}
                />
            </div>
        </div>)
}

export default Resource;
