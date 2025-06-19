import Footer from "../components/Footer";
import Header from "../components/Header";

function Sobre() {
  return (
    <>
      <Header />
      <main className="flex flex-col mx-64 gap-10 min-h-screen">
        <section>
          <h2 className="text-4xl font-bold">
            Conectando quem pode ajudar com quem precisa de apoio.
          </h2>
          <p className="text-gray-500 mt-2">
            O AjudaBem é uma plataforma criada para aproximar pessoas dispostas
            a ajudar de quem vive em situação de vulnerabilidade — seja em
            situação de rua, com fome, sem acesso à saúde, sem moradia digna ou
            vivendo qualquer outra forma de exclusão social.
          </p>
          <br />
          <p className="text-gray-500">
            Nosso propósito é transformar empatia em ação. Através da
            plataforma, qualquer pessoa pode cadastrar alguém que precise de
            ajuda, e organizações sociais recebem essas informações para agir
            com mais rapidez e direcionamento.
          </p>
          <br />
          <p className="text-gray-500">
            Também oferecemos espaço para voluntários se conectarem com ONGs,
            participarem de ações presenciais e ajudarem em processos como
            triagem e suporte remoto.{" "}
            <b>Aqui, cada gesto importa. Cada pessoa conta.</b>
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-green-100 rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Nossa Missão</h2>
            <p className="text-sm">
              Conectar organizações e pessoas em situação de vulnerabilidade,
              promovendo acesso a recursos e apoio com segurança, privacidade e
              empatia, por meio de uma plataforma simples e acessível.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Nossa Visão</h2>
            <p className="text-sm">
              Ser a principal plataforma de apoio social no Brasil, reconhecida
              pela inovação, impacto positivo e capacidade de conectar quem
              precisa de ajuda a quem pode oferecer.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Nossos Valores</h2>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Empatia e Solidariedade</li>
              <li>Transparência</li>
              <li>Segurança e Privacidade</li>
              <li>Inovação e Sustentabilidade</li>
              <li>Inclusão e Diversidade</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Como surgiu a ideia?</h2>
          <p className="text-gray-500 mt-2">
            O AjudaBem nasceu da inquietação de perceber quantas pessoas passam
            por situações de vulnerabilidade todos os dias - e de como muitas
            vezes falta um meio simples e seguro para conectar quem quer ajudar
            com quem precisa de apoio. A ideia surgiu em um contexto acadêmico,
            mas foi além de um projeto de TCC: se transformou em uma iniciativa
            com potencial real de impacto social.
          </p>
          <br />
          <ul className="list-disc list-inside space-y-1">
            <li>
              Se qualquer pessoa pudesse registrar uma situação de
              vulnerabilidade com poucos cliques?
            </li>
            <li>
              Se ONGs recebessem essas informações de forma organizada, por
              localização, e com prioridade?
            </li>
          </ul>
          <p>
            Foi a partir dessas perguntas que criamos uma plataforma pensada
            para agilidade, empatia e transformação.
          </p>
        </section>

        <section className="bg-teal-600 text-white py-10 rounded-lg">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold">+1.200</p>
              <p className="text-sm">Pessoas cadastradas</p>
            </div>
            <div>
              <p className="text-2xl font-bold">+80</p>
              <p className="text-sm">Voluntários ativos</p>
            </div>
            <div>
              <p className="text-2xl font-bold">+20</p>
              <p className="text-sm">Organizações parceiras</p>
            </div>
            <div>
              <p className="text-2xl font-bold">+18</p>
              <p className="text-sm">Cidades em ação</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col text-center mb-8">
          <h2 className="text-lg font-semibold">
            Juntos, fazemos a diferença.
          </h2>
          <p>
            Você pode cadastrar alguém, se tornar voluntário ou conectar sua ONG
            ao AjudaBem. Escolha sua forma de ajudar e venha fazer parte dessa
            rede de transformação.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sobre;
