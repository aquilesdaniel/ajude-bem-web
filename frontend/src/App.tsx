import { Route, Routes } from "react-router";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  console.log("App component rendered");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
