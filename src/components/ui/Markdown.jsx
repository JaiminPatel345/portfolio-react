import ReactMarkdown from 'react-markdown';

export const markdownStyles = `
  .markdown-content {
    display: inline;
  }
  
  .markdown-content p {
    display: inline;
    margin: 0;
  }
  
  .markdown-content a {
    color: var(--primary-500);
    text-decoration: none;
    transition: color 0.2s ease;
    position: relative;
  }
  
  .markdown-content a:hover {
    color: var(--primary-400);
    text-decoration: underline;
  }
  
  .markdown-content strong {
    font-weight: 600;
    color: var(--primary-500);
  }
  
  .dark .markdown-content strong {
    color: var(--primary-400);
  }
  
  .markdown-content em {
    font-style: italic;
  }
  
  /* Ensure the text is visible in both light and dark modes */
  .dark .markdown-content {
    color: #e0e0e0;
  }
`;

// Custom renderer for markdown links using regular anchor tags
export const MarkdownRenderer = ({markdown}) => {
  const components = {
    a: ({node, ...props}) => (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:underline">
          {props.children}
        </a>
    ),
    strong: ({node, ...props}) => (
        <strong className="font-semibold text-primary-500 dark:text-primary-400">
          {props.children}
        </strong>
    ),
  };

  return (
      <span className="markdown-content">
      <ReactMarkdown components={components}>
        {markdown}
      </ReactMarkdown>
    </span>
  );
};