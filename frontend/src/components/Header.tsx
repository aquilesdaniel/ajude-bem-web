import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex py-8 justify-between mx-64">
        <nav className="flex gap-6 items-center font-semibold">
          <Link to="/">
            <img src="/Logo.png" className="w-20 h-8" alt="Logo" />
          </Link>

          <NavLink
            to="/comoajudar"
            className={({ isActive }) =>
              `text-gray-700 transition-colors ${
                isActive
                  ? "text-teal-600 underline"
                  : "hover:text-teal-600 hover:underline"
              }`
            }
          >
            Como ajudar
          </NavLink>

          <NavLink
            to="/noticias"
            className={({ isActive }) =>
              `text-gray-700 transition-colors ${
                isActive
                  ? "text-teal-600 underline"
                  : "hover:text-teal-600 hover:underline"
              }`
            }
          >
            Notícias
          </NavLink>

          <NavLink
            to="/pontosdeajuda"
            className={({ isActive }) =>
              `text-gray-700 transition-colors ${
                isActive
                  ? "text-teal-600 underline"
                  : "hover:text-teal-600 hover:underline"
              }`
            }
          >
            Pontos de Ajuda
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `text-gray-700 transition-colors ${
                isActive
                  ? "text-teal-600 underline"
                  : "hover:text-teal-600 hover:underline"
              }`
            }
          >
            Sobre
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-bold text-teal-600 cursor-pointer hover:bg-neutral-100 rounded-lg">
            Buscar
          </button>

          <Link
            to="/minha-conta"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-bold hover:bg-teal-700"
          >
            Minha Conta
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
