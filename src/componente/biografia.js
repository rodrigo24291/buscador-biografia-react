import React, { useEffect, useState } from 'react';

export const Biografia=({app})=>{
   const[apii,setapii]=useState(null)
    const {artista,cancion}=app
useEffect(async()=>{
    const url_letra = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
const fe=await fetch(url_letra)
const api=await fe.json()
if(api.artists ==null) return;
setapii(api.artists[0])
console.log('we')
},[artista,cancion])
console.log(apii)
if(apii==null) return "";
const { strArtistThumb, strGenre, strBiographyES } = apii;
console.log(apii[0])

return ( 
    <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
            Información Artista
        </div>
        <div className="card-body">
            <img src={strArtistThumb} alt="Logo Artista" />
            <p className="card-text">Género: {strGenre}</p>
            <h2 className="card-text">Biografía:</h2>
            <p className="card-text">{strBiographyES}</p>
            <p className="card-text">
                <a href={`https://${app.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${app.strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${app.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
            </p>
        </div>
    </div>
 );
}
