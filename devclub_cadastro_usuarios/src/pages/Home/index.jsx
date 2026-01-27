import { useState, useEffect, useRef } from 'react' // React Hooks
import Trash from '/images/Trash.svg'
import api from '../../services/api' 

function Home() {
    const [users, setUsers] = useState([])

    const inputName = useRef()
    const inputEmail = useRef()
    const inputAge = useRef()
    const inputPass = useRef()

    async function getUsers() {
            const usersFromApi = await api.get('/users')

            setUsers(usersFromApi.data)
    }

    async function createUsers() {
        await api.post('/users', {
            name: inputName.current.value,
            email: inputEmail.current.value,
            age: parseInt(inputAge.current.value),
            password: inputPass.current.value
        })

        getUsers()
    }

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)

        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-10">
            <div className="border border-gray-200/20 backdrop-blur-md w-full max-w-2xl flex flex-col items-center p-8 rounded-xl gap-6">
                
                <h1 className="text-3xl font-bold text-center text-white">
                    Cadastro de usuários
                </h1>

                <form className='flex w-full flex-col gap-4 items-center justify-center'>
                    <input placeholder="Nome" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white" type="text" ref={inputName} />
                    <input placeholder="E-Mail" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white" type="email" ref={inputEmail} />
                    <input placeholder="Idade" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white" type="number" ref={inputAge} />
                    <input placeholder="Senha" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white" type="password" ref={inputPass} />

                    <button className="bg-purple-600 rounded-full p-3 w-full max-w-xs cursor-pointer hover:bg-purple-700 active:bg-purple-800 transition text-gray-100 font-semibold text-lg active:scale-95" type="button" onClick={createUsers}>
                        Cadastrar
                    </button>
                </form>

                <div className="w-full bg-white rounded-xl p-4 mt-4 h-64 overflow-y-auto border-4 border-transparent
                    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
                    
                    {users.length > 0 ? (
                        users.map(user => (
                            <div key={user.id} className="flex flex-row justify-between items-center mb-4 last:mb-0 bg-gray-50 p-3 rounded-lg hover:shadow-sm transition">
                                <div>
                                    <p className='font-semibold text-gray-700'>Nome: <span className='font-normal'>{user.name}</span></p>
                                    <p className='font-semibold text-gray-700'>Idade: <span className='font-normal'>{user.age}</span></p>
                                    <p className='font-semibold text-gray-700'>Email: <span className='font-normal'>{user.email}</span></p>
                                </div>
                                <button onClick={() => deleteUsers(user.id)} className="rounded-full bg-white text-red-500 hover:bg-red-100 p-2 shadow-sm transition hover:scale-110">
                                    <img src={Trash} className="w-6 h-6" alt="Excluir" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <p className="text-gray-400 text-center">Nenhum usuário cadastrado ainda.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Home