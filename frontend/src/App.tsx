import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ComoAjudar from "./screens/ComoAjudar";
import Noticias from "./screens/Noticias";
import CadastroNoticia from "./screens/CadastroNoticia";
import PontosDeAjuda from "./screens/PontosDeAjuda";
import Sobre from "./screens/Sobre";

function App() {
  console.log("App component rendered");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comoajudar" element={<ComoAjudar />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/cadastronoticia" element={<CadastroNoticia />} />
          <Route path="/pontosdeajuda" element={<PontosDeAjuda />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
