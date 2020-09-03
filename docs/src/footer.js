import React from 'react';
import pkg from 'ancient-css/package.json';

function Footer() {
  return (
    <footer
      className="section section--large"
      style={{
        display: 'flex',
        fontSize: '14px',
        justifyContent: 'space-between'
      }}
    >
      <div>&copy; {new Date().getFullYear()} Mike Barnhardt</div>
      <div>
        <a href="https://github.com/mikebarnhardt/ancient">
          v{pkg.version}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
