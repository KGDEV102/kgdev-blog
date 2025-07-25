import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes/index.js";
import { Fragment } from "react/jsx-runtime";
import Navbar from "./Layout/DefaultLayout/Navbar/Navbar.jsx";
import Home from "./pages/Home";         
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Signup from "./pages/Signup.jsx"
import PostDetail from "./pages/PostDetail";
import MyPosts from "./pages/MyPosts.jsx";
import InforUser from "./pages/InforUser.jsx";
import Footer from "./Layout/DefaultLayout/Footer/Footer.jsx";

import DefaultLayout from "./Layout/DefaultLayout/index.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {publicRoutes.map((Page, index) => {
          let Layout = DefaultLayout;
          if (Page.Layout) {
            Layout = Page.Layout;
          } else if (Page.Layout === null) {
            Layout = Fragment;
          }
          return <Route key={index} path={Page.path} element={<Layout><Page.component/></Layout>} />
       })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
