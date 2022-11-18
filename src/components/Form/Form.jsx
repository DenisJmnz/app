import React from "react";
import { useForm } from 'react-hook-form';

const Formulario = ({ setFilters }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log('Datos del formulario', data);
        setFilters(data);
    }

    return(
        <>
            <h2>Filtros de búsqueda</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Marca: </label>
                <select name="select" {...register('brand')}>
                    <option value="" selected>Todas las marcas</option>
                    <option value="SEAT">SEAT</option>
                    <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                    <option value="AUDI">AUDI</option>
                    <option value="BMW">BMW</option>
                    <option value="PORSCHE">PORSCHE</option>
                </select><br/>
                <label>Precio máx.: </label>
                <input type="text" {...register('price')}/><br/>
                <label>Color: </label>
                <input type="text" {...register('color')}/><br/>
                <input type='submit' value='Enviar'/><br/><br/>
            </form>
        </>
    )
}

export default Formulario;