import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
            <option value="" disabled selected hidden></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown