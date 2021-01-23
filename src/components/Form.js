import React, { Component } from "react";
import "../styles/Form.css";
import data from "../data";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      Personal: {
        name: "",
        email: "",
        phone: "",
      },
      school: this.props.school,
      title: this.props.title,
      study_date: this.props.study_date,
      Education: {
        school: "",
        title: "",
        study_date: "",
      },
      company: this.props.company,
      job: this.props.job,
      job_start: this.props.job_start,
      job_end: this.props.job_end,
      Experience: {
        company: "",
        job: "",
        job_start: "",
        job_end: "",
      },
    };
  }

  editCallback = (personaldata, educationdata, experiencedata) => {
    this.setState({
      name: data.Personal.name,
      email: data.Personal.email,
      phone: data.Personal.phone,
      school: data.Education.school,
      title: data.Education.title,
      study_date: data.Education.study_date,
      company: data.Experience.company,
      job: data.Experience.job,
      job_start: data.Experience.job_start,
      job_end: data.Experience.job_end,
    });
  };

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
    return (
      <div className="dim_screen hide">
        <form
          className="Form"
          onSubmit={(e) => {
            this.handleSubmit(e);
            console.log("form submitted");
          }}
        >
          <div className="input_container">
            <div className="Personal">
              <div className="form_personal">
                <strong>Personal Info</strong>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="input_personal"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="input_personal"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    className="input_personal"
                    type="text"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="Education">
              <div className="form_education">
                <strong>Education</strong>
                <div>
                  <label htmlFor="school">School</label>
                  <input
                    id="school"
                    className="input_education"
                    type="text"
                    value={this.state.school}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    className="input_education"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="study_date">Date</label>
                  <input
                    id="study_date"
                    className="input_education"
                    type="date"
                    value={this.state.study_date}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
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
                  <input
                    id="job"
                    className="input_experience"
                    type="text"
                    value={this.state.job}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="job_start">Starting Date</label>
                  <input
                    id="job_start"
                    className="input_experience"
                    type="date"
                    value={this.state.job_start}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="job_end">End Date</label>
                  <input
                    id="job_end"
                    className="input_experience"
                    type="date"
                    value={this.state.job_end}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn_submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
