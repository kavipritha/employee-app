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
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = this.props?.searchList.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      console.log(results)
      this.setState({
        searchList: results
      })
    } else {
      // If the text field is empty, show all users
      this.setState({
        searchList: this.props?.searchList
      })
    }
}
  render() {
    return (
     <div>
          <input type="text" className='search-bar-input'
                        onChange={(e) => { this.handleChange(e) }}/>
                        {this.state?.searchList.map((user) => (
                          
        <div key={user.id} className="user">
            <EmployeeItem employee={user}></EmployeeItem>
            </div>
      ))}
                       
     </div>   
    );
  }
}
 export default SearchBar;

