import './employees-list-item.css'

const EmployeesListItem = (props) => {
    const {name,salary, onDelete, onIncrease, onRise, rise, increase} = props;
    let classNames = 'list-group-item d-flex justify-content-between';
    let spanClassNames = "list-group-item-label";
    !increase || (classNames += " increase");
    !rise || (classNames += " like");

    return (
        <li className={classNames}>
            <span data-toggle="rise" 
            onClick={onRise} 
            className={spanClassNames}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary} $`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button data-toggle="increase"
                    onClick={onIncrease} 
                    type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>
                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;