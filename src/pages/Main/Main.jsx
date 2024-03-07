import { useGetPostsQuery } from "hooks/postsQuery";

const Main = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      {posts.map(({ id, title, writer }) => (
        <div
          key={id}
          style={{
            marginTop: "20px",
            border: "1px solid black",
            padding: "4px",
          }}
        >
          <p>{title}</p>
          <p>{writer}</p>
        </div>
      ))}
    </>
  );
};

export default Main;
