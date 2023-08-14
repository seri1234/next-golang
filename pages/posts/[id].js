import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { marked } from 'marked';
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";

export async function getStaticProps({ params }) {

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  marked.setOptions({
    highlight: (code, lang) => {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.createdAt} />
        </div>
        <div className={utilStyles.contentText} dangerouslySetInnerHTML={{ __html: marked.parse(postData.contentHtml)}}  />
      </article>
    </Layout>
  );
}
