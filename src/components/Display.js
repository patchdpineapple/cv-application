import React, { Component } from "react";
import "../styles/Display.css";
import { format } from "date-fns";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayEditPersonal = () => {
    document.querySelector(".dim_screen").classList.remove("hide_dim_screen");
    document.querySelector(".Personal").classList.remove("hide");
    document.querySelector(".Education").classList.add("hide");
    document.querySelector(".Experience").classList.add("hide");
  };

  displayEditEducation = () => {
    document.querySelector(".dim_screen").classList.remove("hide_dim_screen");
    document.querySelector(".Personal").classList.add("hide");
    document.querySelector(".Education").classList.remove("hide");
    document.querySelector(".Experience").classList.add("hide");
  };

  displayEditExperience = () => {
    document.querySelector(".dim_screen").classList.remove("hide_dim_screen");
    document.querySelector(".Personal").classList.add("hide");
    document.querySelector(".Education").classList.add("hide");
    document.querySelector(".Experience").classList.remove("hide");
  };

  render() {
    const { name, email, phone } = this.props.Personal;
    const { school, title, study_date } = this.props.Education;
    const { company, job, job_start, job_end } = this.props.Experience;

    return (
      <div className="Display">
        <div className="main_Display">
          <div className="section display_personal">
            <strong id="display_name">{name}</strong>
            <p id="display_email">{email}</p>
            <p id="display_phone">{phone}</p>
            <div className="edit_container_Personal">
              <button
                className="btn_edit_Personal btn"
                onClick={this.displayEditPersonal}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="divisor" />
          <div className="section display_education">
            <strong>EDUCATION</strong>
            <div className="Education_info">
              <p id="display_school_date">
                {format(new Date(study_date), "MMMM dd, yyyy")}
              </p>
              <div>
                <p id="display_school">{school}</p>
                <p id="display_title">{title}</p>
              </div>
            </div>
            <div className="edit_container_Education">
              <button
                className="btn_edit_Education btn"
                onClick={this.displayEditEducation}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="divisor" />
          <div className="section display_experience">
            <strong>EXPERIENCE</strong>
            <p id="display_company">{company}</p>
            <p id="display_job">{job}</p>
            <div className="Experience_info">
              <p id="display_company_date_start">
                {format(new Date(job_start), "MMMM dd, yyyy")}
              </p>
              <p>&nbsp;-&nbsp;</p>
              <p id="display_company_date_end">
                {format(new Date(job_end), "MMMM dd, yyyy")}
              </p>
            </div>
            <div className="edit_container_Experience">
              <button
                className="btn_edit_Experience btn"
                onClick={this.displayEditExperience}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
