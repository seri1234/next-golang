import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

const name = '技術ブログ';
export const siteTitle = 'Next.js and golang blog';

export default function Layout({ children, home }) {
  return (
    <div >
      <Head>
      </Head>
      <div className={styles.container}>
      <header className={styles.site_header} >
      <div className={styles.site_header_wrapper}>
        <Link className={styles.home} href="/">
          HOME
        </Link>
        <nav>
          <ul className={styles.nav_wrapper}>
            <li className={styles.nav_item_li}>
              <Link className={styles.nav_item_a}  href="/">
                  Profile
              </Link>
            </li>
          <li className={styles.nav_item_li}>
              <Link className={styles.nav_item_a}  href="/">
                  Profile
              </Link>
            </li>
          <li className={styles.nav_item_li}>
              <Link className={styles.nav_item_a}  href="/">
                  Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
      <main>
        {children}
      </main>
    </div>
    </div>
  );
}
