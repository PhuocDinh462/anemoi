import Cover from "./components/cover";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Story from "./components/story";
import Character from "./components/character";
import { createRef, useState } from "react";

function App() {
  const sections = ["top", "introduction", "story", "character", "movie"];
  const refs: React.RefObject<HTMLDivElement>[] = sections.map(() => createRef());
  const [showHeaderLogo, setShowHeaderLogo] = useState(false);

  return (
    <div onDragStart={(e) => e.preventDefault()}>
      <div className="w-full fixed z-[99]">
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
      <div ref={refs[4]}></div>
    </div>
  );
}

export default App;
