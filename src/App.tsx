import Cover from "./components/cover";
import Navbar from "./components/navbar";
import Intro from "./components/intro";

function App() {
  return (
    <>
      <div className="w-full fixed z-50">
        <Navbar />
      </div>
      <Cover />
      <Intro />
    </>
  );
}

export default App;
