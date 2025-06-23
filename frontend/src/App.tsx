import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ComoAjudar from "./screens/ComoAjudar";
import Noticias from "./screens/Noticias";
import CadastroNoticia from "./screens/CadastroNoticia";
import PontosDeAjuda from "./screens/PontosDeAjuda";
import Sobre from "./screens/Sobre";
import Cadastro from "./screens/Cadastro";
import Configuracoes from "./screens/Configuracoes";
import Perfil from "./screens/Perfil";
import CadastroPontoAjuda from "./screens/CadastroPontoAjuda";
import CadastroPessoa from "./screens/CadastroPessoa";

function App() {
  console.log("App component rendered");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/configuracoes/*" element={<Configuracoes />}>
            <Route path="perfil" element={<Perfil />} />
            <Route path="cadastronoticia" element={<CadastroNoticia />} />
            <Route path="cadastropontoajuda" element={<CadastroPontoAjuda />} />
            <Route path="cadastropessoa" element={<CadastroPessoa />} />
          </Route>

          <Route path="/comoajudar" element={<ComoAjudar />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/pontosdeajuda" element={<PontosDeAjuda />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
