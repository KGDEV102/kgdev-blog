import { useState } from "react";
import Postcard from "../components/Postcard";
import "./Home.css"
function Home() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Exploring the Future of AI",
      description:
        "Learn the aid mechanisms supporting input on future AI issues.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "../assets/imgs/1_T8jGxkvqe8OBJLArxrDXnA.jpg" },
      likes: 40,
      comments: 10,
    },
    {
      id: 2,
      title: "Building a RESTful API with Node js",
      description: "Learn to build online examples to quickly get started.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/node.jpg" },
      likes: 42,
      comments: 25,
    },
    {
      id: 3,
      title: "Journey into Machine Learning",
      description: "Learn about proven methods to accelerate expertise.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/ml.jpg" },
      likes: 2000,
      comments: 48,
    },
    {
      id: 4,
      title: "Understanding JavaScript Closures",
      description: "Learn about common use-cases for closures.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "video", src: "/assets/closures.mp4" }, // Thêm video
      likes: 68,
      comments: 12,
    },
    {
      id: 5,
      title: "Productivity Soundtrack",
      description: "A curated lo-fi track to help you focus.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "audio", src: "/assets/lofi.mp3" }, // Thêm audio
      likes: 88,
      comments: 6,
    },
    {
      id: 6,
      title: "A Guide to Responsive Web Design",
      description: "Learn how to design websites using a modern layout system.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/responsive.jpg" },
      likes: 150,
      comments: 33,
    }
  ]);
  return (
    <>
      <div className="container">
        <input type="text" placeholder="Tìm kiếm..."></input>
        <div className="lists">
          <ul className="Postcard-lists">
            {list.map((item) => {
              return (
                <li>
                  <Postcard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    createdAt={item.createdAt}
                    media={item.media}
                    likes={item.likes}
                    comments={item.comments}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Home;
