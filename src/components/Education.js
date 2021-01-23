import React, { Component } from "react";


class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      title: "",
      study_date: "",
      Education: {
        school: "",
        title: "",
        date: "",
      },
    };
  }
  render() {
    return (
      <div className="Education">
        <div className="form_education">
          <strong>Education</strong>
          <div>
            <label htmlFor="school">School</label>
            <input
              id="school"
              className="input_education"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" className="input_education" type="text" />
          </div>
          <div>
            <label htmlFor="study_date">Date</label>
            <input id="study_date" className="input_education" type="date" />
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

