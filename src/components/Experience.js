import React, { Component } from "react";
import data from "../data";
import "../styles/Experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //local function for callback of state to parent App.js
  handleChange = (e) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;

    this.props.onExperienceChange(id, value);
  };

  //local function for callback and updating data
  handleSubmit = (e) => {
    e.preventDefault();

    document.querySelector(".Experience").classList.add("hide");
    document.querySelector(".dim_screen").classList.add("hide_dim_screen");

    const { company, job, job_start, job_end } = this.props.Experience;

    if (company === "" || job === "" || job_start === "" || job_end === "") {
      return;
    }

    data.Experience.company = company;
    data.Experience.job = job;
    data.Experience.job_start = job_start;
    data.Experience.job_end = job_end;

    this.props.onExperienceSubmit({ company, job, job_start, job_end });
    e.stopPropagation();
  };

  render() {
    const { company, job, job_start, job_end } = this.props.Experience;
    return (
      <form className="Experience hide" onSubmit={this.handleSubmit}>
        <div className="form_experience">
          <strong>Experience</strong>
          <div>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              className="input_experience"
              type="text"
              value={company}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="job">Job Title</label>
            <input
              id="job"
              className="input_experience"
              type="text"
              value={job}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="job_start">Job Starting Date</label>
            <input
              id="job_start"
              className="input_experience"
              type="date"
              value={job_start}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="job_end">Job End Date</label>
            <input
              id="job_end"
              className="input_experience"
              type="date"
              value={job_end}
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

export default Experience;
