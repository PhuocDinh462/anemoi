import Cover from "./components/cover";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Story from "./components/story";
import Character from "./components/character";

function App() {
  return (
    <>
      <div className="w-full fixed z-[99]">
        <Navbar />
      </div>
      <Cover />
      <Intro />
      <Story />
      <Character />
    </>
  );
}

export default App;
