import { useState } from "react";
import { useNavigate } from "react-router";

function CadastroPessoa() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    genero: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    situacao: "",
    necessidades: "",
    observacoes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaPessoa = {
      ...form,
      id: Date.now(),
      dataCadastro: new Date().toISOString(),
    };

    // Salva no localStorage
    const pessoasSalvas = JSON.parse(localStorage.getItem("pessoas") || "[]");
    pessoasSalvas.push(novaPessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoasSalvas));

    // Redireciona para uma tela de listagem ou dashboard
    navigate("/configuracoes/pessoas");
  };

  // Verifica se todos os campos obrigatórios estão preenchidos
  const isFormValid =
    form.nome.trim() &&
    form.email.trim() &&
    form.telefone.trim() &&
    form.cpf.trim() &&
    form.dataNascimento.trim() &&
    form.genero.trim() &&
    form.endereco.trim() &&
    form.cidade.trim() &&
    form.estado.trim() &&
    form.cep.trim() &&
    form.situacao.trim();

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section>
          <h2 className="text-2xl font-bold mb-2">Cadastrar nova pessoa</h2>
          <p className="text-sm text-gray-500 mb-6">
            Preencha o formulário abaixo para cadastrar uma pessoa na
            plataforma. Quanto mais informações, melhor para direcionar o apoio
            e acompanhamento.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nome completo*
              </label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: Maria da Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: maria@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Telefone*
              </label>
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: (99) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CPF*</label>
              <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: 000.000.000-00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Data de nascimento*
              </label>
              <input
                type="date"
                name="dataNascimento"
                value={form.dataNascimento}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gênero*</label>
              <select
                name="genero"
                value={form.genero}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Selecione</option>
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Outro</option>
                <option>Prefiro não informar</option>
              </select>
            </div>
            <div className="md:col-span-2">
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
                placeholder="Ex: Rua Esperança, 123 - Bairro Central"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cidade*</label>
              <input
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: Cascavel"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Estado*</label>
              <select
                name="estado"
                value={form.estado}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">UF</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CEP*</label>
              <input
                type="text"
                name="cep"
                value={form.cep}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: 00000-000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Situação*
              </label>
              <select
                name="situacao"
                value={form.situacao}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Selecione</option>
                <option>Em situação de rua</option>
                <option>Em vulnerabilidade social</option>
                <option>Desempregado(a)</option>
                <option>Família em risco</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Necessidades principais
              </label>
              <textarea
                name="necessidades"
                value={form.necessidades}
                onChange={handleChange}
                rows={2}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Ex: Alimentação, abrigo, emprego, saúde..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Observações
              </label>
              <textarea
                name="observacoes"
                value={form.observacoes}
                onChange={handleChange}
                rows={2}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Informações adicionais relevantes"
              />
            </div>
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

export default CadastroPessoa;
