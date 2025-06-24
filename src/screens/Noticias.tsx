import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [mostrarTodas, setMostrarTodas] = useState(false);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("noticias") || "[]");
    setNoticias(dados);
  }, []);

  const handleExcluir = (id: number) => {
    const novasNoticias = noticias.filter((noticia: any) => noticia.id !== id);
    setNoticias(novasNoticias);
    localStorage.setItem("noticias", JSON.stringify(novasNoticias));
  };

  const noticiasExibidas = mostrarTodas ? noticias : noticias.slice(0, 6);

  return (
    <>
      <Header />
      <main className="flex flex-col mx-64 gap-10 min-h-screen">
        <section>
          <h2 className="text-4xl font-bold">
            Acompanhe quem está fazendo a diferença
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Veja as ações, histórias e iniciativas que estão mudando vidas com o
            AjudaBem. Inspire-se e descubra como a sua ajuda também pode
            transformar realidades.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticiasExibidas.map((noticia: any) => (
            <div
              key={noticia.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden relative"
            >
              <button
                onClick={() => handleExcluir(noticia.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-lg w-7 h-7 flex items-center justify-center hover:bg-red-700 transition cursor-pointer font-bold"
                title="Excluir notícia"
              >
                X
              </button>
              <img
                src={noticia.imagem}
                alt="Notícia"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {noticia.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {noticia.subtitulo}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {noticia.cidade}, {noticia.data}
                </p>
              </div>
            </div>
          ))}
        </div>

        {noticias.length > 6 && !mostrarTodas && (
          <div className="flex justify-center">
            <button
              onClick={() => setMostrarTodas(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md text-sm"
            >
              Mostrar mais
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Noticias;
