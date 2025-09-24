// Experience.jsx
import React from "react";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Senior AI Researcher",
      company: "eThemeStudio",
      period: "Jan, 2020 - Running",
      logo: "images/resume/google.png",
      alt: "google",
      description:
        "Hoinim veniam, quis nostrud exercitation ullamco labo sorini hoeye conse kobita ei nishachor amay unoe quat.",
    },
    {
      id: 2,
      title: "AI Bot Developer",
      company: "Creative Designer",
      period: "Jan, 2020 - Feb, 2021",
      logo: "images/resume/linkedin.png",
      alt: "linkedin",
      description:
        "Hoinim veniam, quis nostrud exercitation ullamco labo sorini hoeye conse kobita ei nishachor amay unoe quat.",
    },
    {
      id: 3,
      title: "Image generator",
      company: "Easy Computers",
      period: "Jan, 2010 - March, 2015",
      logo: "images/resume/envato.png",
      alt: "envato",
      description:
        "Hoinim veniam, quis nostrud exercitation ullamco labo sorini hoeye conse kobita ei nishachor amay unoe quat.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Masters in Artificial Intelligence",
      institution: "Dhaka University",
      period: "Jan, 2020 - May, 2021",
      logo: "images/resume/education-logo1.png",
      alt: "education logo 1",
      description:
        "Hoinim veniam, quis nostrud exercitation ullamco labo sorini hoeye conse kobita ei nishachor amay unoe quat.",
    },
    {
      id: 2,
      degree: "Master in Computer Science",
      institution: "New York University",
      period: "Jul, 2010 - Dec, 2012",
      logo: "images/resume/education-logo2.png",
      alt: "education logo2",
      description:
        "Hoinim veniam, quis nostrud exercitation ullamco labo sorini hoeye conse kobita ei nishachor amay unoe quat.",
    },
    {
      id: 3,
      degree: "Bachelor in Computer Engineering",
      institution: "Bangla College",
      period: "Oct, 2005 - Nov, 2010",
      logo: "images/resume/education-logo3.png",
      alt: "education logo3",
      description:
        "Hoinim veniam, quis nostrud exercitation ullamco labo sorini hoeye conse kobita ei nishachor amay unoe quat.",
    },
  ];

  const ExperienceItem = ({ item, isLast }) => (
    <li
      className={`single-experience position-relative pl-35 ${
        isLast ? "" : "mb-25"
      }`}
    >
      <div className="d-flex justify-content-between align-items-start flex-column-reverse flex-md-row mb-20">
        <div className="experience-info">
          <h4 className="mb-12">{item.title || item.degree}</h4>
          <span className="mb-12">
            <span className="secondary-color pr-05 d-inline-block">
              {item.company || item.institution}
            </span>{" "}
            ({item.period})
          </span>
        </div>
        <img src={item.logo} alt={item.alt} className="d-inline-block" />
      </div>
      <p>{item.description}</p>
    </li>
  );

  const EducationItem = ({ item, isLast }) => (
    <li
      className={`single-experience position-relative pl-35 ${
        isLast ? "" : "mb-25"
      }`}
    >
      <div className="d-flex justify-content-between align-items-start flex-column-reverse flex-md-row mb-20">
        <div className="experience-info">
          <h4 className="mb-12">{item.degree}</h4>
          <span className="secondary-color mb-12">
            <span className="d-inline-block pr-05">{item.institution}</span> (
            {item.period})
          </span>
        </div>
        <img src={item.logo} alt={item.alt} className="d-inline-block" />
      </div>
      <p>{item.description}</p>
    </li>
  );

  return (
    <div className="experience-education-content-area section-border-bottom pb-65">
      <div className="row justify-content-between title-margin mb-45">
        <div className="col-xl-6 col-lg-5 col-md-4 col-sm-12 col-12 d-flex align-items-center">
          <div className="title">
            <h2 className="position-relative pl-25">Resume</h2>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12 col-12 text-right">
          <div className="title-content text-right">
            <p className="text-left">
              Eva cididunt ut labor et dolor magna antiqua.Ut ad enum ad dolor
              sit education amat consenter adipisicing eliot antiqua.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Work Experience Section */}
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="experience-wrapper over-hidden pr-35">
            <h3 className="mb-30">Work Experience</h3>
            <ul>
              {workExperience.map((item, index) => (
                <ExperienceItem
                  key={item.id}
                  item={item}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="education-wrapper over-hidden pl-35">
            <h3 className="mb-30">Education</h3>
            <ul>
              {education.map((item, index) => (
                <EducationItem
                  key={item.id}
                  item={item}
                  isLast={index === education.length - 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
