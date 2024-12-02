import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className=''>
            <div class="flex justify-between  border">
                <div class="mt-4 ml-4 rounded-md">
                        <img src="/NodeBanner.png" alt="LogoNode" style={{ maxWidth: '200px', height: 'auto' }} className=''/>
                    

                </div>
                
                <div className='mt-4' >
                    <button className='mx-4'>
                        Sobre nosotros
                    </button >
                    <button className='mx-4'>
                        Servicios
                    </button>
                    <button className='mx-4 bg-blue-400 p-4 rounded-md text-white font-bold mb-4'>
                        Inicar Sesión
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
