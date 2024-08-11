import Character from "@/components/character";
import Cover from "@/components/cover";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Movie from "@/components/movie";
import Navbar from "@/components/navbar";
import Story from "@/components/story";
import { createRef, useState } from "react";

export default function Home() {
  const sections = ["top", "introduction", "story", "character", "movie"];
  const refs: React.RefObject<HTMLDivElement>[] = sections.map(() => createRef());
  const [showHeaderLogo, setShowHeaderLogo] = useState(false);

  return (
    <div onDragStart={(e) => e.preventDefault()}>
      <div className="w-fit fixed z-[99]">
        <Navbar sections={sections} refs={refs} showHeaderLogo={showHeaderLogo} />
      </div>
      <div ref={refs[0]}>
        <Cover setShowHeaderLogo={setShowHeaderLogo} />
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
    </div>
  );
}
