
export default function TextArea(props) {

    return (
        <div style={{...styles.textInput, ...props.style}}>
            <span style={{...styles.title, ...props.titleStyle}}> {props.title} </span>
            <div>
                <textarea  id={props.id} value={props.value} onChange={(element) => props.onChange(element)} style={{...styles.input, ...props.inputStyle}} placeholder={props.placeholder}> </textarea>
            </div>
        </div>
    )
}

const styles = {
    title: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1C252C',
        marginBottom: '10px',
        display: 'block',
        letterSpacing: '-0.2px'
    },

    input: {
        padding: '8px',
        boxShadow: '1px 1px 4px 1px #F06B6B',
        width: '400px',
        outline: 0,
        border: '1px solid gray',
        borderRadius: '5px',
        height: '100px'
    },

    textInput: {
        display: 'inline-block',
        margin: '10px'
    }
}