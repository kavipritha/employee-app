import React from 'react';
import  '../App.css'

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  employee: this.props.employee }
  }
  render() {
    return (
        <div className="employee-page">
          <div className="employee-card">
            <img className='employee-card-img' src= {require("../images/user.jpg")}  alt="user img" />
       <div className='employee-card-title'>
            <h3> name </h3>
            <small>designation</small>
       </div>
      </div>  
           <div className='employee-card-title'>
            <h3> Call Office</h3>
            <small>designation</small>
       </div>
       <div className='employee-card-title'>
            <h3> Call mobile</h3>
            <small>designation</small>
       </div>
       <div className='employee-card-title'>
            <h3> SMS</h3>
            <small>designation</small>
       </div>
       <div className='employee-card-title'>
            <h3> Email</h3>
            <small>designation</small>
       </div>
      </div>  
    );
  }
}
 export default EmployeePage;

