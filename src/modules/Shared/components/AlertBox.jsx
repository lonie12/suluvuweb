import React from 'react';

function AlertBox(props) {

    return (
        <div style={{...styles.alertBox, ...props.style, background: props.color}}>
            <div style={styles.message}> {props.message} </div>
            <button style={styles.exit} onClick={props.onClick}>
                X
            </button>
        </div>
    )
}

export default AlertBox;


const styles = {
    alertBox: {
        position: 'absolute',
        padding: '15px',
        top: '5px',
        right: '50px',
        display: 'flex',
        backgroundColor: 'green',
        color: 'white',
        alignItems: 'center',
        zIndex: 1,
        borderBottomRightRadius: '20px',
        borderTopRightRadius: '20px',
        maxWidth: 400,
        textAlign: 'center'
    },

    message: {
        marginRight: '30px',
        alignItems: 'center'
    },

    exit: {
        marginRight: '10px',
        fontSize: '20px',
        backgroundColor: 'inherit',
        border: 0,
        color: 'inherit',
        marginTop: '5px'
    }
}