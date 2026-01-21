import '/src/index.css'

function Home() {

  return (

    <div className="bg-white/20 backdrop-blur-md w-full flex items-center justify-center h-120 lg:w-1/2 relative top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl">
      <form action="" className='p-4 flex w-full flex-col gap-4'>
        <h1>
          Cadastro de usuários
        </h1>
        <input className="focus:bg-gray-300 focus:border-0 rounded-md border-1 border-gray-400 hover:bg-gray-200 active:bg-gray-300 transition p-4 w-full bg-white" name="name" type="text" />
        <input className="focus:bg-gray-300 focus:border-0 rounded-md border-1 border-gray-400 hover:bg-gray-200 active:bg-gray-300 transition p-4 w-full bg-white" type="email" name="email" />
        <input className="focus:bg-gray-300 focus:border-0 rounded-md border-1 border-gray-400 hover:bg-gray-200 active:bg-gray-300 transition p-4 w-full bg-white" type="date" name="birth" />
        <input className="focus:bg-gray-300 focus:border-0 rounded-md border-1 border-gray-400 hover:bg-gray-200 active:bg-gray-300 transition p-4 w-full bg-white" type="password" name="password" />

        <button type="button">Cadastrar</button>
      </form>
    </div>

  )
}

export default Home
