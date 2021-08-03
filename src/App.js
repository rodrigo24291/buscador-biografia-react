import React, { useState } from 'react';
import {Resultado} from './componente/resultado'
import { Consultaapi} from './Hooks/ConsultaApi'
import {Formulario} from './componente/Formulario'



function App() {
  const[inputs,Setinputs]=useState(null)
  return (
<>
    <div className="bg-info">
            <div className="container">
                <div className="row">
                  <Formulario Setinput={Setinputs}/>
                     </div>
                     <Resultado input={inputs}/>
            </div>
        </div>




</>    
  );
}

export default App;
