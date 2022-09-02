
import EmployeesListItem from '../employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onIncrease, onRise}) => {
    const elems = data.map(item => {
    const {id, ...dataProps} = item;
        return (
            <EmployeesListItem key={id} onRise={onRise(id)} onIncrease={onIncrease(id)} onDelete={onDelete(id)} {...dataProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )

}

export default EmployeesList;