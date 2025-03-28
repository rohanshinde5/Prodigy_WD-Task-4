import React from "react";
import "./Certification.css"; // Import the CSS file
import Java from '../../assets/Java.png'
import Internship from '../../assets/Internship.png'

const certifications = [
  {
    id: 1,
    title: "Bootcamp on Java App Development",
    organization: "TechGits by Datta Meghe College of Engineering",
    image: Java,
    link: "https://www.linkedin.com/in/rohan-shinde-344426358/recent-activity/all/",
  },

  {
    id: 2,
    title: " Android Developer Virtual Internship ",
    organization: "Google for Developers",
    image:Internship,
    link: "https://www.linkedin.com/search/results/content/?fromMember=%5B%22ACoAAFkNPGQBEew8fPbDLHtRmv4Ug-6OG-9y6dU%22%5D&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAFkNPGQBEew8fPbDLHtRmv4Ug-6OG-9y6dU&keywords=rohan%20shinde&origin=CLUSTER_EXPANSION&position=0&searchId=31febfd9-1edf-400f-979f-35f8a42d028e&sid=qqG&sortBy=%22date_posted%22",
  },
];

const Certification = () => {
  return (
    <section id="certifications">
      <h2 className="cert-title">My Certifications</h2>

      <div className="cert-container">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3 className="cert-name">{cert.title}</h3>
            <p className="cert-organization">{cert.organization}</p>
            <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* LinkedIn Profile Section */}
      <div className="linkedin-section">
        <h3>Connect with me on LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/rohan-shinde-344426358/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Visit My LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Certification;
