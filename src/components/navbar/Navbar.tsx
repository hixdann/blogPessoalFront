import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }
    
    return (
        <>
            <div className='w-full bg-[#750012] text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg px-4">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                    <span>Postagens</span>
                        <span><Link to='/temas' className='hover:underline'>Temas</Link></span>
                        <span><Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link></span>
                        <span>Perfil</span>
                        <span><Link to='' onClick={logout} className='hover:underline'>Sair</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar