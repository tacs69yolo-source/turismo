import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from './Componente/Boton.jsx'
import Redes from './redesSociales.jsx'
import Aside from './aside.jsx'
import Stack from './Stack.jsx'
import { Link, Route, Routes } from 'react-router'
import Home from './Componente/Pagina/Home.jsx'
import Trochita from './Trochita.jsx'
import LaHoya from './LaHoya.jsx'
import LaZeta from './LaZeta.jsx'
import Evento from './Eventos.jsx'
import Header from './Componente/Header.jsx'



function App() {
  
  const lista =[{
    text: "BIENVENIDO",
    link: "/"
  },
  {
    text: "EVENTOS",
    link: "/evento"
  },
   {
    text: "TROCHITA",
    link: "/trochita"
  },
   {
    text: "LA ZETA",
    link: "/lazeta"
  },
   {
    text: "LA HOYA",
    link: "/lahoya"
  },
]

  const listaItems= lista.map(item => <Boton text={item.text} link={item.link} />)

  return (
    
<div className="">
   <Header />
    <Aside style={'fixed top-0 h-screen letf-0 hidden sm:block' } />
    <Aside style={'fixed top-0 h-screen right-0 hidden sm:block'}/>

      <main className='w-full p-5 sm:px-40 mt-5 flex justify-center text-pretty'>
       
    
<div>


   
      <div className='flex gap-2 justify-center top-0 sticky w-full flex-wrap '>
        {listaItems}
      </div>
      <div className='my-3'>
           <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/evento'element={<Evento />} />
          <Route path='/trochita'element={<Trochita />} />
          <Route path='/lazeta'element={<LaZeta/>} />
          <Route path='/lahoya'element={<LaHoya />} />
        </Routes>
      </div>
       <Redes />
     </div>
     
     

        </main>
       
        
         <img className='h-40 w-full'  src="https://chubutpatagonia.gob.ar/wp-content/uploads/2020/06/02.jpg" alt="" />

</div>

    
  )
}

export default App
