import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

function Formulario(props) {

  const { guardarGasto, guardarCrearGasto } = props;

  //state
  const [nombreGasto, guardarNombreGasto] = useState('');
  const [cantidadGasto, guardarCantidadGasto] = useState(0);
  const [error, guardarError] = useState(false);

  //cuando se agrega el gasto
  const handleSubmit = e => {
    e.preventDefault();

    //validar
    if (cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === '') {
      guardarError(true);
      return;
    }

    //construir el objeto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    }

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //eliminar alerta
    guardarError(false);

    //resetear el formulario
    guardarNombreGasto('');
    guardarCantidadGasto('');
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Agrega tus Gastos Aquí</h2>

      {error ? <Error mensaje='Ambos campos son obligatorios o el presupuesto incorrecto'/> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />
      </div>

      <input 
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  )
}

export default Formulario
