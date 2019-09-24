import React, { Fragment, useState } from 'react'

function Pregunta(props) {

  const { guardarPresupuesto, guardarPreguntaPresupuesto } = props;

  //definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  
  //validad el presupuesto
  const handleSubmit = e => {
    e.preventDefault();

    //validad
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //si se pasa la validacion
    guardarError(false);
    guardarPresupuesto( cantidad );
    guardarPreguntaPresupuesto(false);
  }

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>

      {error ? <p className="alert alert-danger error">El Presupuesto es Incorrecto</p> : null}

      <form
        onSubmit={handleSubmit}
      >
        <input type="number" 
          className="u-full-width" 
          placeholder="Agrega tu presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input type="submit" 
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  )
}

export default Pregunta
