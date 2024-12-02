import React from 'react'

const Mainsection = () => {
  return (
    <div>
      <section className='flex justify-between '>
        <div className='mx-20 mt-20 font-bold bg-blue-500 p-4 text-white '> 
            <h1 className='text-3xl text-start'>Cambiamos la forma en la que  te comunicas con tu familia</h1>
            <h2 className='mt-4 text-xl '>Llamadas larga distancia gratis!</h2>
            <button className='bg-violet-900 mt-20 p-6 rounded-lg'>
            Comienza ya...
            </button>    
        </div>
        <div className="p-40 rounded-lg">
            <img src='/familyLanding.jpg' alt="LogoNode" style={{ maxWidth: '600px', height: 'auto' }} className='rounded-lg'/>
        </div>
      </section>
    </div>
  )
}

export default Mainsection
