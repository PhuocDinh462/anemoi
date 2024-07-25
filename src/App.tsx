import Cover from "./components/cover";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="w-full fixed z-50">
        <Navbar />
      </div>
      <Cover />
      <div className="h-96 bg-red-500"></div>
    </>
  );
}

export default App;
