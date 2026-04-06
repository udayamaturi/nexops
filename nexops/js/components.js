// NexOps - Shared Components

const NAV_HTML = `
<nav class="navbar">
  <div class="nav-inner">
    <a href="../index.html" class="logo">
      <div class="logo-icon">N<span style="color:var(--white);font-size:0.6em;">⚙</span></div>
      <div class="logo-text">
        <span class="logo-name">Nex<span>Ops</span></span>
        <span class="logo-tagline">IT Solutions</span>
      </div>
    </a>
    <div class="nav-links">
      <a href="../index.html" class="nav-link">Home</a>
      <a href="../pages/about.html" class="nav-link">About Us</a>
      <div class="nav-dropdown">
        <span class="nav-link dropdown-toggle">Services <span class="arrow">▾</span></span>
        <div class="dropdown-menu">
          <a href="../pages/bpo.html" class="dropdown-item">Business Process Operations</a>
          <a href="../pages/itconsulting.html" class="dropdown-item">IT Consulting</a>
        </div>
      </div>
      <a href="../pages/careers.html" class="nav-link">Careers</a>
      <a href="../pages/contact.html" class="nav-link">Contact</a>
    </div>
    <div class="hamburger">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="mobile-menu">
    <a href="../index.html" class="mobile-link">Home</a>
    <a href="../pages/about.html" class="mobile-link">About Us</a>
    <a href="../pages/bpo.html" class="mobile-link">BPO Services</a>
    <a href="../pages/itconsulting.html" class="mobile-link">IT Consulting</a>
    <a href="../pages/careers.html" class="mobile-link">Careers</a>
    <a href="../pages/contact.html" class="mobile-link">Contact</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="../index.html" class="logo">
          <div class="logo-icon">N<span style="color:var(--white);font-size:0.6em;">⚙</span></div>
          <div class="logo-text">
            <span class="logo-name">Nex<span>Ops</span></span>
            <span class="logo-tagline">IT Solutions</span>
          </div>
        </a>
        <p>Your trusted partner for operational excellence and global IT strategy. Delivering innovation-driven solutions across BPO and IT consulting.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="../index.html" class="footer-link">Home</a>
          <a href="../pages/about.html" class="footer-link">About Us</a>
          <a href="../pages/bpo.html" class="footer-link">BPO Services</a>
          <a href="../pages/itconsulting.html" class="footer-link">IT Consulting</a>
          <a href="../pages/careers.html" class="footer-link">Careers</a>
          <a href="../pages/contact.html" class="footer-link">Contact</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <div class="footer-links">
          <a href="../pages/bpo.html" class="footer-link">Customer Support</a>
          <a href="../pages/bpo.html" class="footer-link">Data Processing</a>
          <a href="../pages/bpo.html" class="footer-link">Quality Assurance</a>
          <a href="../pages/itconsulting.html" class="footer-link">Cloud Strategy</a>
          <a href="../pages/itconsulting.html" class="footer-link">Digital Transformation</a>
          <a href="../pages/itconsulting.html" class="footer-link">Cybersecurity</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="contact-items">
          <div class="contact-item">
            <span class="ci-icon">📍</span>
            <span>Address, Flowe, Suite 380</span>
          </div>
          <div class="contact-item">
            <span class="ci-icon">✉️</span>
            <span>email@nexops.com</span>
          </div>
          <div class="contact-item">
            <span class="ci-icon">📞</span>
            <span>(117) 235 7899</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">Copyright © 2025 NexOps IT Solutions. All rights reserved.</p>
      <div class="footer-socials">
        <a href="#" class="social-btn" title="LinkedIn">in</a>
        <a href="#" class="social-btn" title="Twitter">𝕏</a>
        <a href="#" class="social-btn" title="GitHub">⌥</a>
        <a href="#" class="social-btn" title="Facebook">f</a>
      </div>
    </div>
  </div>
</footer>
<button class="scroll-top" title="Back to top">↑</button>
`;

// Inject nav and footer if placeholders exist
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
