import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex bg-neutral-600 text-gray-200 py-12 w-full px-64">
        <div className="w-full flex justify-between gap-8">
          <div>
            <div className="w-32">
              <img src="Logo.png" alt="AjudaBem" />
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <nav className="space-y-1">
              <h4 className="text-teal-400 font-semibold">Links rápidos</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/como-ajudar" className="hover:underline">
                    Como Ajudar
                  </Link>
                </li>
                <li>
                  <Link to="/noticias" className="hover:underline">
                    Notícias
                  </Link>
                </li>
                <li>
                  <Link to="/pontos-de-ajuda" className="hover:underline">
                    Pontos de Ajuda
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="hover:underline">
                    Sobre
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col space-y-1">
            <h4 className="text-teal-400 font-semibold">Fale Conosco</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <p>Clique aqui para falar conosco</p>
              </li>
              <li>
                <p>De Segunda a Sexta</p>
              </li>
              <li>
                <p>Das 9:00 às 17:00</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="space-y-1">
              <h4 className="text-teal-400 font-semibold">Baixe nosso app</h4>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md text-sm w-full cursor-pointer">
                Em breve
              </button>
            </div>

            <div className="flex justify-between h-full items-end">
              <a href="https://twitter.com">
                <img src="/icons/twitter.svg" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/instagram.svg" className="w-6 h-6" />
              </a>
              <a href="https://facebook.com">
                <img src="/icons/facebook.svg" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
