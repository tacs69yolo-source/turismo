import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from './Componente/Boton.jsx'
import Redes from './redesSociales.jsx'
import Aside from './aside.jsx'
import Stack from './Stack.jsx'
import ShinyText from './ShinyText';
import { Link, Route, Routes } from 'react-router'
import Home from './Componente/Pagina/Home.jsx'
import Trochita from './Trochita.jsx'
import LaHoya from './LaHoya.jsx'
import LaZeta from './LaZeta.jsx'
import CircularGallery from './CircularGallery.jsx'
import MagicBento from './MagicBento.jsx'




  
import Evento from './Evento.jsx'


function App() {

  
  const lista =[{
    text: "SENDERISMO",
    link: "/"
  },
  {
    text: "PARQUE",
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
    <div className="col-span-6 row-span-2 h-135 w-full hover:scale-103 duration-300 ease-in-out bg-cover bg-center bg-[url(https://www.clarin.com/img/2023/12/07/4Oiud0zVl_1256x620__1.jpg)]">
    <p className='w-35 h-35 justify-self-end'>
      <img src="/Tutu.jpeg" alt="" />
    </p>
    <p className='justify-self-star text-7xl italic font-serif  text-shadow-amber-900 text-center'>
      TURISMO ESQUEL

    </p>
    <h3 className='justify-self-star text-center'>
      Patagonia Argentina
    </h3>

    

    <div className="flex">
      <Aside className="hidden"/>
      <main className='w-2/3 mt-5'>
       
   
      <div className='flex gap-2 justify-center top-0 sticky w-full flex-wrap '>
        {listaItems}
      </div>
      <div className='px-10'>
           <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/evento'element={<Evento />} />
          <Route path='/trochita'element={<Trochita />} />
          <Route path='/lazeta'element={<LaZeta/>} />
          <Route path='/lahoya'element={<LaHoya />} />

        </Routes>
      </div>
    

  
    <div className="col-span-4 col-start-2 row-start-8">
      <h1>
        Cronograma y localizacion de las actividades
      </h1>
      <p>
        Componen la Fiesta un amplio conjunto de actividades presenciales que se realizarán tanto en Esquel y Trevelin, como en el Parque Nacional Los Alerces, evidenciando así el espíritu comarcal de la celebración. El cronograma completo y el detalle de la localización de cada una de las actividades de la edición 2025 se despliegan a continuación.
      </p>
      <Redes />
    </div>
    <div className="col-span-6 row-start-9">
 
    </div>



        </main>
        <Aside />
        </div>
    <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>

    </div>
         <img className='h-40 w-full'  src="https://chubutpatagonia.gob.ar/wp-content/uploads/2020/06/02.jpg" alt="" />
</div>

    
  )
}

export default App
