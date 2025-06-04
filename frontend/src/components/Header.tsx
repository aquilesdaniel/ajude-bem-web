import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex py-8 justify-between">
      <nav className="flex gap-4 items-center">
        <img src="/Logo.png" className="w-16 h-8" />
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
        <button className="px-4 py-2 text-sm font-medium text-teal-600 cursor-pointer">
          Buscar
        </button>

        <Link
          to="/minha-conta"
          className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium"
        >
          Minha Conta
        </Link>
      </div>
    </header>
  );
}
