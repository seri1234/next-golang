import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Next blog</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}
