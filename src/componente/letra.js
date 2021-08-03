import React, { useEffect, useState } from 'react';

export const Letra=({app})=>{

    const[apii,setapii]=useState(null)
    const {artista,cancion}=app
useEffect(async()=>{
const url_letra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
const fe=await fetch(url_letra)
const api=await fe.json()
setapii(api)
},[artista,cancion])
if(apii==null) return;
    
    return ( 
        <>
            <h2>Letra Canción</h2>
            <p className="letra"></p>
        </>
    );
}