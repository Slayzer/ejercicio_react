/*

Crear componente que va a mostrar 3 botones con los nombres rojo, azul, amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo

*/

import React, { useState } from 'react';

const BotonesColores = () => {

  const [rojo, setRojo ] = useState(false)
  const [amarillo, setAmarillo ] = useState(false)
  const [azul, setAzul ] = useState(false)

  const Rojo = () => {
    setRojo(!rojo)
  }

  const Amarillo = () => {
    setAmarillo(!amarillo)
  }

  const Azul = () => {
    setAzul(!azul)
  }

  return (
    <div>
      <h1>BotonesColores:</h1>
      <button onClick={() =>Rojo()} >{rojo ? 'Ocultar Rojo' : 'Mostrar Rojo'}</button>
      <button onClick={() =>Amarillo()} >{amarillo ? 'Ocultar Amarillo' : 'Mostrar Amarillo'}</button>
      <button onClick={() =>Azul()} >{azul ? 'Ocultar Azul' : 'Mostrar Azul'}</button>
      <br />
      {
        rojo && (
          <img src="https://imagizer.imageshack.com/img923/7963/Mh3puq.png" alt="" />
        )
      }

      {
        amarillo && (
          <img src="https://imagizer.imageshack.com/img924/8154/Io4LZV.png" alt="" />
        )
      }
      
      {
        azul && (
          <img src="https://imagizer.imageshack.com/img922/313/FR11tX.png" alt="" />
        )
      }
    </div>
  )}

  export default BotonesColores