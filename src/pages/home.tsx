import Character from "@/components/character";
import Cover from "@/components/cover";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Movie from "@/components/movie";
import Navbar from "@/components/navbar";
import Story from "@/components/story";
import { createRef, useEffect, useState } from "react";
import { Loading } from "@/components/loading";
import { Backdrop } from "@mui/material";

export default function Home() {
  const sections = ["top", "introduction", "story", "character", "movie"];
  const refs: React.RefObject<HTMLDivElement>[] = sections.map(() => createRef());
  const [showLoading, setShowLoading] = useState(true);
  const loadingMinDuration = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, loadingMinDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div onDragStart={(e) => e.preventDefault()}>
      <Backdrop
        sx={{ backgroundColor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
        transitionDuration={1000}
      >
        <Loading />
      </Backdrop>

      {!showLoading && (
        <>
          <div className="w-fit fixed z-[99]">
            <Navbar sections={sections} refs={refs} />
          </div>
          <div ref={refs[0]}>
            <Cover />
          </div>
          <div ref={refs[1]}>
            <Intro />
          </div>
          <div ref={refs[2]}>
            <Story />
          </div>
          <div ref={refs[3]}>
            <Character />
          </div>
          <div ref={refs[4]}>
            <Movie />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
