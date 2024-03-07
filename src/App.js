import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "pages/Main/Main";
import Layout from "layout/Layout";
import Login from "pages/Login";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { QueryClient, QueryClientProvider } from "react-query";
import AddPost from "pages/AddPost";
import PostDetail from "pages/PostDetail";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Login />} />
              <Route index element={<Main />} />
              <Route path="/newpost" element={<AddPost />} />
              <Route path="/posts/:id" element={<PostDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
