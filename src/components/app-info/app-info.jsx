import './app-info.css';

const AppInfo = (props) => {
    const {countEmployees, countEmployeesRise} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании: Евгений и Ко</h1>
            <h2>Общее число сотрудников: {countEmployees}</h2>
            <h2>Премию получат: {countEmployeesRise}</h2>
        </div>
    )

}

export default AppInfo;