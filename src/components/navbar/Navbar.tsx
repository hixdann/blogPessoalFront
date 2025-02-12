import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-[#750012] text-white'>
            
                <div className="container flex justify-between text-lg px-4">
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <span>Postagens</span>
                        <span>Temas</span>
                        <span>Cadastrar tema</span>
                        <span>Perfil</span>
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar