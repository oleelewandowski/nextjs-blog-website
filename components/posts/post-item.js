import styles from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, image, snippet, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} fill />
        </div>
        <div className={styles.content}>
          <h3> {title} </h3>
          <time> {formattedDate} </time>
          <p> {snippet} </p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
