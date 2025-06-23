export default function Perfil() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Meu Perfil</h1>
      <p className="text-sm text-gray-500 mb-6">
        Atualize suas informações pessoais e mantenha seu perfil sempre
        completo.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Insira seu nome completo"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="seuemail@email.com"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CPF</label>
          <input
            type="text"
            placeholder="000.000.000-00"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Senha atual
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nova senha
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
}
