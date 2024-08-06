'use client';
import { useEffect } from "react";
import Link from "next/link";
import routes from "@/routes";
import styles from "@/app/page.module.scss";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}
