import { useState } from "react";
import { useNavigate } from "react-router";

function CadastroNoticia() {
  const [form, setForm] = useState({
    titulo: "",
    subtitulo: "",
    categoria: "",
    conteudo: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaNoticia = {
      ...form,
      id: Date.now(),
      data: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      imagem: "noticia-imagem.png", // substituir por um upload real
    };

    // Salva no localStorage
    const noticiasSalvas = JSON.parse(localStorage.getItem("noticias") || "[]");
    noticiasSalvas.push(novaNoticia);
    localStorage.setItem("noticias", JSON.stringify(noticiasSalvas));

    // Redireciona para a tela de notícias
    navigate("/noticias");
  };

  // Verifica se todos os campos obrigatórios estão preenchidos
  const isFormValid =
    form.titulo.trim() &&
    form.categoria.trim() &&
    form.conteudo.trim() &&
    form.cidade.trim() &&
    form.estado.trim();

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section>
          <h2 className="text-2xl font-bold mb-2">Cadastrar nova notícia</h2>
          <p className=" text-sm text-gray-500 mb-6">
            Compartilhe histórias, ações ou informações relevantes com a
            comunidade. Preencha os campos abaixo para publicar uma nova notícia
            no Ajuda Bem.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Título da notícia*
            </label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Ex: Mutirão arrecada roupas para moradores de rua"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Subtítulo / Resumo
            </label>
            <input
              type="text"
              name="subtitulo"
              value={form.subtitulo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Ex: Ação promovida no centro de Cascavel mobiliza mais de 50 voluntários."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Categoria*</label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Selecione uma categoria</option>
              <option>Ações solidárias</option>
              <option>Campanhas</option>
              <option>Parcerias</option>
              <option>Eventos</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Conteúdo*</label>
            <textarea
              name="conteudo"
              value={form.conteudo}
              onChange={handleChange}
              rows={6}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Ex: Após ser identificado por um usuário da plataforma, um morador em situação de rua foi acolhido por uma ONG parceira em menos de 48 horas."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
                {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
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

export default CadastroNoticia;
