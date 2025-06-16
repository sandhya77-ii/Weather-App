import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-grid">
        <div className="box">
          <h3>Our Services</h3>
          <p>We provide real-time weather updates, forecasts, and climate analysis. 
             Our goal is to ensure people get accurate weather information for travel, planning, and daily activities.</p>
        </div>
        <div className="box">
          <h3>Manufactured Date</h3>
          <p>Founded in June 2025, our platform is designed with modern AI technology to enhance user experience. 
             Our journey started with a mission to deliver precise and reliable weather insights.</p>
        </div>
        <div className="box">
          <h3>Our Vision</h3>
          <p>We aim to simplify weather tracking by offering a user-friendly interface and AI-powered forecasts. 
             Our vision is to make weather predictions accessible to everyone, ensuring safety and preparedness.</p>
        </div>
        <div className="box">
          <h3>Our Commitment</h3>
          <p>We are dedicated to continuous improvement, integrating new technologies to enhance accuracy. 
             Our platform is built with trust, innovation, and sustainability in mind.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
