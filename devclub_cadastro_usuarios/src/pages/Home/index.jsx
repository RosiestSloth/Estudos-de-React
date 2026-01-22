function Home() {

  return (

    <div className="border border-gray-200/20 backdrop-blur-md w-full max-w-150 flex items-center justify-center h-130 rounded-xl">
      <form action="" className='p-4 flex w-full flex-col gap-4 items-center justify-center h-full'>
        <h1 className="text-2xl font-bold text-center text-white">
          Cadastro de usuários
        </h1>

        <label htmlFor="name" className="text-lg px-2 font-medium text-gray-100 w-full h-3">Nome: </label>
        <input placeholder="Nome" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 bg-white" name="name" type="text" />

        <label htmlFor="email" className="text-lg px-2 font-medium text-gray-100 w-full h-3">E-Mail: </label>
        <input placeholder="E-Mail" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 bg-white" type="email" name="email" />

        <label htmlFor="birth" className="text-lg px-2 font-medium text-gray-100 w-full h-3">Data de Nascimento: </label>
        <input className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 bg-white" type="date" name="birth" />
        
        <label htmlFor="password" className="text-lg px-2 font-medium text-gray-100 w-full h-3">Senha: </label>
        <input placeholder="Senha" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 bg-white" type="password" name="password" />

        <button className="bg-purple-600 rounded-full p-3 w-1/3 cursor-pointer hover:bg-purple-700 active:bg-purple-800 transition text-gray-100 font-semibold text-lg active:scale-99" type="button">Cadastrar</button>
      </form>
    </div>

  )
}

export default Home
