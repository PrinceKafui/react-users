import React, { Component } from "react";
import "./Userform.css";
import { addUser } from "../../Actions/UserAction";
import { connect } from "react-redux";

class Userform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addNewUser(this.state);

    this.setState(
      (this.state = {
        name: "",
        email: "",
        gen: "",
      })
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="classform-sect">
        <label htmlFor="Name">
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            required="required"
          />
        </label>
        <br />
        <br />

        <label htmlFor="Email">
          Email
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            required="required"
          />
        </label>
        <br />
        <br />

        <label htmlFor="Gen">
          Gen
          <input
            type="number"
            value={this.state.gen}
            name="gen"
            onChange={this.handleChange}
            required="required"
          />
        </label>
        <br />
        <br />

        <input className="submit-btn " type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  addNewUser: addUser,
};

export default connect(null, mapDispatchToProps)(Userform);
