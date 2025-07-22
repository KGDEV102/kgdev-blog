import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";         
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Signup from "./pages/Signup.jsx"
import PostDetail from "./pages/PostDetail";
import MyPosts from "./pages/MyPosts.jsx";
import InforUser from "./pages/InforUser.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myposts" element={<MyPosts/>} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/infor" element={<InforUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
