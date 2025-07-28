import React from 'react'
import footer__logo from "../../assets/© DWEL.svg"

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 flex justify-between items-start">
        <div>
          <img src={footer__logo} alt="Logo" className="mb-2" />
          <p> Powered by <span className="underline underline-offset-2"> Webflow </span> </p>
        </div>
        <div className="flex gap-20">
          <div>
            <p>Password</p>
            <p>404</p>
          </div>
          <div>
            <p>Licenses</p>
            <p>Style Guide</p>
            <p>Changelog</p>
          </div>
          <div>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer