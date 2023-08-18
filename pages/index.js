import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import gridstyles from '../components/grid.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Pagenation from '../components/pagenation';

export async function getStaticProps() {
  const offset = "0";
  const allPostsData = await getSortedPostsData(offset);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.grid}>
          {allPostsData.sortData.map(({ id, createdAt, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className={utilStyles.a} href={`/posts/${id}`}>
                <h2 className={gridstyles.grid_item_link} >
                  {title}
                </h2>
                <small className={gridstyles.lightText}>
                  <Date dateString={createdAt} />
                </small>
              </Link>
              <br />
            </li>
          ))}
        </ul>
        <Pagenation totalCount={allPostsData.totalCount} />
      </section>
    </Layout>
  );
}
