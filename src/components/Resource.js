import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CopyBlock, CodeBlock, dracula } from "react-code-blocks";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css';

const FILETYPES = {
        "md": "markdown",
        "txt": "txt",

        // coding
        "py": "python",
        "c": "c",
        "cpp": "cpp",
        "r": "r",
        "sql": "sql",
        "rust": "rust", 
        "js": "javascript",
        
    }

const Resource = ({ course, setShowBackground }) => {
    const { resource } = useParams();
    const [state, setState] = useState({
        "fetched": false,
        "data": null,
        "filetype": null
    });

    useEffect(async () => {
        // fetching resource data
        const data = fetch(`https://jonas-mika.herokuapp.com/api/assets/courses/${course}/${resource}`)
                        .then(res => res.text())
                        //.then(data => data.resolve())
                        .then(data => {return data});


        // getting filetype
        const [name, suffix] = resource.split('.');
        const filetype = FILETYPES[suffix];

        setState({
            "fetched": true,
            "data": await data,
            "filetype": filetype
        });
    }, []);


    const render = () => {
        console.log('rendering', state);
        if (state.fetched) {
            if (state.filetype === 'markdown' || state.filetype === 'txt') {
                return <ReactMarkdown 
                         children={state.data} 
                         remarkPlugins={[remarkGfm]}
                         skipHtml={true}
                        />
            } else {   
                return (<CodeBlock 
                    text={state.data}
                    language={state.filetype}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                />)
            }
        } else {
            return (<div>Loading...</div>)
        }
    }

    return (
        <div id="Resource" className="Resource">
            <div className="markdown-body" style={{marginTop: '3rem'}}>
                {render()}
            </div>
        </div>)
}

export default Resource;
