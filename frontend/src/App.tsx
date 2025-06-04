import { Route, Routes } from "react-router";
import Home from "./screens/Home";

function App() {
  console.log("App component rendered");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
