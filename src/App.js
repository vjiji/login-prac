import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "pages/Main/Main";
import Layout from "layout/Layout";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
