import React, { Component } from "react";
import data from "../data";
import '../styles/Personal.css'


class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;

    // console.log(target, id, value);
    this.props.onPersonalChange(id, value);
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Personal");
  
    document.querySelector('.Personal').classList.add('hide');

    const {name, email, phone} = this.props.Personal;

  
    
    if (name === "" || email === "" || phone === "") {
      return;
    }

    data.Personal.name = name;
    data.Personal.email = email;
    data.Personal.phone = phone;

    this.props.onPersonalSubmit({name, email, phone});
    

  };

  render() {
    console.log('showing personal edit');
   

    const {name, email, phone} = this.props.Personal;
    return (
      <form className="Personal hide" onSubmit={this.handleSubmit}>
        <div className="form_personal">
          <strong>Personal Info</strong>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="input_personal"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input_personal"
              type="text"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              className="input_personal"
              type="text"
              value={phone}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn_submit">Submit</button>
      </form>
    );
  }
}

export default Personal;
