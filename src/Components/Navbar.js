import React, { Component } from "react";
class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <span className="navbar-brand mb-0 h1 mx-auto">Ecommerce App</span>
        </nav>
    );
  }
}

export default Navbar;

