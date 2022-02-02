import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CopyBlock, nord } from "react-code-blocks";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import 'github-markdown-css';
import { useWindowWidth } from '@react-hook/window-size'

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
  const { topic, resource } = useParams();
  const { width } = useWindowWidth();
  console.log(width)
  const [state, setState] = useState({
    "fetched": false,
    "data": null,
    "filetype": null,
  });

  useEffect(() => {
    // fetching resource data
    const suffix = resource.split('.')[1];
    const filetype = FILETYPES[suffix];

    fetch(`https://jonas-mika.herokuapp.com/api/assets/courses/${course}/${topic}/${resource}`)
            .then(res => res.text())
            .then(res => {
              setState({
                "fetched": true,
                "filetype": filetype,
                "data": res
              })
            })
  }, [course, topic, resource]);

  const render = () => {
    if (state.fetched) {
      if (state.filetype === 'markdown' || state.filetype === 'txt') {
        return (
          <div style={{width: width > 1000 ? '80%' : '100%'}}>
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
          <div style={{width: width > 1000 ? '80%' : '100%'}}>
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
