import React, { useEffect } from 'react';
import { Letra } from './letra';
import { Biografia } from './biografia';
export const Resultado=({input})=>{
  if(input==null || Object.keys(input.artista)=="" && Object.keys(input.cancion)=="" || Object.keys(input.artista)=="" || Object.keys(input.cancion)=="" ) return  "";

return(
    

    
    <div className="container mt-5">
    <div className="row">

      <div className="col-md-6">
          <Letra app={input}/>
      </div>

      <div className="col-md-6">
         <Biografia app={input} />
      </div>

    </div>
  </div>
)
    
}