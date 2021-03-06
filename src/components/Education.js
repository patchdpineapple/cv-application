import React, { Component } from "react";
import data from "../data";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //local function for callback of state to parent App.js
  handleChange = (e) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;

    this.props.onEducationChange(id, value);
  };

  //local function for callback and updating data
  handleSubmit = (e) => {
    e.preventDefault();

    document.querySelector(".Education").classList.add("hide");
    document.querySelector(".dim_screen").classList.add("hide_dim_screen");

    const { school, title, study_date } = this.props.Education;

    if (school === "" || title === "" || study_date === "") {
      return;
    }

    data.Education.school = school;
    data.Education.title = title;
    data.Education.study_date = study_date;

    this.props.onEducationSubmit({ school, title, study_date });
    e.stopPropagation();
  };

  render() {
    const { school, title, study_date } = this.props.Education;

    return (
      <form className="Education hide" onSubmit={this.handleSubmit}>
        <div className="form_education">
          <strong>Education</strong>
          <div>
            <label htmlFor="school">School</label>
            <input
              id="school"
              className="input_education"
              type="text"
              value={school}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="input_education"
              type="text"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="study_date">Date</label>
            <input
              id="study_date"
              className="input_education"
              type="date"
              value={study_date}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn_submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Education;
