import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import gridstyles from '../components/grid.module.css';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.grid}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className={utilStyles.a} href={`/posts/${id}`}>
                <h2 className={gridstyles.grid_item_link} >
                  {title}
                </h2>
                <small className={gridstyles.lightText}>
                  <Date dateString={date} />
                </small>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
