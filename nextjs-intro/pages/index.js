import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import nature from '../public/nature.jpg';

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>

      </Head>
      <h1 className={styles.heading1}>Hello Nextjs</h1>
      <Link href="/Login">
        <h1>Login</h1>
      </Link>

      <Image
        src={nature}
        alt="nature"
        width="300px"
        height="400px"
        placeholder="blur"
      />

    </div>
  );
}
