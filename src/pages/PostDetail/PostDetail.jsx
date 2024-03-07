import postsAPI from "apis/postsAPI";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";

const getPost = async (id) => {
  const { data } = await postsAPI.getPostDetail(id);
  return data;
};

const updatePost = async (post) => {
  const { data } = await postsAPI.updatePost(post);
};

const PostDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((post) => updatePost(post), {
    onSuccess: () => {
      queryClient.invalidateQueries(["post", id]);
    },
  });

  const { data, error, isLoading } = useQuery(["post", id], () => getPost(id), {
    enabled: !!id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      id: 1,
      title: "3차 재수정하기",
      content: "수정된 내용",
      writer: "test_writer",
    });
  };

  console.log(data);

  return (
    <>
      <div>{data?.title}</div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Update Todo</button>
      </form>
    </>
  );
};

export default PostDetail;
