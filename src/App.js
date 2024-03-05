import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "pages/Main/Main";
import Layout from "layout/Layout";
import Login from "pages/Login";
import Signup from "pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
