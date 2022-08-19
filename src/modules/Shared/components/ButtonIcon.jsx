import React from 'react';


function ButtonIcon(props) {
    const name = props.name ? props.name: props.children ? props.children : 'Ajouter'
    return (
        <button onClick={props.onClick} style={{...styles.button, ...props.style}}>
            {props.icon}
            {name}
        </button>
    )
}

export default ButtonIcon;

const styles = {
    button: {
        backgroundColor: '#F06B6B',
        padding: '8px 15px',
        borderRadius: '2px',
        color: 'white',
        fontSize: '16px',
        border: 0,
        marginRight: '8px',
        alignItems: 'center'
    }
}