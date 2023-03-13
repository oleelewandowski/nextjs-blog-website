import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }) => {
  const { title, content, slug, image } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              fill
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
