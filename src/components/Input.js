import React, { useState } from 'react'

function Input(props) {
    const [contenu, setContenu] = useState("")

    function setValeur(event) {
        setContenu(event.target.value)
    }

    if (props.editText !== null && contenu !== props.editText) {
        setContenu(props.editText)
    }

    return (
        <>
            <input className="texte" type="text" value={contenu} onChange={setValeur} />
            <button className="valider" onClick={() => props.onClick(contenu)}>OK</button>
        </>
    )
}

export default Input