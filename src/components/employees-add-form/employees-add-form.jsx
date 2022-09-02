import './employees-add-form.css'

const EmployeesAddForm = (props) => {
        const {onAdd, onValueChange, name, salary} = props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input onChange={onValueChange} 
                        name="name"
                        type="text"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input onChange={onValueChange} 
                        name="salary"
                        type="number"
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button onClick={onAdd}
                            type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>        
        )
    }

export default EmployeesAddForm;