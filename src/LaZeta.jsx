import React from 'react'
import Actidades from './actividades.jsx'

const LaZeta = () => {
const listEventos=[
  {
    fecha:"Sábado 20 de septiembre",
    hora:"08:00 a 16:00 horas",
    lugar:"Esquel",
    descripcion:"Edificio de aulas de la UNPSJB, Ruta 259, km 16,41. Curso de iniciación a la observación de aves, organizado por el PNLA y COA Diucon. Inscripciones en este link: https://forms.gle/t5cKd55FkjJFpeuu9",
  },
  {
    fecha:"Domingo 21 de septiembre",
    hora:"08:00 a 13:00 horas",
    lugar:"Esquel",
    descripcion:"Reserva Natural Urbana Laguna La Zeta. Salida de campo del Curso de iniciación a la observación de aves, organizada por el PNLA y COA Diucon.",
  },
  {
    fecha:"Lunes 22 de septiembre",
    hora:"16:00 horas",
    lugar:"PNLA",
    descripcion:"Centro de Visitantes de Villa Futalaufquen. Taller de Anfitrión Turístico 2025. Organizado por el Ministerio de Turismo y Áreas Protegidas de Chubut. Este taller brindará las herramientas para mejorar la experiencia de cada visitante. Inscripciones en este link: http://bit.ly/4naka8y",
  },
  {
    fecha:"Martes 23 de septiembre",
    hora:"10:00 horas.",
    lugar:"Esquel",
    descripcion:" Centro Cultural Melipal: Evento inaugural de la Fiesta Entrega de premios “Concurso educativo sobre el corredor biológico entre la Reserva Natural Urbana Laguna La Zeta y el Parque Nacional Los Alerces”. Entrega de certificados de finalización de curso a Informantes Turísticos Centro Formación Profesional 655",
  },
  {
    fecha:"Martes 23 de septiembre",
    hora:"14:00 y 16:00 horas.",
    lugar:"Esquel",
    descripcion:"Plaza San Martin. Guiado del Reloj de sol y las baldosas con la historia de la ciudad. Guía: Daniela Crespi. Invita: Asociación de Guías Profesionales de Turismo del Noroeste del Chubut"
   },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"09:30 horas.",
    lugar:"Esquel",
    descripcion:"Salida desde avenidas Presidente Perón y Ameghino Caminata por la vida. Actividad inclusiva"
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"11:00 horas.",
    lugar:"Esquel",
    descripcion:"Avenidas Presidente Perón y Ameghino. Inauguración plazoleta de la vida. Invita: Grupo de trasplantados de la cordillera chubutense."  
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"18:00 y 22:00 horas.",
    lugar:"Esquel",
    descripcion:"Gimnasio Municipal. Conciertos XII Encuentro MOLPA 2025. Movimiento de Orquestas Latinoamericanas de la Patagonia. Entrada Libre y Gratuita"
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"16:00 horas.",
    lugar:"Trevelin",
    descripcion:"City Tour Trevelin. Salida desde la plaza pasando por museo las dos capillas, escuela 57, álamo histórico, y vuelta por Costanera, visitando también viejos almacenes de ramos generales. Invitan: ISFD Nº 804 y Rotary Club"
  },
  {
    fecha:"Viernes 26 de septiembre",
    hora:"10:00 a 11:30 horas.",
    lugar:"Esquel",
    descripcion:"Paseo urbano Esquel. Salida desde el Museo Histórico (Mitre y San Martín). Recorrido histórico, cultural y anecdótico por edificios patrimoniales, comercios e instituciones que acompañaron el crecimiento de la ciudad. Circunscrito al casco céntrico. Participación libre y gratuita. Cupos limitados con inscripción previa en el museo o por mail a museohistorico@esquel.ar (hasta 2 horas antes de la salida)."
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"18:00 y 22:00 horas",
    lugar:"Esquel",
    descripcion:"Gimnasio Municipal. Conciertos XII Encuentro MOLPA 2025. Movimiento de Orquestas Latinoamericanas de la Patagonia. Entrada Libre y Gratuita"
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"17:00 horas.",
    lugar:"Trevelin",
    descripcion:" Plaza Coronel Fontana de Trevelin. Draig Goch cumple 4 años y lo celebra en el marco de la Fiesta del Día Mundial del Turismo, bajo el lema “Turismo y Transformación Sostenible”"
  },
  {
    fecha:"Sábado 27 de septiembre",
    hora:"11:00 a 13:00 horas",
    lugar:"Esquel",
    descripcion:"Centro de Jubilados del oeste del Chubut, Molinari 527 Ese viaje quedó tatuado encuentro de rescate de experiencias turísticas inolvidables. Invita: Grupo de Adultos Mayores “Neuronas al Gimnasio”:"
   },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"19:00 y 23:00 horas.",
    lugar:"Esquel",
    descripcion:"Gimnasio Municipal. Conciertos XII Encuentro MOLPA 2025. Movimiento de Orquestas Latinoamericanas de la Patagonia. Entrada Libre y Gratuita"
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"18:00 horas",
    lugar:"Trevelin",
    descripcion:"Lanzamiento institucional de la CARRERA “SENDEROS DE TREVELIN” Organiza: Cooperadora Hospital Rural Trevelin" 
  },
  {
    fecha:"Jueves 25 de septiembre",
    hora:"20:00 horas",
    lugar:"Trevelin",
    descripcion:"Salón Central de Trevelin Concierto “Murgas en acción” Se presentan las murgas “La convenida”, de Esquel y “La Tía María” de Bariloche."
  },
  {
    fecha:"Domingo 28 de septiembre",
    hora:"10:00 horas.",
    lugar:"Esquel",
    descripcion:"34ª Edición Tetratlón Douglas Berwyn Organizado por el Club Andino Esquel"
  },
  {
    fecha:"Martes 30 de septiembre",
    hora:"14:00 a 18:00 horas",
    lugar:"Esquel",
    descripcion:"Visita guiada a Capilla Seion, centrada en la colonización Galesa y su religiosidad. Guía: Veronica Buss Invita: Asociación de Guías Profesionales de Turismo del Noroeste del Chubut" 
  },
  {
    fecha:"Domingo 28 de septiembre",
    hora:"17:00 horas.",
    lugar:"Esquel",
    descripcion:"Plaza del cielo. Lanzamiento programa Trashumancias. Trashumancias es un programa que combina entrevistas, juegos y música en movimiento. Se realiza en vivo con participación de público (con posibilidad de streaming y disponible luego en YouTube). Su formato es de show interactivo, donde el público participa en juegos, trivias y dinámicas, mientras se intercalan entrevistas, arte y música."
   },
  {
    fecha:"16:00 a 20:00 horas",
    hora:"10:00 horas.",
    lugar:"Esquel",
    descripcion:"Campus Científico Tecnológico CIEFAP. Alerces + ProdTur: Primeras Jornadas Comarcales de Producción y Turismo. Mesas de trabajo del día 1:-	Producción apícola y turismo.-	Micosendas y turismo.-	El predio agropecuario como producto turístico"
   },
  {
    fecha:"Domingo 28 de septiembre",
    hora:"21:00 horas.",
    lugar:"Esquel",
    descripcion:"Centro Cultural Melipal. Función especial del Planetario de Esquel, compartiendo la historia y la actualidad del Proyecto Plaza del Cielo"
   },
  {
    fecha:"Jueves 2 de octubre",
    hora:"20:00 horas.",
    lugar:"Esquel",
    descripcion:"Instituto Superior de Formación Docente Nº 809, Alsina 1047. Clase abierta de Juan Falú. Juan Falú, docente universitario y gran promotor de la formación académica de la música popular, brindará una charla con temario abierto sobre la música argentina de raíz folclórica. A partir de las Esquel. Entrada libre y gratuita. "
    },
  {
    fecha:"Jueves 2 de Octubre",
    hora:"16:00 a 20:00 horas",
    lugar:"Trevelin",
    descripcion:"Viñas de Nant y Fall. Alerces + ProdTur: Primeras Jornadas Comarcales de Producción y Turismo. Mesas de trabajo del día 2:-	Flores, plantas aromáticas y turismo -	Vinos y turismo-	Frutas finas y turismo"
   },
  {
    fecha:"Viernes 3 de octubre",
    hora:"10:00 a 11:30 horas",
    lugar:"Esquel",
    descripcion:"Paseo urbano Esquel con Juan Falú. Salida desde el Museo Histórico (Mitre y San Martín). Recorrido histórico, cultural y anecdótico por edificios patrimoniales, comercios e instituciones que acompañaron el crecimiento de la ciudad. Circunscrito al casco céntrico. Participación libre y gratuita. Cupos limitados con inscripción previa en el museo o por mail a museohistorico@esquel.ar (hasta 2 horas antes de la salida)."
  },
  {
    fecha:"Viernes 3 de octubre",
    hora:"16:00 a 20:00 horas",
    lugar:"Esquel",
    descripcion:"SUM INTA. Alerces + ProdTur: Primeras Jornadas Comarcales de Producción y Turismo. Mesas de trabajo del día 3:-	Perspectivas para el turismo binacional-	Consolidación de la Comarca Los Alerces"
  },
  {
    fecha:"Viernes 3 de octubre",
    hora:"19:00 horas",
    lugar:"Esquel",
    descripcion:". Edificio de Aulas de la UNPSJB. Encuentro de trabajo: Turismo religioso ¿una oportunidad comarcal?"
   },
  {
    fecha:"Viernes 3 de octubre",
    hora:"21:00 horas",
    lugar:"Esquel",
    descripcion:" Auditorio Municipal. Concierto de Juan Falú: “Guitarra de alerce” Valor de las entradas: $25 mil anticipadas; $30 mil en puerta."
   },
  {
    fecha:"Sábado 4 de octubre",
    hora:"21:00 horas",
    lugar:"Trevelin",
    descripcion:"Calle Roca 528. Concierto de Juan Falú. Espacio Arcos al Sur ofrece disfrutar en formato íntimo un repertorio cargado de identidad, raíz y emoción. Valor de las entradas: $25 mil anticipadas; 30 mil en puerta. Reservas al +54 9 2945 547842"
},
  {
    fecha:"Sábado 4 de octubre",
    hora:"10:00 a 12:00 horas",
    lugar:"PNLA",
    descripcion:" Salón de Usos Múltiples del Centro de Visitantes del Parque Nacional Los Alerces (Villa Futalaufquen). Clínica para músicos a cargo de Juan Falú, fundador del Festival Guitarras del Mundo, compositor, intérprete y docente. Se conversará sobre Ritmos y Formas del folclore, y se podrán escuchar interpretaciones de las y los participantes, con la devolución del maestro. Valor de la actividad: $ 25 mil -sólo con inscripción previa, cupos limitados-. Reservas al +54 9 2945 547842. La yapa: entre las 09:30 y las 10:00 se arma una mateada con Juan Falú y Edelmiro Toro." },
  {
    fecha:"Viernes 3 de octubre",
    hora:"Caminata Inclusiva sendero Pinturas Rupestres",
    lugar:"PNLA",
    descripcion:"Excursión Sendero El Portezuelo. Salida y llegada desde Puerto Limonao. Requiere registro previo, el mismo día, de 8 a 10 horas."
   },
  {
    fecha:"Viernes 3 de octubre",
    hora:"12:30 a 13:30 horas",
    lugar:"PNLA",
    descripcion:" Caminata Inclusiva sendero Pinturas Rupestres" },
  {
    fecha:"Domingo 5 de octubre",
    hora:"19:00 horas",
    lugar:"Esquel",
    descripcion:". Centro Cultural Melipal. Función del Ciclo de Cine y Filosofía “Lo que una imagen puede”. Se proyectará la película “El país de las maravillas”, de Alice Rohrwacher. "
  },
  {
    fecha:"Lunes 6 de octubre",
    hora:"19:00 horas",
    lugar:"Esquel",
    descripcion:" Hotel Sol del Sur. Charla informativa: Herramientas de gestión para emprendimientos turísticos. Invita: Tecnicatura Superior en Turismo, ISET 815"
 },
  {
    fecha:"Martes 7 de octubre",
    hora:"19:00 horas",
    lugar:"Esquel",
    descripcion:"Edificio de Aulas de la Sede Esquel de la UNPSJB. Reunión periódica –abierta a todo público- de la Asociación de Fotógrafos de Naturaleza (AFONA)"
 },
]

  const eventosMap= listEventos.map (evento =>
    <Actidades evento ={evento} />
  )
  return (
    <div>
      {eventosMap}
    </div>
  )
}

export default LaZeta




