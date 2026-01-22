import { useEffect, useState } from 'react' // React Hooks
import Trash from '/images/Trash.svg'
import api from '../../services/api'

function Users() {

    const [users, setUsers] = useState([]);

    async function getUsers() {
        const usersFromApi = await api.get('/users');
        setUsers(usersFromApi.data);
    }   
    
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="w-100 bg-white rounded-xl p-4">
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user.id} className="flex flex-row justify-between items-center mb-4 last:mb-0">
                        <div>
                            <p className='font-semibold'>Nome: <span className='font-medium'>{user.nome}</span></p>
                            <p className='font-semibold'>Idade: <span className='font-medium'>{user.idade}</span></p>
                            <p className='font-semibold'>E-Mail: <span className='font-medium'>{user.email}</span></p>
                        </div>
                        <button type="button" className="rounded-full shadow-xl hover:shadow-md border border-gray-200 hover:scale-98 active:scale-94 size-12 flex items-center justify-center cursor-pointer transition hover:bg-gray-100 active:bg-gray-200">
                            <img src={Trash} className="size-6" alt="Excluir" />
                        </button>
                    </div>
                ))
            ) : (
                <div className="">
                    <p className="text-center">
                        Sem usuários cadastrados...
                    </p>
                </div>
            )}
        </div>
    )
}

export default Users