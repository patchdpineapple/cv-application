(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(9),o=n.n(s),d=(n(15),n(7)),r=n(2),l=n(3),h=n(6),u=n(5),j=n(4),b=(n(16),n(17),n(24)),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).displayEditPersonal=function(){document.querySelector(".dim_screen").classList.remove("hide_dim_screen"),document.querySelector(".Personal").classList.remove("hide"),document.querySelector(".Education").classList.add("hide"),document.querySelector(".Experience").classList.add("hide")},a.displayEditEducation=function(){document.querySelector(".dim_screen").classList.remove("hide_dim_screen"),document.querySelector(".Personal").classList.add("hide"),document.querySelector(".Education").classList.remove("hide"),document.querySelector(".Experience").classList.add("hide")},a.displayEditExperience=function(){document.querySelector(".dim_screen").classList.remove("hide_dim_screen"),document.querySelector(".Personal").classList.add("hide"),document.querySelector(".Education").classList.add("hide"),document.querySelector(".Experience").classList.remove("hide")},a.state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.Personal,t=e.name,n=e.email,i=e.phone,c=this.props.Education,s=c.school,o=c.title,d=c.study_date,r=this.props.Experience,l=r.company,h=r.job,u=r.job_start,j=r.job_end;return Object(a.jsx)("div",{className:"Display",children:Object(a.jsxs)("div",{className:"main_Display",children:[Object(a.jsxs)("div",{className:"section display_personal",children:[Object(a.jsx)("strong",{id:"display_name",children:t}),Object(a.jsx)("p",{id:"display_email",children:n}),Object(a.jsx)("p",{id:"display_phone",children:i}),Object(a.jsx)("div",{className:"edit_container_Personal",children:Object(a.jsx)("button",{className:"btn_edit_Personal btn",onClick:this.displayEditPersonal,children:"Edit"})})]}),Object(a.jsx)("div",{className:"divisor"}),Object(a.jsxs)("div",{className:"section display_education",children:[Object(a.jsx)("strong",{children:"EDUCATION"}),Object(a.jsxs)("div",{className:"Education_info",children:[Object(a.jsx)("p",{id:"display_school_date",children:Object(b.a)(new Date(d),"MMMM dd, yyyy")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{id:"display_school",children:s}),Object(a.jsx)("p",{id:"display_title",children:o})]})]}),Object(a.jsx)("div",{className:"edit_container_Education",children:Object(a.jsx)("button",{className:"btn_edit_Education btn",onClick:this.displayEditEducation,children:"Edit"})})]}),Object(a.jsx)("div",{className:"divisor"}),Object(a.jsxs)("div",{className:"section display_experience",children:[Object(a.jsx)("strong",{children:"EXPERIENCE"}),Object(a.jsx)("p",{id:"display_company",children:l}),Object(a.jsx)("p",{id:"display_job",children:h}),Object(a.jsxs)("div",{className:"Experience_info",children:[Object(a.jsx)("p",{id:"display_company_date_start",children:Object(b.a)(new Date(u),"MMMM dd, yyyy")}),Object(a.jsx)("p",{children:"\xa0-\xa0"}),Object(a.jsx)("p",{id:"display_company_date_end",children:Object(b.a)(new Date(j),"MMMM dd, yyyy")})]}),Object(a.jsx)("div",{className:"edit_container_Experience",children:Object(a.jsx)("button",{className:"btn_edit_Experience btn",onClick:this.displayEditExperience,children:"Edit"})})]})]})})}}]),n}(i.Component),m=(n(18),{Personal:{name:"Sean Patrick Penaranda",email:"boeybeer123@gmail.com",phone:"09123456789"},Education:{school:"Boey University",title:"BS Computer Science",study_date:"2012-10-20"},Experience:{company:"San Miguel Corp",job:"Junior Developer",job_start:"2012-3-5",job_end:"2021-1-10"}}),x=(n(19),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.id,i=t.value;a.props.onPersonalChange(n,i)},a.handleSubmit=function(e){e.preventDefault(),document.querySelector(".Personal").classList.add("hide"),document.querySelector(".dim_screen").classList.add("hide_dim_screen");var t=a.props.Personal,n=t.name,i=t.email,c=t.phone;""!==n&&""!==i&&""!==c&&(m.Personal.name=n,m.Personal.email=i,m.Personal.phone=c,a.props.onPersonalSubmit({name:n,email:i,phone:c}),e.stopPropagation())},a.state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.Personal,t=e.name,n=e.email,i=e.phone;return Object(a.jsxs)("form",{className:"Personal hide",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form_personal",children:[Object(a.jsx)("strong",{children:"Personal Info"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{id:"name",className:"input_personal",type:"text",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{id:"email",className:"input_personal",type:"text",value:n,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(a.jsx)("input",{id:"phone",className:"input_personal",type:"text",value:i,onChange:this.handleChange})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn_submit",children:"Submit"})]})}}]),n}(i.Component)),O=(n(20),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.id,i=t.value;a.props.onEducationChange(n,i)},a.handleSubmit=function(e){e.preventDefault(),document.querySelector(".Education").classList.add("hide"),document.querySelector(".dim_screen").classList.add("hide_dim_screen");var t=a.props.Education,n=t.school,i=t.title,c=t.study_date;""!==n&&""!==i&&""!==c&&(m.Education.school=n,m.Education.title=i,m.Education.study_date=c,a.props.onEducationSubmit({school:n,title:i,study_date:c}),e.stopPropagation())},a.state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.Education,t=e.school,n=e.title,i=e.study_date;return Object(a.jsxs)("form",{className:"Education hide",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form_education",children:[Object(a.jsx)("strong",{children:"Education"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"school",children:"School"}),Object(a.jsx)("input",{id:"school",className:"input_education",type:"text",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)("input",{id:"title",className:"input_education",type:"text",value:n,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"study_date",children:"Date"}),Object(a.jsx)("input",{id:"study_date",className:"input_education",type:"date",value:i,onChange:this.handleChange})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn_submit",children:"Submit"})]})}}]),n}(i.Component)),_=(n(21),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.id,i=t.value;a.props.onExperienceChange(n,i)},a.handleSubmit=function(e){e.preventDefault(),document.querySelector(".Experience").classList.add("hide"),document.querySelector(".dim_screen").classList.add("hide_dim_screen");var t=a.props.Experience,n=t.company,i=t.job,c=t.job_start,s=t.job_end;""!==n&&""!==i&&""!==c&&""!==s&&(m.Experience.company=n,m.Experience.job=i,m.Experience.job_start=c,m.Experience.job_end=s,a.props.onExperienceSubmit({company:n,job:i,job_start:c,job_end:s}),e.stopPropagation())},a.state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.Experience,t=e.company,n=e.job,i=e.job_start,c=e.job_end;return Object(a.jsxs)("form",{className:"Experience hide",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form_experience",children:[Object(a.jsx)("strong",{children:"Experience"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"company",children:"Company"}),Object(a.jsx)("input",{id:"company",className:"input_experience",type:"text",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"job",children:"Job Title"}),Object(a.jsx)("input",{id:"job",className:"input_experience",type:"text",value:n,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"job_start",children:"Job Starting Date"}),Object(a.jsx)("input",{id:"job_start",className:"input_experience",type:"date",value:i,onChange:this.handleChange})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"job_end",children:"Job End Date"}),Object(a.jsx)("input",{id:"job_end",className:"input_experience",type:"date",value:c,onChange:this.handleChange})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn_submit",children:"Submit"})]})}}]),n}(i.Component)),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.Personal,t=e.name,n=e.email,i=e.phone,c=this.props.Education,s=c.school,o=c.title,d=c.study_date,r=this.props.Experience,l=r.company,h=r.job,u=r.job_start,j=r.job_end;return Object(a.jsxs)("div",{className:"dim_screen hide_dim_screen",children:[Object(a.jsx)(x,{onPersonalChange:this.props.onPersonalChange,onPersonalSubmit:this.props.onPersonalSubmit,Personal:{name:t,email:n,phone:i}}),Object(a.jsx)(O,{onEducationChange:this.props.onEducationChange,onEducationSubmit:this.props.onEducationSubmit,Education:{school:s,title:o,study_date:d}}),Object(a.jsx)(_,{onExperienceChange:this.props.onExperienceChange,onExperienceSubmit:this.props.onExperienceSubmit,Experience:{company:l,job:h,job_start:u,job_end:j}})]})}}]),n}(i.Component),E=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:m.Personal.name,email:m.Personal.email,phone:m.Personal.phone,Personal:{name:m.Personal.name,email:m.Personal.email,phone:m.Personal.phone},school:m.Education.school,title:m.Education.title,study_date:m.Education.study_date,Education:{school:m.Education.school,title:m.Education.title,study_date:m.Education.study_date},company:m.Experience.company,job:m.Experience.job,job_start:m.Experience.job_start,job_end:m.Experience.job_end,Experience:{company:m.Experience.company,job:m.Experience.job,job_start:m.Experience.job_start,job_end:m.Experience.job_end}},a.handlePersonalChange=a.handlePersonalChange.bind(Object(h.a)(a)),a.handlePersonalSubmit=a.handlePersonalSubmit.bind(Object(h.a)(a)),a.handleEducationChange=a.handleEducationChange.bind(Object(h.a)(a)),a.handleEducationSubmit=a.handleEducationSubmit.bind(Object(h.a)(a)),a.handleExperienceChange=a.handleExperienceChange.bind(Object(h.a)(a)),a.handleExperienceSubmit=a.handleExperienceSubmit.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handlePersonalChange",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"handlePersonalSubmit",value:function(e){this.setState({Personal:e})}},{key:"handleEducationChange",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"handleEducationSubmit",value:function(e){this.setState({Education:e})}},{key:"handleExperienceChange",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"handleExperienceSubmit",value:function(e){this.setState({Experience:e})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,i=e.phone,c=e.Personal,s=this.state,o=s.school,d=s.title,r=s.study_date,l=s.Education,h=this.state,u=h.company,j=h.job,b=h.job_start,m=h.job_end,x=h.Experience;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"title",children:"CV Application"}),Object(a.jsx)(p,{Personal:c,Education:l,Experience:x}),Object(a.jsx)(y,{Personal:{name:t,email:n,phone:i},Education:{school:o,title:d,study_date:r},Experience:{company:u,job:j,job_start:b,job_end:m},onPersonalChange:this.handlePersonalChange,onPersonalSubmit:this.handlePersonalSubmit,onEducationChange:this.handleEducationChange,onEducationSubmit:this.handleEducationSubmit,onExperienceChange:this.handleExperienceChange,onExperienceSubmit:this.handleExperienceSubmit})]})}}]),n}(i.Component);window.data=m,o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.a3e15da4.chunk.js.map