import React from 'react'
import AñadirUsuario from './components/AñadirUsuario'
import Header from './components/Header'
import Usuarios from './components/Usuarios'

const App = () => {
  return (
    <>
      <Header />
      <div className='md:flex md:min-h-screen'>

      <div className='md:w-2/4 bg-cyan-700'>
    <AñadirUsuario/>
      </div>

      <div className='md:w-2/4 bg-gray-200 p-10 md:h-screen'>
     <Usuarios/>

      </div>

      </div>

    </>
  )
}

export default App