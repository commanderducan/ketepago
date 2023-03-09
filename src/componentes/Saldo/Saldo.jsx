import calavera from "./calavera.jpg";
import mano from "./mano.jpg";
import bolsa from "./bolsa.jpg";

function Saldo({saldo}) {
    return(
        <>
        { saldo === 0 && <p className="cero">Saldo es igual a {saldo} <img src={mano}/></p>  }
        { saldo > 0 && <p className="favor"> Saldo es igual a {saldo} <img src={bolsa}/></p> }
        { saldo < 0 && <p className="deuda">Saldo es igual a {saldo}  <img src={calavera}/> </p>}
        </>
    )

}

export default Saldo;