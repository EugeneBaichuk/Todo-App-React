import '../search-panel/search-panel.css'

const SearchPanel = (props) => {
    const {filter, onValueChange} = props;
    return (
        <input onChange={onValueChange}
        type="text"
        name="filter"
        value={filter}
        className="form-control search-input"
        placeholder="Найти сотрудника" />
    )
}

export default SearchPanel;