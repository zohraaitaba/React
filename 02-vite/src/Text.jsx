import { useState } from 'react';

function Text() {
    //name est '', setName est une fonction
    const [name, setName] = useState('');
    const toggleName= (newName)=> {
        if(newName === name){
            setName('');
        }else{
            setName(newName);
        }
        //version ternaire
        //setName(newName === name? '' : newName);
    };

    return ( 
        <>
        <button onClick={()=>toggleName('Fiorella')}
        className={ name === 'Fiorella' && 'selected'}>  {/* {name==='fiorella'? 'selected' : ''}> */}
            Fiorella
        </button>
       
        <button onClick={()=>toggleName('Toto')}
        className={ name === 'Toto' && 'selected'}>
            Toto
        </button>

        <input type="text" value={name} onChange={(event)=> setName(event.target.value) } />

        {name && <h1>Ton prénom est : {name} </h1>}

        <button onClick={()=>setName('')} disabled={!name} >Supprimer</button>
        </>
        
     );
}

export default Text;