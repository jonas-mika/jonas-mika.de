import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CopyBlock, nord } from "react-code-blocks";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import 'github-markdown-css';

import Subpage from './Subpage';

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

const Resource = ({ course, theme }) => {
  const { resource } = useParams();
  const [state, setState] = useState({
    "fetched": false,
    "data": null,
    "filetype": null
  });

  useEffect(() => {
    // fetching resource data
    const data = fetch(`https://jonas-mika.herokuapp.com/api/assets/courses/${course}/${resource}`)
                  .then(res => res.text())
                  //.then(data => data.resolve())
                  .then(data => {return data});

    // getting filetype
    const suffix = resource.split('.')[1];
    const filetype = FILETYPES[suffix];

    const timer =  setTimeout(async () => { 
      setState({
        "fetched": true,
        "data": await data,
        "filetype": filetype
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [course, resource]);


  const render = () => {
    if (state.fetched) {
      if (state.filetype === 'markdown' || state.filetype === 'txt') {
        return (
          <div style={{width: '80%'}}>
            <div className="markdown-body" style={{marginTop: '3rem'}}>
              <ReactMarkdown 
                 children={state.data} 
                 remarkPlugins={[remarkGfm, remarkMath]}
                 rehypePlugins={[rehypeKatex, rehypeStringify]}
                 skipHtml={true}
              />
            </div>
          </div>
        )
      } else {   
          return (
          <div style={{width: '80%'}}>
            <CopyBlock 
              text={state.data}
              language={state.filetype}
              showLineNumbers={false}
              theme={nord}
              wrapLines
            />
          </div>
          )
        }
     } else {
       return  <div className="primary">Loading...</div>
     }
  }

  return (
    <div id="Resource" className="Resource">
      <Subpage
        title={resource}
        subtitle={""}
      />
      {render()}
    </div>)
}

export default Resource;
