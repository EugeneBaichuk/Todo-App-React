import './app.css';
import {Component} from 'react';
import AppInfo from '../app-info';
import SearchPanel from '../search-panel';
import AppFilter from '../app-filter';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employees-add-form';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
            {name: "John C.", salary: 800, increase: false, rise: false, id: 1},
            {name: "Mary B.", salary: 2000, increase: false, rise: false, id: 2},
            {name: "Nick T.", salary: 3000, increase: false, rise: false, id: 3},
            {name: "Jack R.", salary: 20500, increase: false, rise: false, id: 4}
            ],
            name: "",
            salary: "",
            filter: "",
            term: "all"
        }
    }

    onDelete = (id) => () => {
        this.setState(({data}) => ({
            data: data.filter(item => (item.id !== id))
        }));
    }

    onValueChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    searchEmployee = (items, filter) => {
        if (!filter) {
            return items
        }
        return items.filter(item => (item.name.toLowerCase().includes(filter) || item.name.includes(filter) )); 
    }

    changeTerm = (items, term) => {
        switch (term) {
            case "rise": 
                return items.filter(item => (item.rise));
            case "salary":
                return items.filter(item => (item.salary > 1000));
            default:
            return items;
        }
    }

    onTermChange = (term) => (e) => {
        this.setState({term});
    }

    onAdd = (name, salary) => (e) => {
        e.preventDefault();
        let id = this.state.data.length + 1;
        name && salary && this.setState(({data}) => ({data: [...data, {name, salary, increase: false, rise: false, id}]})
        )
    }

    onIncreaseRise = (id) => (e) => {
        e.stopPropagation();
        const key = e.currentTarget.getAttribute('data-toggle')
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [key]: !item[key]}
                }
                return item;
            })
        }))
    } 

    render () {
        const {data, name, salary, filter, term} = this.state;
        const countEmployeesRise = data.filter(item => (item.increase)).length;
        const countEmployees = data.length;
        const visibleData = this.changeTerm(this.searchEmployee(data, filter),term);

        return (
            <div className="app">
                <AppInfo countEmployeesRise={countEmployeesRise} countEmployees={countEmployees}/>
                <div className='search-panel'>
                    <SearchPanel searchEmploye={this.searchEmployee} onValueChange={this.onValueChange} filter ={filter}/>
                    <AppFilter term={term} onTermChange={this.onTermChange}/>
                </div>
                <EmployeesList onIncrease={this.onIncreaseRise} onRise={this.onIncreaseRise} onDelete={this.onDelete} data={visibleData}/>
                <EmployeesAddForm name={name} salary={salary} onValueChange={this.onValueChange} onAdd={this.onAdd(name, salary)}/>
            </div>
        )
    }
}

export default App;

