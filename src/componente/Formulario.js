import React, { useState } from 'react';


export const Formulario=({Setinput})=>{
const [Busqueda,Setbusqueda]=useState({

    artista:'',
    cancion:''
})

const Busquedass=(e)=>{
Setbusqueda({...Busqueda,[e.target.name]:e.target.value})
}

const buscarInformacion=(e)=>{
    e.preventDefault();
Setinput(Busqueda);    
}

    return(
         
        <form 
        onSubmit={buscarInformacion}
        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
    >
        <fieldset>
            <legend className="text-center">Buscador Letras Canciones</legend>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Artista</label>
                        <input
                            type="text"
                            className="form-control"
                            name="artista"
                            placeholder="Nombre Artista"
                           onChange={Busquedass}
                        />
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Canción</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cancion"
                            placeholder="Nombre Canción"
                            onChange={Busquedass}
                        />
                    </div>
                </div>
            </div>

            <button 
                type="submit" 
                className="btn btn-primary float-right"
            >Buscar</button>
        </fieldset>

    </form>

    )
}