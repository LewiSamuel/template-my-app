import Head from 'next/head';
import styles from '../styles/Home.module.scss';

// components
import Nav from '../components/Nav';

export default function Home() {

  return (
    <>
      <Head>
        <title>Lewix</title>
      </Head>
      <Nav />

      <div className={styles.container}>
        <h1 className={styles.promisse}>Make a promise here</h1>
      </div>
    </>
  );
}
