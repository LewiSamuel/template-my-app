import styles from './nav.module.scss';

export function Nav() {
  return (
    <nav className={styles.container}>
      <a href="#" className={styles.logo}>
        <img src="/fedora-hat.svg" alt="Lewix" />
        <strong>Lewix</strong>
      </a>

      <ul>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Cadastro</a>
        </li>
      </ul>
    </nav>
  );
}
