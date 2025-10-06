import fondo from '../assets/img/fondo.jpg'
import logo from '../assets/img/RealFilms_Logo_Word.png'

export default function Login() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fondo})` }}>
            <div className="w-full h-lvh z-10 text-black text-3xl flex flex-col justify-center items-center">
                <div className='w-2/4 h-2/3 rounded-4xl flex flex-col p-2 items-center bg-gray-500/80 top-1/4 gap-4'>
                    <img src={logo} alt="RealFilms" className='opacity-100 w-2/5' />
                    <h2 className='opacity-100 text-3xl/7'>Login to RealFilms</h2>
                    <div className='flex flex-col justify-start gap-4 w-10/12'>
                        <h3 className='left-full text-3xl'>User</h3>
                        <input type="text" placeholder='Email' className='bg-white p-2 rounded-2xl text-2xl' />
                        <h3 className='left-full text-3xl'>Password</h3>
                        <input type="password" placeholder='Contraseña' className='bg-white p-2 rounded-2xl text-2xl' />
                        <button className='bg-red-600 rounded-4xl p-1 text-white'>Login</button>
                    </div>
                    <button>Sign Up</button>
                </div>
            </div>
        </section>
    )
}