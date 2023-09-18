import React from "react";
import Modal from "./Modal.js";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  processForm = () => {
    this.setState({
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value
    });
    this.showModal();
  };

  render() {
    return (
      <div className="container">
        <h2>Form in React</h2>
        <h1 id="form-title">Fill the form below!</h1>

        <form id="join-us" method="post" onSubmit={this.handleSubmit}>
          <div className="fields">
            <span>
              <input
                placeholder="First Name"
                type="text"
                id="firstName"
              ></input>
            </span>
            <br />
            <span>
              <input placeholder="Last Name" type="text" id="lastName"></input>
            </span>
          </div>
          <div className="submit">
            <button
              className="submit toggle-button"
              type="button"
              id="centered-toggle-button"
              onClick={this.processForm}
            >
              Send Form
            </button>
          </div>
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
          ></Modal>
        </form>
      </div>
    );
  }
}
export default Form;
