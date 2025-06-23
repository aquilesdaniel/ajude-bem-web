import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Que bom te ver por aqui!</h2>
          <p className="text-sm text-gray-600 mt-1">
            Acesse sua conta para continuar ajudando ou sendo ajudado
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              E-mail ou CPF
            </label>
            <input
              type="text"
              placeholder="Insira seu e-mail ou CPF"
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
            <div className="text-right text-sm mt-1">
              <a href="#" className="text-teal-600 hover:underline">
                Esqueci minha senha
              </a>
            </div>
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
            <a href="www.google.com.br" className="cursor-pointer">
              <img src="/google.png" className="w-6 h-6" />
            </a>
            <a href="www.facebook.com.br" className="cursor-pointer">
              <img src="/facebook.png" className="w-6 h-6" />
            </a>
          </div>

          <p className="mt-4">
            Ainda não tem conta?{" "}
            <Link
              to="/cadastro"
              className="text-teal-600 font-medium hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
