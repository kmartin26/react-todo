import React from 'react'

function List(props) {

    return (
        <ul>
            {
              props.taches.map((tache, id) =>
                <li>
                  {tache.tache} 
                  <button onClick={() => props.onDel(id)}>Del {id}</button>
                  <button onClick={() => props.onEdit(id)}>Edit {id}</button>
                </li>
              )
            }
        </ul>
    )
}

export default List