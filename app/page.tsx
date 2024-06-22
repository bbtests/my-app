import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import routes from "@/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div>My Next.js App</div>

      <Link href={routes.support.contact}>contact</Link>
      <div style={{ width: 200, height: 2000 }}> djkfdjkdfkfd</div>
      <Footer />
    </main>
  );
}
