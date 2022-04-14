import React, { useEffect, useRef } from "react";

const Comments: React.FC = () => {
  const commentRef = useRef<HTMLDivElement>(null);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    if (renderCount.current === 0) {
      appendComments();
    }
    renderCount.current = 1;
  }, []);

  //! Solution source: https://github.com/taniarascia
  function appendComments() {
    const commentScript = document.createElement("script");
    //  const theme = getTheme();

    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    commentScript.setAttribute("repo", "GCnomore/comments");
    commentScript.setAttribute("issue-term", "title");
    commentScript.setAttribute("theme", "github-dark");
    commentScript.setAttribute("crossorigin", "anonymous");

    if (commentRef && commentRef.current) {
      commentRef.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentRef}`);
    }
  }
  return <div ref={commentRef} />;
};

export default Comments;
