import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.snippet} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postsFilenames = getPostsFiles();

  const slugs = postsFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
