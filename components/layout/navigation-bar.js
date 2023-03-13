import Logo from "./logo";
import Link from "next/link";
import styles from "./navigation-bar.module.css";

const routes = [
  {
    id: "route-1",
    route: "/posts",
    text: "Posts",
  },
  {
    id: "route-2",
    route: "/contact",
    text: "Contact",
  },
];

const NavigationBar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          {routes.map(({ id, route, text }) => (
            <li key={id}>
              <Link href={route}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
