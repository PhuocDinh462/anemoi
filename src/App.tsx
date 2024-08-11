import "./App.css";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}

export default App;
