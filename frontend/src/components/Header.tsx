import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex py-8 justify-between mx-64 ">
        <nav className="flex gap-6 items-center font-semibold ">
          <img src="/Logo.png" className="w-20 h-8" />
          <Link
            to="/como-ajudar"
            className="text-gray-700 hover:text-teal-600 hover:underline transition-colors"
          >
            Como ajudar
          </Link>
          <Link
            to="/noticias"
            className="text-gray-700 hover:text-teal-600 hover:underline transition-colors"
          >
            Notícias
          </Link>
          <Link
            to="/pontos-de-ajuda"
            className="text-gray-700 hover:text-teal-600 hover:underline transition-colors"
          >
            Pontos de Ajuda
          </Link>
          <Link
            to="/sobre"
            className="text-gray-700 hover:text-teal-600 hover:underline transition-colors"
          >
            Sobre
          </Link>
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
