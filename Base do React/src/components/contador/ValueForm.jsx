import React from "react";

export default (props) => {
  return (
    <div>
      <div>
        <label htmlFor="valor">Valor: </label>
        <input
          id="valor"
          type="text"
          value={props.valor}
          onChange={event => props.setValor(+event.target.value)}
        />
      </div>
    </div>
  );
};
