import postsAPI from "apis/postsAPI";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [test, setTest] = useState();
  // useEffect(async () => {
  //   const data = await postsAPI.getPosts();
  //   setData(data);
  // }, []);

  const getPost = async () => {
    const { data } = await postsAPI.getPosts();
    setTest(data);
  };
  useEffect(() => {
    getPost();
  }, []);
  console.log(test);
  return <div>Main</div>;
};

export default Main;
