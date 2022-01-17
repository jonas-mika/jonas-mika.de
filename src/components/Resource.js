import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CopyBlock, dracula } from "react-code-blocks";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css';

import Loader from './Loader';

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

        const timer =  setTimeout(async () => { 
            setState({
                "fetched": true,
                "data": await data,
                "filetype": filetype
            });
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    const render = () => {
        if (state.fetched) {
            if (state.filetype === 'markdown' || state.filetype === 'txt') {
                return <ReactMarkdown 
                         children={state.data} 
                         remarkPlugins={[remarkGfm]}
                         skipHtml={true}
                        />
            } else {   
                return (<CopyBlock 
                    text={state.data}
                    language={state.filetype}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                />)
            }
        } else {
            return <Loader /> 
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
