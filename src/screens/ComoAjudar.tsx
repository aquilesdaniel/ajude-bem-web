import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function ComoAjudar() {
  return (
    <>
      <Header />
      <main className="flex flex-col mx-64 gap-10">
        <section>
          <h1 className="text-4xl font-bold">
            {" "}
            Seu jesto pode transformar vidas
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Descubra como começar agora mesmo.
          </p>
        </section>

        <section className="flex bg-teal-100 p-4 rounded-lg overflow-hidden shadow-sm">
          <img src="pessoas-fisicas.png" alt="Pessoas se abraçando" />
          <div className="flex flex-col text-left justify-around">
            <h2 className="text-3xl font-bold ">Pessoa Física!</h2>
            <p className="text-lg">
              Você é alguém que se importa. Ao encontrar uma pessoa em situação
              de rua, você pode cadastrá-la na plataforma pelo seu celular de
              forma rápida e anônima. Seu gesto espalha empatia e pode ser o
              primeiro passo para uma mudança real na vida de alguém.{" "}
            </p>
            <div>
              <Link
                to="/sou-ong"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Quero ajudar!
              </Link>
            </div>
          </div>
        </section>

        <section className="flex bg-teal-100 p-4 rounded-lg overflow-hidden shadow-sm">
          <img src="pessoas-voluntarias.png" alt="Pessoas se abraçando" />
          <div className="flex flex-col text-left justify-around">
            <h2 className="text-3xl font-bold ">Sou voluntário!</h2>
            <p className="text-lg">
              Você quer doar seu tempo e fazer parte ativa da transformação.
              Você será redirecionado para ONGs e instituições que precisam da
              sua ajuda. Lá, como voluntário, você poderá fazer a diferença na
              vida das pessoas, ajudando no que for possível. Com poucas horas
              por semana, você ajuda a manter a rede do bem funcionando.{" "}
            </p>
            <div>
              <Link
                to="/sou-ong"
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Quero ser voluntário!
              </Link>
            </div>
          </div>
        </section>

        <section className="flex bg-teal-100 p-4 mb-8 rounded-lg overflow-hidden shadow-sm">
          <img src="pessoas-org.png" alt="Pessoas se abraçando" />
          <div className="flex flex-col text-left justify-around">
            <h2 className="text-3xl font-bold ">
              Sou uma ONG ou tenho um Projeto Social!
            </h2>
            <p className="text-lg">
              Você representa uma organização que já atua na linha de frente.
              Conectando sua ONG ao AjudaBem, você passa a receber alertas de
              pessoas cadastradas próximas da sua área de atuação. Assim,
              consegue agir com mais rapidez e direcionar ajuda a quem mais
              precisa.{" "}
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
      </main>
      <Footer />
    </>
  );
}

export default ComoAjudar;
