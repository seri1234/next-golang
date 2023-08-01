import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(id) {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/post/'+ id)
  const data = await res.json()

  return data
}

export function getAllPostIds() {

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
    return [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      }
    ]
}


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return [
    {
      id: '1',
      title: "これは最初の投稿です。",
      date: "2020-01-02",
      contentHtml: "これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。"
    },
    {
      id: '2',
      title: "これは２個目の投稿です。",
      date: "2020-01-03",
      contentHtml: "これは２個目の投稿です。２個目の投稿はこちらが表示されますこれは最初の投稿です。２個目の投稿はこちらが表示されますこれは最初の投稿です。２個目の投稿はこちらが表示されます",
    },
    {
      id: '3',
      title: "これは３個目の投稿です。",
      date: "2020-01-04",
      contentHtml: "これは3個目の投稿です。3個目の投稿はこちらが表示されます"
    },
    {
      id: '4',
      title: "これは4個目の投稿です。",
      date: "2020-01-05",
      contentHtml: "これは4個目の投稿です。4個目の投稿はこちらが表示されます"
    },
    {
      id: '5',
      title: "これは5個目の投稿です。",
      date: "2020-01-05",
      contentHtml: "これは5個目の投稿です。5個目の投稿はこちらが表示されます"
    },
    {
      id: '6',
      title: "これは6個目の投稿です。",
      date: "2020-01-06",
      contentHtml: "これは5個目の投稿です。5個目の投稿はこちらが表示されます"
    },
    {
      id: '7',
      title: "これは7個目の投稿です。",
      date: "2020-01-08",
      contentHtml: "これは7個目の投稿です。7個目の投稿はこちらが表示されます"
    },
  ]
}
