import React from 'react';
import  '../App.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  headerText: this.props.headerText }
  }
  render() {
    return (
     <h1 className='header-text'> {this.state.headerText} </h1>   
    );
  }
}
 export default Header;

