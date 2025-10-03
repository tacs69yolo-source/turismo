
import CircularGallery from './CircularGallery.jsx'
import { GiCheckMark } from "react-icons/gi";
import { WiTrain } from "react-icons/wi";
import Boton2 from './Componente/Boton2.jsx';




const Trochita = () => {
  return (
    <div className=''>
      <h1 className='text-4xl flex'>
        La Trochita: Un Viaje al Corazón de la Patagonia
        <WiTrain />
      </h1>
      <p>
        Subite al Viejo Expreso Patagónico, más conocido como La Trochita, y viví una experiencia única sobre rieles. Este tren a vapor, con más de 100 años de historia, te invita a recorrer la inmensidad de la estepa patagónica como en los viejos tiempos: con sus vagones originales de madera, calefacción a salamandra y el inconfundible silbato que anuncia la aventura.
      </p>
      <h2>
        Un viaje lleno de historia y paisajes
      </h2>
      <p>
        Desde Esquel hasta Nahuel Pan, o en sus distintos recorridos turísticos, La Trochita no solo te transporta físicamente: te lleva en el tiempo. Es un museo rodante que despierta emociones en grandes y chicos, ideal para familias, viajeros curiosos, amantes del tren y de la naturaleza.
      </p>
      <h2>
        Ideal para fotógrafos y soñadores
      </h2>
      <div>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </div>
      <p>
        La Trochita serpentea entre montañas, cruzando ríos, valles y pueblos donde el tiempo parece haberse detenido. Cada curva es una postal, cada estación una historia.
      </p>
      <h2>
        ¿Por qué elegir La Trochita?
      </h2>
      <p>
        <ul>
          <li className='flex'>
            <GiCheckMark />
            Único tren a vapor en funcionamiento de su tipo
          </li>
          <li className='flex'>
            <GiCheckMark />
            Patrimonio cultural y símbolo de la Patagonia
          </li>
          <li className='flex'>
            <GiCheckMark />
            Actividades culturales en las estaciones (ferias artesanales, música, gastronomía)
          </li>
          <li className='flex mr-4'>
            <GiCheckMark />
            Apto para todas las edades
          </li>
          <li className='flex mr-4'>
            <GiCheckMark />
            Operaciones durante todo el año, con paisajes que cambian según la temporada
          </li>
        </ul>
      </p>
      <h2 className='flex'>
        Reservá tu pasaje y sentí el ritmo del pasado
        </h2>
        <br />
        <Boton2 />
      <br />
      <p>
        Viajá al estilo clásico y descubrí la Patagonia como nunca antes. La Trochita te espera con su encanto intacto y su chimenea humeante. ¡No te lo pierdas!
      </p>
      
    </div>
  )
}

export default Trochita
