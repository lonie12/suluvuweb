
export default function FileInput(props) {

    return (
        <div style={{...styles.textInput, ...props.style}}>
            <span style={{...styles.title, ...props.titleStyle}}> {props.title} </span>
            <div>
                <div style={{...styles.fileInputContainer}} >
                    <div style={{...styles.fileInputView}}>
                        <div>
                            {/* <SiMicrosoftexcel size={30} color='gray' /> */}
                            {props.icon}
                        </div>
                        <div>
                            Parcourir. Cliquez <span style={{color: "#F06B6B"}}> ici</span>
                        </div>
                    </div>
                    
                    <input onChange={(e) => props.onChange(e)} style={{...styles.fileInput}} type="file"  />
                </div>
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

    textInput: {
        display: 'inline-block',
        margin: '10px',
        borderRadius: '10px',
    },

    fileInputContainer: {
        height: '100px',
        padding: '10px',
        border: '2px dashed #F06B6B',
        borderRadius: '10px',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'inline-block',
        boxShadow: '1px 1px 4px 1px #F06B6B',
        width: '100%',
    },
      
    fileInput: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        position: 'absolute',
        background: 'red',
        opacity: 0,
        left: 0,
        top: 0
    },
      
    fileInputView: {
        zIndex: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        flexDirection: 'column',
    }
}