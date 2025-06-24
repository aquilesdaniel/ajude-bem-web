import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Que bom ter você com a gente!
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Crie sua conta para começar a ajudar ou para ficar por dentro das
            notícias.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Insira seu nome completo"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">CPF</label>
            <input
              type="text"
              placeholder="Insira seu CPF"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirme sua senha
            </label>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <Link to={"/"}>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md cursor-pointer"
            >
              Entrar
            </button>
          </Link>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p className="mb-2">Ou acesse com</p>
          <div className="flex justify-center gap-4">
            <button>
              <img src="/google.png" className="w-6 h-6" />
            </button>
            <button>
              <img src="/facebook.png" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
