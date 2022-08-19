

export default function SelectInput (props) {

    const {data} = props;

    return (
        <select style={{...styles.select, ...props.style}} name="" id="">
            <option>Show 10</option>
            {
                data.map(element => (
                    <option value={element}> {`Show ${element}`} </option>
                ))
            }
        </select>
    )
}

const styles = {
    select: {
        padding: '8px 10px',
        background: 'whitesmoke',
        outline: 3,
        fontSize: '16px',
        border: 0
    }
}