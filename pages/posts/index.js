import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/helpers/posts-util";
import { Fragment } from "react";
import Head from "next/head";

const AllPostPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta
          name="description"
          content="A list of my posts which I made about programming"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostPage;
