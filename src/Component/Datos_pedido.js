import React from "react";
import {useLocation} from 'react-router-dom';

export default function Datos_pedido(  ) {
    const location = useLocation();
    var cliente = location.state.data.cliente;
    var pedido = location.state.data.pedido;
    var productos = location.state.data.productos;

    /*const activateLasers = async () => {
      window.open("", "_blank", "");
      window.close();
    }*/

    return (
        <>
        <h2>Consulta Tu Pedido</h2>
        <div >
            <label>Codigo del Pedido</label>
            <label className='data' >{pedido.codigo}</label>
            <label>Cliente</label>
            <label className='data' >{cliente.nombre_usuario}</label>
            <label>Direccion</label>
            <label className='data' >{pedido.direccion}</label>
            <label>Estado de Pedido</label>
            <label className='data' >{pedido.estado}</label>
            <label>Fecha Entrega</label>
            <label className='data' >{pedido.fec_entrega}</label>
          <tbody>
            <tr>
              <th>Lista</th>
              <th>Nombre Producto</th>
              <th>Referencia</th>
              <th>Cantidad</th>
            </tr>
            {productos.map((item, i) => (
              <tr key={i}>
              <td>{i+1}</td>
              <td>{item.nombre_producto}</td>
              <td>{item.referencia}</td>
              <td>{item.cantidad}</td>
              </tr>
            ))}
          </tbody>

          <a href="https://www.google.com/"  class="button"> Cerrar</a>
          <a href="./" class="button2"> Volver a Buscar</a>

        </div>


        </>
    )
}