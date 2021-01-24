import React, { Component } from "react";
import "../styles/App.css";
import Display from "./Display.js";
import Form from "./Form.js";
import data from "../data";
import Personal from './Personal';

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
      Education: {
        school: data.Education.school,
        title: data.Education.title,
        study_date: data.Education.study_date,
      },
      Experience: {
        company: data.Experience.company,
        job: data.Experience.job,
        job_start: data.Experience.job_start,
        job_end: data.Experience.job_end,
      },
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handlePersonalSubmit = this.handlePersonalSubmit.bind(this);
  }

  appCallback = (personaldata, educationdata, experiencedata) => {
    this.setState({
      Personal: personaldata,
      Education: educationdata,
      Experience: experiencedata,
    });
  };

  handlePersonalChange(id, value) {
    

    this.setState({
      [id]: value,
    });
    // console.log("arguments", id, value);
    // console.log("data", data.Personal[id]);
    // console.log("state", this.state.Personal.name);
  }

  handlePersonalSubmit(personaldata) {
    this.setState({
      Personal: personaldata, 
    });
  }

  handleEducationChange(educationdata) {
    this.setState({
      Education: educationdata,
    });
  }

  handleExperienceChange(experiencedata) {
    this.setState({
      Experience: experiencedata,
    });
  }

  render() {
    const { name, email, phone, Personal, Education, Experience } = this.state;

    return (
      <div className="App">
        <header className="title">CV Application</header>
        <Display
          Personal={Personal}
          Education={Education}
          Experience={Experience}
          onPersonalChange={this.handlePersonalChange}
          onEducationChange={this.handlePersonalChange}
          onExperienceChange={this.handlePersonalChange}
        />

        <Form
          Personal={{name, email, phone}}
          Education={Education}
          Experience={Experience}
          onPersonalChange={this.handlePersonalChange}
          onPersonalSubmit={this.handlePersonalSubmit}
          onEducationChange={this.handlePersonalChange}
          onExperienceChange={this.handlePersonalChange}
          
        />
        
        
      </div>
    );
  }
}

export default App;
