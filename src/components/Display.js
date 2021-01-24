import React, { Component } from "react";
import "../styles/Display.css";
import { format } from "date-fns";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayEditPersonal = () => {
    document.querySelector(".Personal").classList.remove("hide");
  };

  displayEditEducation = () => {
    document.querySelector(".Education").classList.remove("hide");
  };
  // displayData = () => {
  //   console.log("displaying data");

  //   const { name, email, phone } = this.props.Personal;

  //   return (
  //     <div className="main_Display">
  //       <div className="section display_personal">
  //         <strong id="display_name">{name}</strong>
  //         <p id="display_email">{email}</p>
  //         <p id="display_phone">{phone}</p>
  //         <div className="edit_container">
  //           <button
  //             type="button"
  //             className="btn_edit_Personal btn"
  //             onClick={this.displayEditPersonal}
  //           >
  //             Edit
  //           </button>
  //         </div>
  //       </div>
  //       <div className="divisor" />

  //       <div className="section display_education">
  //         <strong>EDUCATION</strong>
  //         <div>
  //           <p id="display_school_date">
  //             {format(new Date(data.Education.study_date), "MMMM dd, yyyy")}
  //           </p>
  //           <div>
  //             <p id="display_school">{data.Education.school}</p>
  //             <p id="display_title">{data.Education.title}</p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="divisor" />
  //       <div className="section display_experience">
  //         <strong>EXPERIENCE</strong>
  //         <p id="display_company">{data.Experience.company}</p>
  //         <p id="display_job">{data.Experience.job}</p>
  //         <div>
  //           <p id="display_company_date_start">
  //             {format(new Date(data.Experience.job_start), "MMMM dd, yyyy")}
  //           </p>
  //           <p>&nbsp;-&nbsp;</p>
  //           <p id="display_company_date_end">
  //             {format(new Date(data.Experience.job_end), "MMMM dd, yyyy")}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  render() {
    const { name, email, phone } = this.props.Personal;
    const { school, title, study_date } = this.props.Education;

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
        </div>
      </div>
    );
  }
}

export default Display;
