import React, { Component } from "react";
import "../styles/Form.css";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, email, phone } = this.props.Personal;
    const { school, title, study_date } = this.props.Education;
    const { company, job, job_start, job_end } = this.props.Experience;

    return (
      <div className="dim_screen hide_dim_screen">
        <Personal
          onPersonalChange={this.props.onPersonalChange}
          onPersonalSubmit={this.props.onPersonalSubmit}
          Personal={{ name, email, phone }}
        />
        <Education
          onEducationChange={this.props.onEducationChange}
          onEducationSubmit={this.props.onEducationSubmit}
          Education={{ school, title, study_date }}
        />
        <Experience
          onExperienceChange={this.props.onExperienceChange}
          onExperienceSubmit={this.props.onExperienceSubmit}
          Experience={{ company, job, job_start, job_end }}
        />
      </div>
    );
  }
}

export default Form;
