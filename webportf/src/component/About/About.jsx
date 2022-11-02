import React from "react";
import {
  ArrowLeft,
  GraduationCap,
  DeviceMobile,
  Code,
  Star,
  Brain,
} from "phosphor-react";

const About = () => {
  return (
    <div>
      <button className="backAbtBtn btn-empty marginT-3 marginL-2">
        <a href="/">
          <ArrowLeft size={32} />
        </a>
      </button>
      <div>
        <h1 className="about-header">Hi. Thank you for stopping by</h1>
        <h2 className="about-subheading">
          I have displayed my life story and my achievements from the year 2020
          to the present year. I hope I wont bore you and I hope you will enjoy!
        </h2>
      </div>
      <div>
        <h2 className="years year-spacing">Year 2020</h2>
        <div className="divide-divs">
          <div className="white-div">
            <h2 className="marginT-6 marginL-6">
              <GraduationCap size={24} /> Graduated Business Diploma
            </h2>
            <p className="firstYear-paragraph">
              I studied Business for a year in New Zealand Skills and
              Education(NZSE). I learnt a lot about business stategies,
              Accounting, Human Resource Management and Operations. I was a keen
              busines student and a keen programmer on the side while away from
              school. At this time, I was also a self-taught programmer. Used
              Udemy, Stackoverflow, LinkedIn Learning and Codeacademy. Learning
              mostly C# and ASP.NET
            </p>
          </div>
          <div className="dark-div">
            <h2 className="firstYear-subHeader primaryColorText">
              <DeviceMobile size={23} color={"#edebe5"} /> Learnt Xamarin Forms
              Android Development
            </h2>
            <p className="primaryColorText firstYear-paragraph">
              Before learning other .Net frameworks, I fell inlove with Xamarin
              Forms. Even though the framework was considered to be deprecated;
              I was still keen to learn the whole structure of making
              applications on Andriod.
            </p>
            <p className="primaryColorText firstYear-paragraph">
              It was a successful learning, as I gained important experiences
              and understanding that helped me with my learning journey.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="years year-spacing-alternative">Year 2021</h2>
        <div className="divide-divs">
          <div className="dark-div">
            <h2 className="primaryColorText marginT-6 marginL-6">
              <Code size={24} color={"#edebe5"} /> HTML / CSS / Javascript /
              MERN stack & more
            </h2>
            <p className="primaryColorText firstYear-paragraph">
              At this time, I was learning these three main web technologies
              that boosted my passion in web development. Used multiple
              educational tools such as the sources I mentioned above. I
              introduced myself to Algorithm and Data Structures and practice my
              problem-solving skills using LeetCode. Moreover, I have been
              learning more frameworks and libraries throughout the year (see my
              CV)
            </p>
            <p className="primaryColorText firstYear-paragraph">
              I focused on these topic for 4 months straight with the goal of 5+
              hours coding a day. I learnt so much from skills after the 4
              months of dedicated studies which helped me mentor some of my
              friends
            </p>
          </div>
          <div className="white-div">
            <h2 className="secondYear-subHeader">
              <GraduationCap size={24} /> Graduated Diploma IT Technical Support
            </h2>
            <p className="firstYear-paragraph">
              I am very glad that I had the chance to take this course, because
              I made a huge progress in my academic situation. Averaging an 'A'
              throughout that academic year and I was able to learn more about
              networking, hardware and troubleshooting.
            </p>
            <p className="firstYear-paragraph">
              Additionally, I made so much friends and connections with other
              people that helped me coped stress and motivation.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="years year-present">Year 2022</h2>
        <div className="divide-divs">
          <div className="white-div">
            <h2 className="marginT-6 marginL-6">
              <Star size={22} color={"#232527"} /> Internship in Mvp Studio
            </h2>
            <p className="firstYear-paragraph">
              I was granted an internship for 5+ months at Mvp Studio through
              the help of Industry Connect which helped me improve drastically
              and learnt all demanded skills in the industry to be employable.
            </p>
            <p className="firstYear-paragraph">
              During my time, I was given tasks by my mentors which I have
              finished with confidence that I maximised the opportunity I was
              given to me. Additionally, there are a lot of workshops for
              interns like me to join to improve both our soft skills and our
              technical skills.
            </p>
            <p className="firstYear-paragraph">
              Furthermore, I have learnt various technologies such as
              semantic-ui, ReactJS, MongoDB, Microsoft SQL, WebAPI, MERN stack
              and more...
            </p>
          </div>
          <div className="dark-div">
            <h2 className="thirdYear-subHeader primaryColorText">
              <Brain size={24} color={"#edebe5"} /> Self-study during the
              internship
            </h2>
            <p className="primaryColorText firstYear-paragraph">
              I am very passionate about software development, that I do not
              mind to study after work hours. I am currently working on multiple
              self projects that I will be deploying in Azure and showcasing it
              through this portfolio. I will be expecting 3 or 4 projects to be
              done and deployed at the end of this year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
