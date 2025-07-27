import { useState, useEffect, useMemo } from "react";
import { forwardRef } from "react";
import Postcard from "../components/Postcard";
import SkeletonPostcard from "../components/SkeletonPostcard";
import Pagination from "../components/Pagination";
import PostFilter from "../components/PostFilter";
import "./ListPosts.css";
const ListPosts =() => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  useEffect(() => {
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
        category: "Frontend",
        tags: ["React", "JavaScript", "JSX"],
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
        category: "Data",
        tags: ["Python", "ETL", "Pipeline"],
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
        category: "Dev Tips",
        tags: ["Git", "Version Control", "CLI"],
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
        category: "Frontend",
        tags: ["CSS", "Flexbox", "Grid"],
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
        category: "Data",
        tags: ["Python", "Beginner", "Syntax"],
        likes: 88,
        comments: 6,
      },
      {
        id: 6,
        title: "A Guide to Responsive Web Design",
        description:
          "Learn how to design websites using a modern layout system.",
        author: "John Doe",
        createdAt: "Apr 10, 2024",
        media: { type: "image", src: "/assets/responsive.jpg" },
        category: "Backend",
        tags: ["API", "REST", "Fetch"],
        likes: 150,
        comments: 33,
      },
      {
        id: 7,
        title: "A Guide to Responsive Web Design",
        description:
          "Learn how to design websites using a modern layout system.",
        author: "John Doe",
        createdAt: "Apr 10, 2024",
        media: { type: "image", src: "/assets/responsive.jpg" },
        category: "Frontend",
        tags: ["React", "useState", "Todo"],
        likes: 150,
        comments: 33,
      },
      {
        id: 8,
        title: "A Guide to Responsive Web Design",
        description:
          "Learn how to design websites using a modern layout system.",
        author: "John Doe",
        createdAt: "Apr 10, 2024",
        media: { type: "image", src: "/assets/responsive.jpg" },
        category: "Data",
        tags: ["Python", "Pandas", "Data Analysis"],
        likes: 150,
        comments: 33,
      },
      {
        id: 9,
        title: "A Guide to Responsive Web Design",
        description:
          "Learn how to design websites using a modern layout system.",
        author: "John Doe",
        createdAt: "Apr 10, 2024",
        media: { type: "image", src: "/assets/responsive.jpg" },
        category: "Data",
        tags: ["Python", "Pandas", "Data Analysis"],
        likes: 150,
        comments: 33,
      },
      {
        id: 10,
        title: "A Guide to Responsive Web Design",
        description:
          "Learn how to design websites using a modern layout system.",
        author: "John Doe",
        createdAt: "Apr 10, 2024",
        media: { type: "image", src: "/assets/responsive.jpg" },
        category: "Data",
        tags: ["Python", "Pandas", "Data Analysis"],
        likes: 150,
        comments: 33,
      },
      {
        id: 11,
        title: "A Guide to Responsive Web Design",
        description:
          "Learn how to design websites using a modern layout system.",
        author: "John Doe",
        createdAt: "Apr 10, 2024",
        media: { type: "image", src: "/assets/responsive.jpg" },
        category: "Data",
        tags: ["Python", "Pandas", "Data Analysis"],
        likes: 150,
        comments: 33,
      },
    ];
    setOriginalList(list);
    setList(list);
  }, []);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Giả lập 0.8s load

    return () => clearTimeout(timer);
  }, [currentPage]);

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

  const postPerPage = 10;
  const totalPages = Math.ceil(list.length / postPerPage);
  const visiblePost = useMemo(() => {
    const startIndex = (currentPage - 1) * postPerPage;
    return list.slice(startIndex, startIndex + postPerPage);
  }, [list, currentPage]);

  const categories = useMemo(
    () => [...new Set(originalList.map((p) => p.category))],
    [originalList]
  );
  const tags = useMemo(
    () => [...new Set(originalList.flatMap((p) => p.tags))],
    [originalList]
  );

  return (
    <>
      <div className="container ListPosts ">
        <PostFilter
          setList={setList}
          setCurrentPage={setCurrentPage}
          originalList={originalList}
          categories={categories}
          tags={tags}
        />

        <div className="lists">
          <ul className={`Postcard-lists slide-${slideDirection}`}>
            {isLoading ? (
              Array.from({ length: visiblePost.length }).map((_, i) => (
                <li key={i}>
                  <SkeletonPostcard />
                </li>
              ))
            ) : visiblePost.length === 0 ? (
              <div className="no-result">Không có bài viết...</div>
            ) : (
              visiblePost.map((item) => {
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
              })
            )}
          </ul>
          {visiblePost.length > 0 && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setSlideDirection(page > currentPage ? "right" : "left");
                setCurrentPage(page);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ListPosts;
