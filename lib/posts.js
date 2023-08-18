export async function getPostData(id) {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/post/'+ id)
  const data = await res.json()

  return data[0]
}

export async function getAllPostIds() {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/postlist')
  const posts = await res.json()

  return posts.allPosts.map((post) => {
    return {
      params: {
        id: post.id,
        totalCount: posts.totalCount
      },

    };
  });
}

export async function getSortedPostsData(offset) {
  const limit = process.env.NEXT_PUBLIC_PER_PAGE

  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/posts?offset=' + offset +'&limit=' + limit)
  const data = await res.json()

    const sortData = data.allPosts.sort(
      (a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        if (b.createdAt > a.createdAt) {
          return 1;
        }
        return 0;
      }
    )

  return {
      sortData: sortData,
      totalCount: data.totalCount
    }

  //sortDataは以下のような構造
  //return
  //{
  //  "allPosts": [
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
  //  }
  //  ],
  //  "totalCount": 74
  //}
}
