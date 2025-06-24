import { useState } from "react";
import { useNavigate } from "react-router";

function CadastroPontoAjuda() {
  const [form, setForm] = useState({
    tipo: "",
    regiao: "",
    endereco: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoPonto = {
      ...form,
      id: Date.now(),
    };

    // Salva no localStorage
    const pontosSalvos = JSON.parse(
      localStorage.getItem("pontosDeAjuda") || "[]"
    );
    pontosSalvos.push(novoPonto);
    localStorage.setItem("pontosDeAjuda", JSON.stringify(pontosSalvos));

    // Redireciona para a tela de pontos de ajuda
    navigate("/pontosdeajuda");
  };

  // Verifica se todos os campos obrigatórios estão preenchidos
  const isFormValid =
    form.tipo.trim() && form.regiao.trim() && form.endereco.trim();

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Cadastrar novo ponto de ajuda
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Cadastre um novo ponto de coleta, doação ou apoio para ampliar o
            alcance da solidariedade. Preencha os campos abaixo para adicionar
            um novo ponto de ajuda à plataforma.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Tipo de ponto*
            </label>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Selecione o tipo</option>
              <option>Ponto de coleta de roupas</option>
              <option>Ponto de coleta de alimentos</option>
              <option>Ponto de arrecadação de brinquedos</option>
              <option>Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Região*</label>
            <select
              name="regiao"
              value={form.regiao}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Selecione a região</option>
              <option>Região Central</option>
              <option>Zona Norte</option>
              <option>Zona Sul</option>
              <option>Zona Leste</option>
              <option>Zona Oeste</option>
              <option>Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Endereço completo*
            </label>
            <input
              type="text"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Ex: Rua Esperança, 123 - Bairro Central, Cidade Solidária - SP, 01234-567"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </>
  );
}

export default CadastroPontoAjuda;
