import OnlyNavbar from "../Layout/OnlyNavbar";
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home/Home";
import InforUser from "../pages/InforUser";
import ListPosts from "../pages/ListPosts";
import Login from "../pages/Login";
import MyPost from "../pages/MyPosts";
import PostDetail from "../pages/PostDetail/PostDetail";
import Signup from "../pages/Signup";

export const publicRoutes = [
    { path: "/", component: Home,Layout:OnlyNavbar },
    { path: "/listposts", component: ListPosts },
    { path: "/myposts", component: MyPost },
    { path: "/create", component: CreatePost },
    { path: "/infor", component: InforUser },
    { path: "/login", component: Login,Layout:null },
    { path: "/signup", component: Signup, Layout:null},
    { path: "/posts/:id", component: PostDetail}, //cái phần mypost sẽ có route lồng vào /myposts/posts/:id thê này ==> chừng nào làm tới nhớ cái này
    
]