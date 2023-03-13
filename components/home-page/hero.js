import styles from "./hero.module.css";
import Image from "next/image";
import oliver from "@/public/images/site/oliver.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={oliver} alt="An image of myself" width={424} height={424} />
      </div>
      <h1> Hi, I'm Oliver! </h1>
      <p>
        Welcome to my NextJS app! As a Junior Frontend Developer, I completed
        this app as part of my NextJS course to hone my skills and showcase my
        abilities. I hope you enjoy exploring it! If you have any feedback or
        questions, feel free to let me know.
      </p>
    </section>
  );
};

export default Hero;
