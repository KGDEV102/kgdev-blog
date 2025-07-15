import { useState,useEffect } from "react";
import Postcard from "../components/Postcard";
import "./Home.css";
function Home() {
  const list = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      description:
        "Learn the aid mechanisms supporting input on future AI issues.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: {
        type: "image",
        src: "../assets/imgs/1_T8jGxkvqe8OBJLArxrDXnA.jpg",
      },
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
    },
    {
      id: 7,
      title: "A Guide to Responsive Web Design",
      description: "Learn how to design websites using a modern layout system.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/responsive.jpg" },
      likes: 150,
      comments: 33,
    },
    {
      id: 8,
      title: "A Guide to Responsive Web Design",
      description: "Learn how to design websites using a modern layout system.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/responsive.jpg" },
      likes: 150,
      comments: 33,
    },
    {
      id: 9,
      title: "A Guide to Responsive Web Design",
      description: "Learn how to design websites using a modern layout system.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/responsive.jpg" },
      likes: 150,
      comments: 33,
    },
    {
      id: 10,
      title: "A Guide to Responsive Web Design",
      description: "Learn how to design websites using a modern layout system.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/responsive.jpg" },
      likes: 150,
      comments: 33,
    },
    {
      id: 11,
      title: "A Guide to Responsive Web Design",
      description: "Learn how to design websites using a modern layout system.",
      author: "John Doe",
      createdAt: "Apr 10, 2024",
      media: { type: "image", src: "/assets/responsive.jpg" },
      likes: 150,
      comments: 33,
    },
  ];
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const [currentPage, setCurrentPage] = useState(1);
  let visiblePost = [];
  const postPerPage = 10;
  const totalPages = Math.ceil(list.length / postPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startIndex = (currentPage - 1) * postPerPage;
  const endIndex = startIndex + postPerPage;
  visiblePost = list.slice(startIndex, endIndex);
  function getPageNumbers(currentPage, totalPages) {
    const siblingCount = 1;
    const boundaryCount = 1;
    const totalVisibleNumbers = siblingCount * 2 + 3 + boundaryCount * 2; // 7 nếu sibling = 1, boundary = 1

    if (totalPages <= totalVisibleNumbers) {
      // Trả về toàn bộ nếu số trang ít
      return [...Array(totalPages).keys()].map((x) => x + 1);
    }

    const pages = [];

    const leftSiblingStart = Math.max(
      currentPage - siblingCount,
      boundaryCount + 2
    );
    const rightSiblingEnd = Math.min(
      currentPage + siblingCount,
      totalPages - boundaryCount - 1
    );

    // 1. Các trang đầu tiên
    for (let i = 1; i <= boundaryCount; i++) {
      pages.push(i);
    }

    // 2. '...' bên trái
    if (leftSiblingStart > boundaryCount + 2) {
      pages.push("...");
    } else if (leftSiblingStart === boundaryCount + 2) {
      pages.push(boundaryCount + 1);
    }

    // 3. Các trang chính giữa
    for (let i = leftSiblingStart; i <= rightSiblingEnd; i++) {
      pages.push(i);
    }

    // 4. '...' bên phải
    if (rightSiblingEnd < totalPages - boundaryCount - 1) {
      pages.push("...");
    } else if (rightSiblingEnd === totalPages - boundaryCount - 1) {
      pages.push(totalPages - boundaryCount);
    }

    // 5. Các trang cuối
    for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
    // if (totalPages <= 7) {
    //   // Nếu tổng số trang ít, hiển thị tất cả
    //   return Array.from({ length: totalPages }, (_, i) => i + 1);
    // }

    // if (currentPage <= 3) {
    //   return [1, 2, 3, 4, "...", totalPages];
    // }

    // if (currentPage >= totalPages - 2) {
    //   return [
    //     1,
    //     "...",
    //     totalPages - 3,
    //     totalPages - 2,
    //     totalPages - 1,
    //     totalPages,
    //   ];
    // }

    // return [
    //   1,
    //   "...",
    //   currentPage - 1,
    //   currentPage,
    //   currentPage + 1,
    //   "...",
    //   totalPages,
    // ];
  }

  return (
    <>
      <div className="container">
        <input type="text" placeholder="Tìm kiếm..."></input>
        <div className="lists">
          <ul className={`Postcard-lists slide-${slideDirection}`}>
            {visiblePost.map((item) => {
              return (
                <li key={item.id}>
                  <Postcard
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
          <div className="paginations">
            <button
              className={currentPage === 1 ? "disable" : ""}
              onClick={() => {
                if (currentPage > 1) {
                  setSlideDirection("left");
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              «
            </button>
            {getPageNumbers(currentPage, totalPages).map((number) => (
              <button
                key={number}
                onClick={() => {
                  if (typeof number === "number") {
                    setSlideDirection(number > currentPage ? "right" : "left");
                    setCurrentPage(number);
                  }
                }}
                className={number === currentPage ? "active" : "" ? "dots" : ""}
              >
                {typeof number === "number" ? number : "..."}
              </button>
            ))}
            <button
              className={currentPage === totalPages ? "disable" : ""}
              onClick={() => {
                if (currentPage < totalPages) {
                  setSlideDirection("right");
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
