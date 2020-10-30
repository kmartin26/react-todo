import React, { useState } from 'react'
import './App.css';
import Input from './components/Input'
import List from './components/List'

function App() {
  // Initialisation des différents états
  const [tache, setTache] = useState([])
  const [toEdit, setToEdit] = useState(null)
  const [toEditText, setToEditText] = useState(null)

  // Fonction d'ajout / edition d'une tâche à la liste
  function addValeur(val) {
    if (toEdit !== null) {
      let listTache = tache
      listTache[toEdit].tache = val

      setToEdit(null)
      setTache(listTache)
    } else {
      let listTache = tache.slice()
      let newTache = [{
        tache: val
      }]
  
      let newListTache = listTache.concat(newTache)
  
      setTache(newListTache)
    }
    
  }

  // Fonction de suppression d'une tache
  const delValeur = (id) => {
    let listTache = tache.slice()
    listTache.splice(id, 1)
    
    setTache(listTache)
  }

  // Fonction de sélection de la tache à éditer
  const editValeur = (id) => {
    let listTache = tache.slice()

    setToEdit(id)
    setToEditText(listTache[id].tache)
  }

  return (
    <div className="todo">
      <div className="saisie">
        <Input editText={toEditText} onClick={(contenu) => addValeur(contenu)}  />
      </div>
      <div className="liste">
        <List taches={tache} onDel={(id) => delValeur(id)} onEdit={(id) => editValeur(id)}/>
      </div>
    </div>
  );
}

export default App;
