import React from "react";
import "../styles/Skills.css";

const skills = [
	{ icon: "fab fa-html5", title: "HTML" },
	{ icon: "fab fa-css3-alt", title: "CSS" },
	{ icon: "fas fa-database", title: "MySQL" },
	{ icon: "fab fa-python", title: "Python" },
	{ icon: "fab fa-react", title: "ReactJS" },
	{ icon: "fas fa-layer-group", title: "Next-JS" },
	{ icon: "fab fa-git", title: "Git" },
	{ icon: "fas fa-server", title: "REST API" },
	{ icon: "fab fa-js", title: "JavaScript" },
	{ icon: "fas fa-drafting-compass", title: "Bootstrap" },
	{ icon: "fas fa-code", title: "C++" },
	
	{ icon: "fas fa-route", title: "Express-JS" },
];

const Skills = () => {
	return (
		<>
			<p className="skills-heading">The Arsenal...</p>
			<div className="skills-container">
				{skills.map((skill, index) => (
					<div key={index} className="outer">
						<div className="dot"></div>
						<div className="card">
							<div className="ray"></div>
							<div className="text">
								<i className={skill.icon}></i>
							</div>
							<div>{skill.title}</div>
							<div className="line topl"></div>
							<div className="line leftl"></div>
							<div className="line bottoml"></div>
							<div className="line rightl"></div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Skills;
