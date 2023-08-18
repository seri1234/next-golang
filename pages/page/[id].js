import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData, getAllPostIds } from '../../lib/posts';
import gridstyles from '../../components/grid.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import Pagenation from '../../components/pagenation';

export async function getStaticProps({params}) {
  const id = params.id;
  const perPage = process.env.NEXT_PUBLIC_PER_PAGE
  const offset = (id - 1) * perPage
  const allPostsData = await getSortedPostsData(offset);

  return {
    props: {
      allPostsData,
      id,
    },
  };
}

export async function getStaticPaths() {
    const repos = await getAllPostIds();

    const perPage = process.env.NEXT_PUBLIC_PER_PAGE;
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(repos[0].params.totalCount / perPage)).map((repo) => `/page/${repo}`);
    return { paths, fallback: false };
  }

export default function BlogPage({ allPostsData,id }) {
  return (
    <Layout BlogPageId >
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
        <Pagenation totalCount={allPostsData.totalCount} id={id} />
      </section>
    </Layout>
  );
}
