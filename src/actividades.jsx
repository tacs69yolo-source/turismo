import React from 'react'
import { HiMiniCalendarDays } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BsBackpack2 } from "react-icons/bs";

const actividades = (props) => {
  return (
    <div className='p-4 border-8 border-b-green-10000 bg-green-500 hover:bg-green-650'>
      <div className='flex'>
        <FaLocationDot className='mr-3' /> 
        {props.evento.lugar}
      </div>
      <br />
      <div className='flex'>
        <HiMiniCalendarDays className='mr-3' />
        {props.evento.fecha}
      </div>
      <br />
      <div className='flex'>
        <TbClockHour4 className='mr-3' />
        {props.evento.hora}
      </div>
      <br />
      <div className='flex'>
        <BsBackpack2 className='mr-3'/>
        {props.evento.descripcion}
      </div>
    </div>
  )
}

export default actividades
