import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivang Kumar Singh </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently B.Tech(CSE) 4th year Student.
            <br />
            {/* hello */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring hilly Area
            </li>
          </ul>

          <p style={{ color: "rgb(241, 237, 243)" }}>
            "Driven to create meaningful and impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Shivang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
