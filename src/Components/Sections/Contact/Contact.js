import React from "react";
import ReactGA from "react-ga";

import linkedInIcon from "../../../images/LI-In-Bug.png";
import githubIcon from "../../../images/GitHub-Logo.png";
import mailIcon from "../../../images/envelope.png";
import resumeIcon from "../../../images/resumeIcno.png";

import resumePDF from "./Ryan Flynn Resume.pdf";
import savingsMapperPrivacyPolicy from "./Privacy Policy.pdf";

class Contact extends React.Component {
  render() {
    // To report page view
    ReactGA.pageview("/Contact");

    return (
      <div className="borderBox">
        <h2>Contact Section</h2>
        <h3>Savings Mapper</h3>
        For Savings Mapper support you can contanct me at one of the links
        below.
        <h4>
          <a href={savingsMapperPrivacyPolicy} target="_blank">
            Savings Mapper Privacy Policy
          </a>
        </h4>
        <h3>Contact Info</h3>
        <div className="contactInfoLink">
          <a href="mailto:rflynn523@yahoo.com" target="_blank">
            <img
              className="contactInfoLink"
              src={mailIcon}
              width="5px"
              height="5px"
              onClick={(e) =>
                ReactGA.event({ category: "Link Clicked", action: "Email" })
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-flynn-5b0a56170/"
            target="_blank"
            onClick={(e) =>
              ReactGA.event({ category: "Link Clicked", action: "LinkedIn" })
            }
          >
            <img
              className="contactInfoLink"
              src={linkedInIcon}
              width="5px"
              height="5px"
            />
          </a>
          <a
            href="https://github.com/rflynn523"
            target="_blank"
            onClick={(e) =>
              ReactGA.event({
                category: "Link Clicked",
                action: "Github Profile",
              })
            }
          >
            <img className="contactInfoLink" src={githubIcon} />
          </a>
          <a href={resumePDF} target="_blank">
            <img
              className="contactInfoLink"
              src={resumeIcon}
              onClick={(e) =>
                ReactGA.event({ category: "Link Clicked", action: "Resume" })
              }
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
