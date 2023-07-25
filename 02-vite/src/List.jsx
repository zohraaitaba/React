import { useState } from "react";

function List() {
    const [items, setIems]= useState([
        { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
        { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
        { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
    ]);

    const [newName, setNewName] = useState('');

    const addIem= ()=> {
        let id = items[items.length-1].id+1; /* calcul de id par rapport au dernier élément */
        let newItem=  { id: id, name: newName, avatar: 'https://i.pravatar.cc/150?u=' + newName };

        // On doit envoyer "une copie", "un colne" du tableau pour le mettre à jour
        setIems([...items, newItem]);
        setNewName(''); // vider le champ de input
    };

    const deleteItem= (id)=> {
        setIems(items.filter(item=> item.id !== id));
    };

    return ( 
        <>
        <h1>Liste</h1>
        <ul>
            {items.map(item =>
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <img className="image" src={item.avatar} alt={`Photo de ${item.name}`} /> {/* $ pour concaténer */}
                    {items.length>1 && <button onClick={()=> deleteItem(item.id) }>❌</button>} {/* faut qu'il y aura au moins un id */}
                </li>
                )}
        </ul>
        <input type="text" value={newName} onChange={(event)=> setNewName(event.target.value)} />
        <button onClick={()=> addIem()} disabled={!newName} >Ajouter</button>

        </>
     );
}

export default List;