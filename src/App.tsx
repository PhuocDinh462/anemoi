import Cover from "./components/cover";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="w-full fixed">
        <Navbar />
      </div>
      <Cover />
    </>
  );
}

export default App;
