import React, { Component } from "react";
import "../styles/Form.css";
import data from "../data";
import Personal from './Personal';



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.id === "email") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.id === "phone") {
      this.setState({
        phone: e.target.value,
      });
    } else if (e.target.id === "school") {
      this.setState({
        school: e.target.value,
      });
    } else if (e.target.id === "title") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.id === "study_date") {
      this.setState({
        study_date: e.target.value,
      });
    } else if (e.target.id === "company") {
      this.setState({
        company: e.target.value,
      });
    } else if (e.target.id === "job") {
      this.setState({
        job: e.target.value,
      });
    } else if (e.target.id === "job_start") {
      this.setState({
        job_start: e.target.value,
      });
    } else if (e.target.id === "job_end") {
      this.setState({
        job_end: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // e.target.classList.add("hide");
    e.target.closest(".dim_screen").classList.add("hide");

    const tempname = document.getElementById("name").value;
    const tempmail = document.getElementById("email").value;
    const tempphone = document.getElementById("phone").value;
    const tempschool = document.getElementById("school").value;
    const temptitle = document.getElementById("title").value;
    const tempstudy_date = document.getElementById("study_date").value;
    const tempcompany = document.getElementById("company").value;
    const tempjob = document.getElementById("job").value;
    const tempjob_start = document.getElementById("job_start").value;
    const tempjob_end = document.getElementById("job_end").value;

    if (
      tempname === "" ||
      tempmail === "" ||
      tempphone === "" ||
      tempschool === "" ||
      temptitle === "" ||
      tempstudy_date === "" ||
      tempname === "" ||
      tempcompany === "" ||
      tempjob === "" ||
      tempjob_start === "" ||
      tempjob_end === ""
    ) {
      return;
    }

    data.Personal.name = tempname;
    data.Personal.email = tempmail;
    data.Personal.phone = tempphone;
    data.Education.school = tempschool;
    data.Education.title = temptitle;
    data.Education.study_date = tempstudy_date;
    data.Experience.company = tempcompany;
    data.Experience.job = tempjob;
    data.Experience.job_start = tempjob_start;
    data.Experience.job_end = tempjob_end;

    this.props.sendbackData(
      {
        name: data.Personal.name,
        email: data.Personal.email,
        phone: data.Personal.phone,
      },
      {
        school: data.Education.school,
        title: data.Education.title,
        study_date: data.Education.study_date,
      },
      {
        company: data.Experience.company,
        job: data.Experience.job,
        job_start: data.Experience.job_start,
        job_end: data.Experience.job_end,
      }
    );
  };

  render() {
    const {name, email, phone} = this.props.Personal;
    return (
      
      <div>
           <Personal 
           onPersonalChange={this.props.onPersonalChange}
           onPersonalSubmit={this.props.onPersonalSubmit}
           Personal={{name, email, phone}}
           />
           {/* <Education onEducationChange={this.handlePersonalChange}/>
           <Experience onExperienceChange={this.handlePersonalChange}/> */}
      </div>

    );
  }
}

export default Form;
