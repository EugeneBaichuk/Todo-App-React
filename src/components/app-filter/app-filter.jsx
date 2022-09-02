import './app-filter.css'

const AppFilter = (props) => {
        const {onTermChange} = props;
        const btns = [
            {term: "all", name:"Все сотрудники"},
            {term: "rise", name:"На повышение"},
            {term: "salary", name:"ЗП > 1000$"},
        ]
        
        const buttons = btns.map(item => {
            const {name, term} = item;
            const clazz = (term === props.term) ? item.clazz = "btn-light": item.clazz = "btn-outline-light";
            
            return (
                    <button 
                        key={name}    
                        onClick={onTermChange(term)}
                        className={`btn ${clazz}`}
                        type='button'> 
                        {name}
                    </button>    
            )
        })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;