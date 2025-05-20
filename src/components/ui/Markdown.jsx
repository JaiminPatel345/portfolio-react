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
    color: #8ab4f8;
    text-decoration: none;
    transition: color 0.2s ease;
    position: relative;
  }
  
  .markdown-content a:hover {
    color: #afc9ff;
    text-decoration: underline;
  }
  
  .markdown-content strong {
    font-weight: 600;
    color: #f0f0f0;
  }
  
  .markdown-content em {
    font-style: italic;
    color: #d0d0d0;
  }
`;

// Custom renderer for markdown links using regular anchor tags
export const MarkdownRenderer = ({children}) => {
  const components = {
    a: ({node, ...props}) => (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="text-[#8ab4f8] hover:text-[#afc9ff] hover:underline">
          {props.children}
        </a>
    ),
  };

  return (
      <span className="markdown-content">
      <ReactMarkdown components={components}>
        {children}
      </ReactMarkdown>
    </span>
  );
};