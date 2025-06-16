import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Contact us: <a href="mailto:support@weatherapp.com">support@weatherapp.com</a></p>
        <p>9822997634</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
