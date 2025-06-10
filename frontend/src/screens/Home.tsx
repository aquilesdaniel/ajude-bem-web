import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-64 ">
        <section className="py-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-4 w-full text-left">
              <h1 className="text-5xl font-bold ">
                Ajude quem precisa com um clique
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Cadastre um morador em situação de rua ou descubra pontos de
                apoio próximos a você.
              </p>

              <div className="flex justify-start space-x-4">
                <Link
                  to="/quero-ajudar"
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
                >
                  Quero Ajudar
                </Link>
                <Link
                  to="/pontos-de-ajuda"
                  className="px-6 py-3 bg-white border border-teal-600 text-teal-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Pontos de Ajuda
                </Link>
              </div>
            </div>

            <img
              src="AjudaMorador.png"
              className="flex h-80 rounded-lg shadow-sm self-end"
            />
          </div>
        </section>

        <section>
          <div className="py-8 text-start">
            <h2 className="font-bold text-5xl mb-6">
              Você está seguro no Ajude Bem.
            </h2>
            <p className="text-gray-600 text-lg">
              Mais de duas mil pessoas escolhem o Ajude bem para transformar
              suas histórias todos os dias.{" "}
              <b>
                Juntos transformamos o destino de milhares de histórias e
                realizamos o impossível.
              </b>
            </p>
          </div>
        </section>

        <section className="py-8 w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Como Funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <img src="empatia-icon.svg" alt="Empatia" className="w-32 h-32" />
              <p className="text-gray-600">
                Ao ver alguém em situação de rua, você pode agir com empatia e
                fazer a diferença.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <img
                src="formulario-icon.svg"
                alt="Formulário"
                className="w-32 h-32"
              />
              <p className="text-gray-600">
                Preencha um cadastro simples com local aproximado, situação e
                necessidades visíveis da pessoa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <img
                src="organizacao-icon.svg"
                alt="Organização"
                className="w-32 h-32"
              />
              <p className="text-gray-600">
                Organizações parceiras recebem os dados e entram em ação para
                prestar o atendimento necessário.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Notícias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="noticia-imagem.png"
                alt="Notícia"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Morador recebe abrigo após ser cadastrado no AjudaBem
                </h3>
                <p className="text-sm text-gray-500">Cascavel, 25 de maio</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="noticia-imagem.png"
                alt="Notícia"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Morador recebe abrigo após ser cadastrado no AjudaBem
                </h3>
                <p className="text-sm text-gray-500">Cascavel, 25 de maio</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="noticia-imagem.png"
                alt="Notícia"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Morador recebe abrigo após ser cadastrado no AjudaBem
                </h3>
                <p className="text-sm text-gray-500">Cascavel, 25 de maio</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="noticia-imagem.png"
                alt="Notícia"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Morador recebe abrigo após ser cadastrado no AjudaBem
                </h3>
                <p className="text-sm text-gray-500">Cascavel, 25 de maio</p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-right">
            <Link
              to="/noticias"
              className="text-teal-600 hover:underline font-medium"
            >
              Ver mais
            </Link>
          </div>
        </section>

        <section className="flex bg-teal-100 px-4 py-16 my-8 rounded-lg overflow-hidden shadow-sm">
          <img src="pessoas-org.png" alt="Pessoas se abraçando" />
          <div className="flex flex-col gap-4 text-left justify-between">
            <h2 className="text-3xl font-bold ">
              Sua ONG pode transformar vidas com a gente!
            </h2>
            <p className="text-lg">
              Todos os dias, recebemos alertas de pessoas em situação de
              vulnerabilidade que precisam de ajuda urgente. Com o AjudaBem,
              queremos conectar essas histórias a organizações como a sua que
              têm poder real de transformar vidas.{" "}
              <b>
                Seja parte dessa rede do bem. Sua ação pode ser a esperança de
                alguém.
              </b>
            </p>
            <div>
              <Link
                to="/sou-ong"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Unir forças agora!
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
