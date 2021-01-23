import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      Personal: {
         name: '',
         email: '',
         phone: '',
      },
      
    };
  }


  onTrigger = () => {
    this.props.formCallback(this.state.Personal);
  };

  handleChange = (e) => {
    this.setState({
      name: document.getElementById('name').nodeValue,
      email: document.getElementById('email').nodeValue,
      phone: document.getElementById('phone').nodeValue,
    });
  };

  

  render() {
    
    return (
      <div className="Personal">
        <div className="form_personal">
          <strong>Personal Info</strong>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" className="input_personal" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" className="input_personal" type="text" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" className="input_personal" type="text" value={this.state.phone} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
