import React from 'react';

function TextInput(props) {
  return (
    <div style={{...styles.mainContainer, ...props.style}}>
        <div style={styles.container}>
            <div style={styles.leftIcon}>
                {props.icon}
            </div>
            <div>
                <input value={props.value} type={props.secure ? 'password': 'text'} id={props.id} placeholder={props.placeholder} onChange={element => props.onChange(element)} style={styles.input} />
            </div>
        </div>
    </div>
  )
}

export default TextInput;

const styles = {
    mainContainer: {
        border: '1px solid gray',
        borderRadius: 5,
    },

    container: {
        display: 'flex',
        alignItems: 'center'
    },

    leftIcon: {
        background: '#EDF2F7',
        padding: '0 8px'
    },

    input: {
        border: 0,
        outline: 0,
        fontSize: '15px',
        padding: '4px 10px',
        color: 'rgba(0, 0, 0, 0.8)',
        width: '100%'
    }
}