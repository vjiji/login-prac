import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Main from "pages/Main";
import AddPost from "pages/AddPost";
import PostDetail from "pages/PostDetail";
import EditPost from "pages/EditPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route index element={<Main />} />
          <Route path="/newpost" element={<AddPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
