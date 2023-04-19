import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2"; 
import { useNavigate } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/api/';

export default function Formulario_validacion() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const customSubmit = async (data) => {
        /*data = {
            "tipo": "CC",
            "cedula": 123456789,
            "codigo": "CO_0001"
        };*/
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch([url + 'get_consulta_pedido'], requestOptions)
        .then(res => { return res.json() })
        .then((data) => {
            if (data.successful === false) {
                Swal.fire(data.message, "You clicked the button!", "error");
                console.log(data);                          
            } else {
                console.log(data);
                return navigate('/pedido', { state: data } );
            }
        })
    }

    return (
        <>
            <h2>Consulta Tu Pedido</h2>
            <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
                <div className='form-control'>
                    <label>Tipo Cedula</label>
                    <select  {...register('tipo', { required: true })}>
                        <option value="CC">CC</option>
                        <option value="NIT">NIT</option>
                    </select>
                    {errors.tipo?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                </div>
                <div className='form-control'>
                    <label>Cedula</label>
                    <input type="number" {...register('cedula', { required: true })} />
                    {errors.cedula?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                </div>
                <div className='form-control'>
                    <label>Codigo Del Pedido</label>
                    <input type="text" {...register('codigo', { required: true })} />
                    {errors.codigo?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                </div>
                <button type='submit'>Buscar</button>
            </form>
        </>
    )
}