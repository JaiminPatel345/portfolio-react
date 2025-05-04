import ReactMarkdown from 'react-markdown';
import {LinkPreview} from './LinkPreview.jsx';

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
  
  .link-preview-card {
    display: inline-block;
  }
`;

// Custom renderer for markdown links to use LinkPreview
export const MarkdownRenderer = ({children}) => {
  const components = {
    a: ({node, ...props}) => (
        <LinkPreview url={props.href}>
          {props.children}
        </LinkPreview>
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