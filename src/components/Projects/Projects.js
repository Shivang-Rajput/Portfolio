import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Old_p from "../../Assets/Projects/Old_P.png";
import Todo from "../../Assets/Projects/ToDo.png";
import Eshop from "../../Assets/Projects/E-Shop.png";
import Res_Ana from "../../Assets/Projects/Resume_Ana.png";
import Sorting from "../../Assets/Projects/Advance_sorting_VIS.png";
import Resume_builder from "../../Assets/Projects/Resume_Builder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Res_Ana}
              isBlog={false}
              title="Resume-Analyser"
              description="Developed an AI-powered Resume Analyzer using React.js and Puter.js to evaluate resumes with an interactive and responsive interface.Integrated Puter.js for AI-driven resume analysis, providing instant feedback, skill assessment, and improvement suggestions.
                           Designed a fast and user-friendly application that helps job seekers optimize their resumes for better ATS compatibility and hiring outcomes."
              ghLink="https://github.com/Shivang-Rajput/Resume-Analyser"
              demoLink="https://shivang-rajput.github.io/Resume-Analyser//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume_builder}
              isBlog={false}
              title="Resume-Builder"
              description="Developed an AI-powered Resume Builder using React.js and the Gemini API to create professional, ATS-friendly resumes with ease.Integrated Gemini AI to generate tailored resume content, summaries, and skill descriptions based on user input.
                           Built a responsive and intuitive interface with real-time editing, live preview, and seamless resume generation for an enhanced user experience."
              ghLink="https://github.com/Shivang-Rajput/Resume_Builder"
              demoLink="https://shivang-rajput.github.io/Resume_Builder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eshop}
              isBlog={false}
              title="E-shop"
              description="Developed a responsive E-Shop web application using React.js, providing a seamless and intuitive online shopping experience.Implemented features such as product browsing, category filtering, shopping cart management, and secure order placement.
                           Integrated EmailJS to send instant order confirmation and notification emails, enhancing communication and user engagement."
              ghLink="https://github.com/Shivang-Rajput/E-Shop"
              demoLink="https://shivang-rajput.github.io/E-Shop//"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Old_p}
              isBlog={false}
              title="Old Portfolio"
              description="Developed a personal portfolio website using React.js to showcase projects, technical skills, and professional achievements.Designed a fully responsive and interactive interface with smooth navigation for an engaging user experience across devices.
                           Optimized performance with reusable React components and a clean, modern UI to effectively highlight development work."
              ghLink="https://github.com/Shivang-Rajput/old-portfolio"
              demoLink="https://shivang-rajput.github.io/old-portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sorting}
              isBlog={false}
              title="Advance Sorting Visualiser"
              description="An interactive, web-based Advanced Sorting Visualizer built with HTML, CSS, and JavaScript.Brings complex algorithms to life with real-time step-by-step animations and visual feedback.
                          Helps users easily grasp and compare array manipulation and algorithmic performance."
              ghLink="https://github.com/Shivang-Rajput/Advance-Sorting-Visualiser"
              demoLink="https://shivang-rajput.github.io/Advance-Sorting-Visualiser/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="To-Do-List"
              description="Developed a dynamic To-Do List application using HTML, CSS, and JavaScript to efficiently manage daily tasks.Implemented features such as adding, editing, deleting, and marking tasks as completed with real-time updates.
                           Designed a clean and responsive user interface to provide a simple, organized, and user-friendly task management experience."
              ghLink="https://github.com/Shivang-Rajput/To-Do-List" 
              demoLink="https://shivang-rajput.github.io/To-Do-List/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
