import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form.js";
import Display from "./components/Display.js";
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  appCallback = (personaldata, educationdata, experiencedata) => {
    this.setState({
      Personal: personaldata,
      Education: educationdata,
      Experience: experiencedata,
    });
  };

  render() {
    console.log(this.state.Experience);
    const { name, email, phone } = this.state.Personal;
    const { school, title, study_date } = this.state.Education;
    const { company, job, job_start, job_end } = this.state.Experience;

    return (
      <div className="App">
        <header className="title">CV Application</header>
        <Display
          name={name}
          email={email}
          phone={phone}
          school={school}
          title={title}
          study_date={study_date}
          company={company}
          job={job}
          job_start={job_start}
          job_end={job_end}
          

        />
        <Form
          name={name}
          email={email}
          phone={phone}
          school={school}
          title={title}
          study_date={study_date}
          company={company}
          job={job}
          job_start={job_start}
          job_end={job_end}
          sendbackData={this.appCallback}
        />
      </div>
    );
  }
}

export default App;
