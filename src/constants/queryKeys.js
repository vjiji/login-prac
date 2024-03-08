const POSTS_QUERY_KEYS = {
  posts: "posts",
  postDetail: (id) => ["postDetail", id],
};

const COMMENTS_QUERY_KEYS = {
  comments: "comments",
};

export { POSTS_QUERY_KEYS, COMMENTS_QUERY_KEYS };
