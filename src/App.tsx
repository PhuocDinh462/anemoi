import Cover from "./components/cover";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Story from "./components/story";

function App() {
  return (
    <>
      <div className="w-full fixed z-50">
        <Navbar />
      </div>
      <Cover />
      <Intro />
      <Story />
    </>
  );
}

export default App;
