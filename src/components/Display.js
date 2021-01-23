import React, { Component } from "react";
import data from "../data";
import "../styles/Display.css";
import { format } from "date-fns";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayEdit = () => {
    document.querySelector(".dim_screen").classList.remove("hide");
    // this.props.sendbackData({
    //   name: data.Personal.name,
    //   email: data.Personal.email,
    //   phone: data.Personal.phone,
    //   school: data.Education.school,
    //   title: data.Education.title,
    //   study_date: data.Education.study_date,
    //   company: data.Experience.company,
    //   job: data.Experience.job,
    //   job_start: data.Experience.job_start,
    //   job_end: data.Experience.job_end,
    // });
  };

  displayData = () => {
    console.log("displaying data");
    console.log(this.props);

    const { name, email, phone } = this.props;
    return (
      <div className="main_Display">
        <div className="section display_personal">
          <strong id="display_name">{name}</strong>
          <p id="display_email">{email}</p>
          <p id="display_phone">{phone}</p>
        </div>
        <div className="divisor" />
        <div className="section display_education">
          <strong>EDUCATION</strong>
          <div>
            <p id="display_school_date">
              {format(new Date(data.Education.study_date), "MMMM dd, yyyy")}
            </p>
            <div>
              <p id="display_school">{data.Education.school}</p>
              <p id="display_title">{data.Education.title}</p>
            </div>
          </div>
        </div>
        <div className="divisor" />
        <div className="section display_experience">
          <strong>EXPERIENCE</strong>
          <p id="display_company">{data.Experience.company}</p>
          <p id="display_job">{data.Experience.job}</p>
          <div>
            <p id="display_company_date_start">
              {format(new Date(data.Experience.job_start), "MMMM dd, yyyy")}
            </p>
            <p>&nbsp;-&nbsp;</p>
            <p id="display_company_date_end">
              {format(new Date(data.Experience.job_end), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Display">
        {this.displayData()}
        <button className="btn_edit" type="button" onClick={this.displayEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default Display;
