import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "components/common/Layout";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Main from "pages/Main/Main";
import AddPost from "pages/AddPost";
import PostDetail from "pages/PostDetail";
import EditPost from "pages/EditPost";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
