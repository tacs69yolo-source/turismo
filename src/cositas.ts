import { Interface } from "readline"

type Persona={
    nombre:String
    edad:Number
    vivo:Boolean
}
let Tomy: Persona[]=[
    {
    nombre:"Tomy",
    edad:20,
    vivo:true
    }

]
//herencia
interface Animal{
    nombre:String,
    edad: Number | String,
}
interface Perro extends Animal{
    raza: String
}
interface Gato extends Animal{
    color: String
}
let tina: Gato={
    nombre: "Tina",
    edad:2,
    color: "blanco, negro y naranja"
}
let catriel: Perro={
    nombre: "Catriel",
    edad:3,
    raza: "Caniche"
}

saludar{lista[1]}
    function saludar{persona:Persona}{
        console.log{personalbar.nombre}
    }