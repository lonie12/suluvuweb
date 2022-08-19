import React from 'react'


function BtnValidate(props) {
    const name = props.name ?? 'Valider'
    return (
        <button onClick={props.onClick} style={{...styles.button, ...props.style}}>
            {name}
        </button>
    )
}

export default BtnValidate;

const styles = {
    button: {
        backgroundColor: '#F06B6B',
        padding: '8px 15px',
        borderRadius: '4px',
        color: 'white',
        fontSize: '16px',
        border: 0,
        fontWeight: 'bold',
        dispay: 'block',
        margin: '10px'
    }
}