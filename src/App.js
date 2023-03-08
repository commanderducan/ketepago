import { useEffect, useState } from "react";  

function App() {   

  const [cantidad, setCantidad] = useState(0)   
  const [personas, setPersonas] = useState(0)
  const [parte, setParte] = useState(0)
  const [elementosHTML, setElementosHTML] = useState([])

  function manejadorInputCantidad(evento) {  
    const nuevoValor = evento.target.value
    setCantidad(nuevoValor)
  }

  function manejadorInputPersonas(evento) {
    const nuevoValor = evento.target.value
    setPersonas(nuevoValor)
  }

  useEffect (
    ()=>{
      setParte(cantidad/personas)
    },
    [cantidad, personas]
  )

  useEffect (
    ()=>{
      const nuevosElementos = []
      let contador = 0
      while (contador < personas) {
          nuevosElementos.push(<p>Un parrafo {parte} </p>)
          contador++
      }
      setElementosHTML(nuevosElementos)
    },
    [personas]
  )

  return (
      <>
        <label>
          Cantidad:
          <input onInput={manejadorInputCantidad} value={cantidad} type="text"/>
        </label>
        <br/>

        <label> 
          Personas:
          <input onInput={manejadorInputPersonas} value={personas} type="range"/>
        </label>
        {personas}
        <br/>
        {elementosHTML}
      </>
  )
}

export default App;G




