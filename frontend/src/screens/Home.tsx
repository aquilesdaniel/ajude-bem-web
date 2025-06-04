import Header from "../components/Header";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col w-full px-32">
      <Header />
      <section className="py-16">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 w-full text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Ajude quem precisa com um clique
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Cadastre um morador em situação de rua ou descubra pontos de apoio
              próximos a você.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4">
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
            src="/AjudaMorador.png"
            className="flex w-96 rounded-lg shadow-md self-end"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <blockquote className="italic text-xl text-gray-700">
            “Conectando quem quer ajudar com quem precisa de ajuda.”
          </blockquote>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 lg:px-8 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Como Funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
              <img
                src="/assets/icons/empatize.svg"
                alt="Empatia"
                className="w-12 h-12"
              />
              <p className="text-gray-600">
                Ao ver alguém em situação de rua, você pode agir com empatia e
                fazer a diferença.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
              <img
                src="/assets/icons/form.svg"
                alt="Formulário"
                className="w-12 h-12"
              />
              <p className="text-gray-600">
                Preencha um cadastro simples com local aproximado, situação e
                necessidades visíveis da pessoa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
              <img
                src="/assets/icons/organization.svg"
                alt="Organização"
                className="w-12 h-12"
              />
              <p className="text-gray-600">
                Organizações parceiras recebem os dados e entram em ação para
                prestar o atendimento necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Notícias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/noticia-placeholder.jpg"
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
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/noticia-placeholder.jpg"
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
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/noticia-placeholder.jpg"
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
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/noticia-placeholder.jpg"
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
          <div className="mt-8 text-right">
            <Link
              to="/noticias"
              className="text-teal-600 hover:underline font-medium"
            >
              Ver mais →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-teal-100 px-4 py-16 lg:px-8 lg:py-24 mt-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-teal-800">
            Sua ONG pode transformar vidas com a gente!
          </h2>
          <p className="text-lg text-teal-700 leading-relaxed">
            Todos os dias, recebemos alertas de pessoas em situação de
            vulnerabilidade que precisam de ajuda urgente. Com o AjudaBem,
            queremos conectar essas histórias a organizações como a sua que têm
            poder real de transformar vidas. Seja parte dessa rede do bem. Sua
            ação pode ser a esperança de alguém.
          </p>
          <Link
            to="/sou-ong"
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Unir forças agora!
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
