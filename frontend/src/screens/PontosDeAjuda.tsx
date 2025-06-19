import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type PontoAjuda = {
  id: number;
  tipo: string;
  regiao: string;
  endereco: string;
};

const dados: PontoAjuda[] = [
  {
    id: 1,
    tipo: "Ponto de coleta de roupas",
    regiao: "Região Central",
    endereco:
      "Rua Esperança, 123 - Bairro Central, Cidade Solidária - SP, 01234-567",
  },
  {
    id: 2,
    tipo: "Ponto de coleta de alimentos",
    regiao: "Zona Norte",
    endereco:
      "Av. Solidariedade, 456 - Bairro Norte, Cidade Solidária - SP, 01234-567",
  },
  {
    id: 3,
    tipo: "Ponto de arrecadação de brinquedos",
    regiao: "Zona Sul",
    endereco:
      "Praça Alegria, 789 - Bairro Sul, Cidade Solidária - SP, 01234-567",
  },
  {
    id: 4,
    tipo: "Ponto de coleta de roupas",
    regiao: "Zona Leste",
    endereco:
      "Rua Esperança, 321 - Bairro Leste, Cidade Solidária - SP, 01234-567",
  },
  {
    id: 5,
    tipo: "Ponto de arrecadação de brinquedos",
    regiao: "Zona Oeste",
    endereco: "Av. União, 654 - Bairro Oeste, Cidade Solidária - SP, 01234-567",
  },
  {
    id: 6,
    tipo: "Ponto de coleta de alimentos",
    regiao: "Região Central",
    endereco:
      "Rua Esperança, 123 - Bairro Central, Cidade Solidária - SP, 01234-567",
  },
];

function PontosDeAjuda() {
  const [pontos] = useState<PontoAjuda[]>(dados);

  return (
    <>
      <Header />
      <main className="flex flex-col mx-64 gap-10 min-h-screen">
        <section>
          <h2 className="text-4xl font-bold">Encontre apoio perto de você</h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Nossa plataforma conecta você a diferentes tipos de pontos de ajuda,
            disponíveis por localização, horário ou tipo de serviço. Seja para
            buscar apoio, informar alguém, doar ou se voluntariar — aqui você
            encontra quem está fazendo a diferença.
          </p>
        </section>

        <section className="w-full p-4 bg-teal-600 rounded-lg ">
          <h3 className="text-white text-2xl font-semibold mb-6">
            Encontre pontos de ajuda perto de você
          </h3>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-teal-600 font-medium px-4 py-2 rounded-lg text-sm">
              Tipo de ponto
            </button>
            <button className="bg-white text-teal-600 font-medium px-4 py-2 rounded-lg text-sm">
              Região
            </button>
            <button className="bg-white text-teal-600 font-medium px-4 py-2 rounded-lg text-sm">
              Palavra-chave
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pontos.map((ponto) => (
            <div
              key={ponto.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col justify-between"
            >
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex gap-2 mb-2">
                  <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                    {ponto.tipo}
                  </span>
                  <span className="bg-sky-600 text-white text-xs px-2 py-1 rounded-full">
                    {ponto.regiao}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-800 mt-2">
                  {ponto.tipo}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{ponto.endereco}</p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium py-2 px-4 rounded transition">
                  Mostrar no mapa
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded">
            Ver mais pontos
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PontosDeAjuda;
