import {Component} from "react";
import App from './components/app';
import './App.css';


class WhoAmI extends Component {
    constructor (props) {
        super(props)
        this.state = {
            years: 27,
            text: "+++",
            inputValue: ""
        }
    }

    nextYear = () => {
        this.setState( state => ({years: state.years + 1}));
    }

    changeValue = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render () {
        const {name, surname, link} = this.props;
        const {inputValue, text, years} = this.state;
            return (
            <div>
                <button onClick={this.nextYear}>{text}</button>
                <h1>My name is {name}, surname - {surname}, years - { years}, position - {inputValue}</h1>
                <a href={link}> profile</a>
                <form action="submit">
                    <span>Введите должность</span>
                    <input type="text" onChange={this.changeValue}/>
                </form>
            </div>
        )
    }
}

function Appp () {
    return (
    <div className="app">
        <WhoAmI name='John' surname='Doe' link='link.com'/>
    </div>
    )
} 

export default App;

