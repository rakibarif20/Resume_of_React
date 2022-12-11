import React from "react";
import "./style.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__content">
        <div className="resume__content__header">
          <div className="resume__content__header__name">
            <h2>Md Rakib Hasan</h2>
            <h3>Front-End Developer</h3>
          </div>
          <div className="resume__content__header__profile">
            <ul className="resme__content__header__profile__ul">
              <li>
                <p>Email</p>
                <span className="profileDot">:</span>
                <a href="https://www.rakibarif20@gmail.com">rakibarif20@gmail.com</a>
              </li>
              <li>
                <p>Linkedin</p>
                <span className="profileDot">:</span>
                <a href="https://www.linkedin.com/in/rakib-arif-627438199/">
                  https://www.linkedin.com/in/rakib-arif-627438199/
                </a>
              </li>
              <li>
                <p>Github</p>
                <span className="profileDot">:</span>
                <a href="https://github.com/rakibarif20">https://github.com/rakibarif20</a>
              </li>
              <li>
                <p>Phone</p>
                <span className="profileDot">:</span>
                <span className="profile_text">+880-185233-3510</span>
              </li>
              {/* <li>
                <p>Address</p>
                <span className="profileDot">:</span>
                <span className="profile_text">Pirojpur,Bangladesh</span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="gap"></div>
        <div className="resume__content__aboutSelf">
          <h4>about myself :</h4>
          <div className="gap-project-area"></div>
          <div>
            <p>
              Programming is not only my profession but also it's my passion. I have good experience with javascript,
              React, Sass, TailwindCss, Bootstrap, and other Front-End technologies. I'm interested to learn MERN stack
              development. Now finding a job to contribute my knowledge and get knowledge working with others.
            </p>
          </div>
        </div>
        <div className="gap"></div>
        <div className="resume__content__technicalProject">
          <h4>technical projects :</h4>
          <div className="gap-project-area"></div>
          <div className="resume__content__technicalProject__list">
            <div className="inlineField">
              <h6>Project Name</h6>
              <span>:</span>
              <p className="Pname">Admin-dashboard</p>
            </div>
            <div className="inlineField">
              <h6>Project Code</h6>
              <span>:</span>
              <a href="https://github.com/rakibarif20/react-admin-dashboard">
                https://github.com/rakibarif20/react-admin-dashboard
              </a>
            </div>
            <div className="inlineField">
              <h6>Project Live</h6>
              <span>:</span>
              <a href="https://react-admin-dashboard-rakib.netlify.app/">
                https://react-admin-dashboard-rakib.netlify.app/
              </a>
            </div>
            <div className="inlineField">
              <div className="title-name-list">
                <h6>Project Details</h6>
              </div>
              <span>:</span>
              <p className="project_details_text">
                Built admin dashboard for an e-commerce website. I created this admin panel and there are multiple
                features like kanban, order lists, product lists, employees lists, editor, color picker, and more. The
                user using dark mode and light mode with multiple colors.
              </p>
            </div>
            <div className="inlineField">
              <div className="title-name-list">
                <h6>Used Tools</h6>
              </div>
              <span>:</span>
              <p className="project_details_text">
                HTML,Css,JavaScript,React,TailwindCss,React-icons,React-router-dom,syncfusion/ej2- react-
                richtexteditor,syncfusion/ej2-react-popups,syncfusion/ej2-react-kanban,syncfusion/ej2-react- inputs,
                syncfusion/ej2-react-calendars,syncfusion/ej2-react-charts and more
              </p>
            </div>
          </div>
          <div className="gap-project-area"></div>
          <div className="resume__content__technicalProject__list">
            <div className="inlineField">
              <h6>Project Name</h6>
              <span>:</span>
              <p className="Pname">Pentara</p>
            </div>
            <div className="inlineField">
              <h6>Project Code</h6>
              <span>:</span>
              <a href="https://github.com/rakibarif20/React-blogsite-pentera">
                https://github.com/rakibarif20/React-blogsite-pentera
              </a>
            </div>
            <div className="inlineField">
              <h6>Project Live</h6>
              <span>:</span>
              <a href="https://blog-site-rakib.netlify.app/">https://blog-site-rakib.netlify.app/</a>
            </div>
            <div className="inlineField">
              <div className="title-name-list">
                <h6>Project Details</h6>
              </div>
              <span>:</span>
              <p className="project_details_text">
                Built Pentara Blog website from Themeforest website. Any user can create a new blog on the website. If
                any user wants they will update her blog and they can remove any blog from this website.
              </p>
            </div>
            <div className="inlineField">
              <div className="title-name-list">
                <h6>Used Tools</h6>
              </div>
              <span>:</span>
              <p className="project_details_text">
                HTML, Css, JavaScript, React, Firebase, Sass, React-icons, React-redux, Redux-toolkit, React-router-
                dom, uuidv4 and more.
              </p>
            </div>
          </div>
          <div className="gap-project-area"></div>
          <div className="resume__content__technicalProject__list">
            <div className="inlineField">
              <h6>Project Name</h6>
              <span>:</span>
              <p className="Pname">Task Managment</p>
            </div>
            <div className="inlineField">
              <h6>Project Code</h6>
              <span>:</span>
              <a href="https://github.com/rakibarif20/task-managment">
              https://github.com/rakibarif20/task-managment
              </a>
            </div>
            <div className="inlineField">
              <h6>Project Live</h6>
              <span>:</span>
              <a href="https://task-managment-react.netlify.app/">https://task-managment-react.netlify.app/</a>
            </div>
            <div className="inlineField">
              <div className="title-name-list">
                <h6>Project Details</h6>
              </div>
              <span>:</span>
              <p className="project_details_text">
              You can use this project for any group work. How many users have there you can see that. If any users want to be created updated and deleted their tasks easily they can do it.
              </p>
            </div>
            <div className="inlineField">
              <div className="title-name-list">
                <h6>Used Tools</h6>
              </div>
              <span>:</span>
              <p className="project_details_text">
                HTML, Css, JavaScript, React, Sass, React-icons, React-redux, Redux-toolkit, React-router-
                dom, and more.
              </p>
            </div>
          </div>
          <div className="gap-project-area"></div>
          <div className="resume__content__technicalProject__list">
            <div className="inlineField">
              <h6>Project Name</h6>
              <span>:</span>
              <p className="Pname">Portfolio</p>
            </div>
            <div className="inlineField">
              <h6>Project Code</h6>
              <span>:</span>
              <a href="https://github.com/rakibarif20/React-Portfolio">
                https://github.com/rakibarif20/React-Portfolio
              </a>
            </div>
            <div className="inlineField">
              <h6>Project Live</h6>
              <span>:</span>
              <a href="https://rakib-react-portfolio.netlify.app/">https://rakib-react-portfolio.netlify.app/</a>
            </div>
            <div className="inlineField">
              <h6>Project Details</h6>
              <span>:</span>
              <p className="project_details_text">
                Built portfolio website. I did show some skills here like different categories. I used some React
                packages like, react particles.
              </p>
            </div>
            <div className="inlineField">
              <h6>Used Tools</h6>
              <span>:</span>
              <p className="project_details_text">
                HTML, Css, JavaScript, React, React-progress, React-icons, React-simple-animate, React- tsparticles,
                Sass and more.
              </p>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="resume__content__skill">
          <h4>skills :</h4>
          <div className="resume__content__skill__list">
            
            <div className="resume__content__skill__list__item">
            <div className="gap-project-area"></div>
              <h5>Languages</h5>
              <div className="gap-project-area"></div>
              <p>JavaScript, HTML</p>
              {/* <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                </ul> */}
            </div>
            <div className="resume__content__skill__list__item">
            <div className="gap-project-area"></div>
              <h5>Framework</h5>
              <div className="gap-project-area"></div>
              <p>
                React, TailwindCss, <br /> Bootstrap, Sass
              </p>
              {/* <ul>
                  <li>React</li>
                  <li>TailwindCss</li>
                  <li>Bootstrap</li>
                  <li>Sass</li>
                </ul> */}
            </div>
            <div className="resume__content__skill__list__item">
            <div className="gap-project-area"></div>
              <h5>Other Technologies</h5>
              <div className="gap-project-area"></div>
              <p>
                Redux, Firebase, Git, <br /> Figma, Adobe XD, jQuery
              </p>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="resume__content__edu_lan">
          <div className="education">
            <h5>Education</h5>
            <div className="gap-project-area"></div>
            <div className="education__institute">
              <div className="">
                <h6>Institute</h6>
                <span>:</span>
                <p>Infra Polytechnic Institute, Barisal, Bangladesh</p>
              </div>
              <div className="">
                <h6>Department</h6>
                <span>:</span>
                <p>CSE</p>
              </div>
              <div className="">
                <h6>Passing Year</h6>
                <span>:</span>
                <p>2018</p>
              </div>
            </div>
          </div>
          <div className="languages">
            <h5>Languages</h5>
            <div className="gap-project-area"></div>
            <div className="">
              <h6>Bangla</h6>
              <span>:</span>
              <p>Native</p>
            </div>
            <div className="">
              <h6>English</h6>
              <span>:</span>
              <p>Conversational</p>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div>
          <h4>Reference :</h4>
          <div className="gap-project-area"></div>
          <p>
            Naeem Ahmed <br />
            Software Engineer
            <br />
            Portonics Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
