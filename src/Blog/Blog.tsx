import ReactMarkdown from "react-markdown";

const Blog = () => {
  const markdown = `
  # Mein Blog-Post
  Dies ist ein Beispiel für einen **Markdown**-basierten Blog-Post.

  - Punkt 1
  - Punkt 2
  - Punkt 3
  `;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default Blog;
