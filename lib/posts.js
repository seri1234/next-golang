import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(id) {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/post/'+ id)
  const data = await res.json()

  return data[0]
}

export function getAllPostIds() {

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

export async function getSortedPostsData() {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/posts')
  const data = await res.json()

    const sortData = data.sort(
      (a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (b.date > a.date) {
          return 1;
        }
        return 0;
      }
    )

  return sortData

  //sortDataは以下のような構造
  //return [
  //  {
  //    id: '3',
  //    title: "これは３個目の投稿です。",
  //    date: "2020-01-04",
  //    contentHtml: "これは3個目の投稿です。3個目の投稿はこちらが表示されます"
  //  },
  //  {
  //    id: '2',
  //    title: "これは２個目の投稿です。",
  //    date: "2020-01-03",
  //    contentHtml: "これは２個目の投稿です。２個目の投稿はこちらが表示されますこれは最初の投稿です。２個目の投稿はこちらが表示されますこれは最初の投稿です。２個目の投稿はこちらが表示されます",
  //  },
  //  {
   //    id: '1',
  //    title: "これは最初の投稿です。",
  //    date: "2020-01-02",
  //    contentHtml: "これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。これは最初の投稿です。まずはこの文章が表示されます。"
  //  },
  //]
}
