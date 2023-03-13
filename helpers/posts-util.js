import fs from "fs";
import path from "path";
import matter from "gray-matter";

const allPostsDirectory = path.join(process.cwd(), "content");
console.log(allPostsDirectory);

export const getPostsFiles = () => {
  return fs.readdirSync(allPostsDirectory);
};

export const getPostData = (fileName) => {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(allPostsDirectory, `${postSlug}.md`);

  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPostsData = postFiles.map((postFile) => getPostData(postFile));

  const sortedPostsData = allPostsData.sort((firstPost, secondPost) =>
    firstPost.date > secondPost.date ? -1 : 1
  );

  return sortedPostsData;
};

export const getFeaturedPosts = () => {
  const allPostsData = getAllPosts();

  const featuredPostsData = allPostsData.filter((post) => post.isFeatured);

  return featuredPostsData;
};
