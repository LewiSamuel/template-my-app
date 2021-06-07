import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import { User } from '../models/User';
import { useEffect, useState } from 'react';

import { Nav } from '../components/Nav';

export default function Home() {
  const [Pessoa, setPessoa] = useState<User>({ Nome: '', Email: '', Type: 0 });

  useEffect(() => {
    setPessoa({ Nome: 'Lewi', Email: 'teste', Type: 1 });
  }, []);

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
