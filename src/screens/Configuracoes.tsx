import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Configuracoes() {
  return (
    <>
      <Header />
      <main className="flex flex-row mx-64 min-h-screen">
        <aside className="w-64 p-6 min-h-screen flex-shrink-0">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-teal-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
              M
            </div>
            <p className="mt-2 text-center text-sm font-semibold">
              Maylo dos Santos Duarte
            </p>
            <NavLink
              to="/"
              className="mt-2 px-4 py-2 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700"
            >
              Meus Cadastros
            </NavLink>
          </div>

          <nav className="space-y-2 text-sm">
            <div className="mt-4">
              <p className="font-bold text-xs uppercase">Cadastros</p>
              <NavLink
                to="/configuracoes/cadastropessoa"
                className={({ isActive }) =>
                  `block mt-1 transition-colors text-gray-700 ${
                    isActive
                      ? "text-teal-600 underline font-bold"
                      : "hover:text-teal-600 hover:underline"
                  }`
                }
              >
                Pessoas
              </NavLink>
              <NavLink
                to="/configuracoes/cadastronoticia"
                className={({ isActive }) =>
                  `block transition-colors text-gray-700 ${
                    isActive
                      ? "text-teal-600 underline font-bold"
                      : "hover:text-teal-600 hover:underline"
                  }`
                }
              >
                Notícias
              </NavLink>
              <NavLink
                to="/configuracoes/cadastropontoajuda"
                className={({ isActive }) =>
                  `block transition-colors text-gray-700 ${
                    isActive
                      ? "text-teal-600 underline font-bold"
                      : "hover:text-teal-600 hover:underline"
                  }`
                }
              >
                Pontos de Ajuda
              </NavLink>
            </div>

            <div className="mt-4">
              <p className="font-bold text-xs uppercase">Perfil</p>
              <NavLink
                to="/configuracoes/perfil"
                className={({ isActive }) =>
                  `block transition-colors text-gray-700 ${
                    isActive
                      ? "text-teal-600 underline font-bold"
                      : "hover:text-teal-600 hover:underline"
                  }`
                }
              >
                Meu Perfil
              </NavLink>
            </div>
          </nav>
        </aside>

        <section className="flex-1">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
