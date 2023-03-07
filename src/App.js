import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0)


  return (
      <>
        <label>
          Cantidad:
          <input type="text"/>

        </label>

        <label> 
          Personas:
          <input type="range"/>
        </label>
      </>
  );
}

export default App;
