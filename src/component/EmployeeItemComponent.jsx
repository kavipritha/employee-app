import React from 'react';
import  '../App.css'
class EmployeeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  employee: this.props.employee }
  }
  render() {
    return (
        <div className="employee-card">
            <img className='employee-card-img' src= {require("../images/user.jpg")}  alt="user img" />
       <div className='employee-card-title'>
            <h3> {this.state.employee.name}</h3>
            <small>{this.state.employee.designation}</small>
       </div>
      </div>  
    );
  }
}
 export default EmployeeItem;

