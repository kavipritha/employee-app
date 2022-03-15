
import './App.css';
import Header from "./component/HeaderComponent";


import EmployeePage from "./component/EmployeePageComponent";
import SearchBar from "./component//SearchBarComponent";

const arrayOfObjects = [
  { name: "James King", designation: "Medium" },
  { name: "Julie Taylor", designation: "Single" },
  { name: "Eugene Lee", designation: "Medium" },
  { name: "John Williams", designation: "Single" },
  { name: "Ray Moore", designation: "Medium" },
  { name: "Paul Jones", designation: "Single" },
];

function App() {
  return (
    <div className="App">
      <div className='container-main'>
<div className='home-page'>
<Header headerText='Employee directory'></Header>
<SearchBar searchBoxText='test text' searchList={arrayOfObjects}></SearchBar>
</div>
<div className='employee-page'>
<Header headerText='Employee'></Header>
<EmployeePage></EmployeePage>
</div>
      </div>
    </div>
  );
}

export default App;
