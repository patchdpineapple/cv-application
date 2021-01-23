import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      job: "",
      job_start: "",
      job_end: "",
      Experience: {
        company: "",
        job: "",
        job_start: "",
        job_end: "",
      },
    };
  }
  render() {
    return (
      <div className="Experience">
        <div className="form_experience">
          <strong>Experience</strong>
          <div>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              className="input_experience"
              type="text"
              value={this.state.company}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="job">Job Title</label>
            <input id="job" className="input_experience" type="text" value={this.state.job}
              onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="job_start">Job Starting Date</label>
            <input id="job_start" className="input_experience" type="date" value={this.state.job_start}
              onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="job_end">Job End Date</label>
            <input id="job_end" className="input_experience" type="date" value={this.state.job_end}
              onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
