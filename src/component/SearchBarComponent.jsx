import React from 'react';

import EmployeeItem from "./EmployeeItemComponent";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  searchBoxText: this.props.searchBoxText , searchList: this.props.searchList }
    console.log(this.props.searchList )
  }
  handleChange(e) {
    this.setState({ searchBoxText: e.target.value })
   //filter list here searchList
}
  render() {
    return (
     <div>
          <input type="text" 
                        onChange={(e) => { this.handleChange(e) }}/>
                        {this.props?.searchList.map((user) => (
        <div className="user">
            <EmployeeItem employee={user}></EmployeeItem>
            </div>
      ))}
                       
     </div>   
    );
  }
}
 export default SearchBar;

