
import './App.css';
import Header from "./component/HeaderComponent";


import EmployeePage from "./component/EmployeePageComponent";
import SearchBar from "./component//SearchBarComponent";

const arrayOfObjects = [
  { id:1, name: "James King", designation: "President and CEO" },
  { id:2,  name: "Julie Taylor", designation: "VP of marketing" },
  {  id:3, name: "Eugene Lee", designation: "CFO" },
  {  id:4, name: "John Williams", designation: "VP of Engineering" },
  {  id:5, name: "Ray Moore", designation: "VP of Sales" },
  {  id:6, name: "Paul Jones", designation: "QA Manager" },
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
