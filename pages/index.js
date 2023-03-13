import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "@/helpers/posts-util";
import Head from "next/head";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title> NextJS Course Blog</title>
        <meta
          name="description"
          content="Blog about programming and my other passions"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
