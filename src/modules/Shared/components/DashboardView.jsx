

export default function DashboardView(props) {
    const color = props.color;
    return (
        <div style={{...styles.container, ...props.style}}>
            <div style={{width: '12px', height: '100%', background: `${color}`, borderRadius: '10px 0 0 10px'}}></div>
            <div style={{width: `calc(100% - 12px)`, height: '100%', display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around'}}>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}> {props.title} </span>
                <h1 style={{color:"#F06B6B"}}> {props.data} </h1>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '22%',
        height: '100px',
        background: 'white',
        borderRadius: '10px',
        display: 'flex'
    }
}