import Saldo from "../Saldo/Saldo";
import { useState, useEffect } from "react";

function Aportacion ({parte}) {
    const [partePersona, setPartePersona] = useState(0)
    const [nombre, setNombre] = useState("")
    const [diferencia, setDiferencia] = useState(0)

    function manejadorInputPartePersona (evento) {
        const nuevaPartePersona = evento.target.value
        setPartePersona(nuevaPartePersona)
    }

    function manejadorInputNombre (evento) {
        const nuevoNombre = evento.target.value
        setNombre(nuevoNombre)
    }
    
    useEffect ( 
        ()=>{
          setDiferencia(partePersona-parte)
        },
        [partePersona, parte]
    )

    return (
    <>
        <label>
            Nombre:
            <input onInput={manejadorInputNombre} value={nombre} type="text"/>
        </label>
        <label>
            Aporto:
            <input onInput={manejadorInputPartePersona} value={partePersona} type="text"/>
        </label>
        <label>
            Saldo:
            <Saldo saldo={diferencia}/>
        </label>
    </>
    )
}

export default Aportacion;