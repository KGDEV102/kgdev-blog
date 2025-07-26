import HeroSection from "../../components/HeroSection/HeroSection";

import ListPosts from "../ListPosts";
import { useRef } from "react";
function Home() {
    const ListPostsRef = useRef();
    const scrollToListPosts = () => {
       ListPostsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <HeroSection onScrollClick={scrollToListPosts} />
       
          <ListPosts ref={ListPostsRef} />
        
      </>
    );
}

export default Home;