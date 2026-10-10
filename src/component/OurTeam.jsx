import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Component.css";

import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Jack Mehoff",
    role: "CEO Rentive",
    image: team1,
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Jack Mehoff",
    role: "CEO Rentive",
    image: team2,
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Jack Mehoff",
    role: "CEO Rentive",
    image: team3,
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

function OurTeam() {
  return (
    <section className="OurTeam">
      <div className="team-background"></div>

      <div className="container team-container">
        {/* Section Heading */}
        <div className="team-heading">
          <h2>
            Meet Our <span className="span">Professionals Team</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit
            massa mauris molestie hac. Hac arcu amet ullam pellentesque,
            urna eu felis sodales sit non.
          </p>
        </div>

        {/* Team Members */}
        <div className="row justify-content-center team-row">
          {teamMembers.map((member) => (
            <div className="col-lg-4 col-md-6 col-12" key={member.id}>
              <article className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />

                  {/* Social Icons */}
                  <div className="team-socials">
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href={member.social.facebook}
                      aria-label={`${member.name} Facebook`}
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} X`}
                    >
                      <FaXTwitter />
                    </a>

                    <a
                      href={member.social.instagram}
                      aria-label={`${member.name} Instagram`}
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>

                {/* Member Details */}
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;