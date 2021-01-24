import React, { Component } from "react";
import "../styles/App.css";
import Display from "./Display.js";
import Form from "./Form.js";
import data from "../data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: data.Personal.name,
      email: data.Personal.email,
      phone: data.Personal.phone,
      Personal: {
        name: data.Personal.name,
        email: data.Personal.email,
        phone: data.Personal.phone,
      },
      school: data.Education.school,
      title: data.Education.title,
      study_date: data.Education.study_date,
      Education: {
        school: data.Education.school,
        title: data.Education.title,
        study_date: data.Education.study_date,
      },
      company: data.Experience.company,
      job: data.Experience.job,
      job_start: data.Experience.job_start,
      job_end: data.Experience.job_end,
      Experience: {
        company: data.Experience.company,
        job: data.Experience.job,
        job_start: data.Experience.job_start,
        job_end: data.Experience.job_end,
      },
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handlePersonalSubmit = this.handlePersonalSubmit.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
  }

  handlePersonalChange(id, value) {
    this.setState({
      [id]: value,
    });
  }

  handlePersonalSubmit(personaldata) {
    this.setState({
      Personal: personaldata,
    });
  }

  handleEducationChange(id, value) {
    this.setState({
      [id]: value,
    });
  }

  handleEducationSubmit(educationdata) {
    this.setState({
      Education: educationdata,
    });
  }

  handleExperienceChange(id, value) {
    this.setState({
      [id]: value,
    });
  }

  handleExperienceSubmit(experiencedata) {
    this.setState({
      Experience: experiencedata,
    });
  }

  render() {
    const { name, email, phone, Personal } = this.state;
    const { school, title, study_date, Education } = this.state;
    const { company, job, job_start, job_end, Experience } = this.state;

    return (
      <div className="App">
        <header className="title">CV Application</header>
        <Display
          Personal={Personal}
          Education={Education}
          Experience={Experience}
        />
        <Form
          Personal={{ name, email, phone }}
          Education={{ school, title, study_date }}
          Experience={{ company, job, job_start, job_end }}
          onPersonalChange={this.handlePersonalChange}
          onPersonalSubmit={this.handlePersonalSubmit}
          onEducationChange={this.handleEducationChange}
          onEducationSubmit={this.handleEducationSubmit}
          onExperienceChange={this.handleExperienceChange}
          onExperienceSubmit={this.handleExperienceSubmit}
        />
      </div>
    );
  }
}

export default App;
