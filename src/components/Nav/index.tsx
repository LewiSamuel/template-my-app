import React, { useEffect, useState } from 'react';
// import style
import styles from './nav.module.scss';

//import logic component 
import Session from '../../lib/Session';

export default function Nav() {

  // const [ Name, setName ] = useState(Session.get("Name"));

  const [ SessionData, setSession ] = useState<any>({_id: null});

  useEffect(() => {
    Session.getAll().then(setSession)
  },[]);

  return (
    <nav className={styles.container}>
      <a href="#" className={styles.logo}>
        <img src="/fedora-hat.svg" alt="Lewix" />
        <strong>Lewix</strong>
      </a>
      <ul>
        {/* 
        - - - - - - - - - - - - - - - */}
          {SessionData._id
          ? //  IF LOGGED
          <>
          <li>
            <a href="#!" onClick={Session.clear}>Sair</a>
          </li>
          <li>
            <a href="#!">{SessionData.Name}</a>
          </li>
          </>
          : //    IF NOT LOGGED
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Cadastro</a>
            </li>
          </>}
        {/* - - - - - - - - - - - - - - - 
        */}

      </ul>
    </nav>
  );
}
