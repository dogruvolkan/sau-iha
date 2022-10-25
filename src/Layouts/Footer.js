import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

  let tarih = new Date();
  let yil = tarih.getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="social col-sm-12 d-flex justify-content-center">
            <a href="https://chat.whatsapp.com/Egjh2WYpRSoFlWpiIpdoy0"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/company/sauiha/"> <FaLinkedin /></a>
            <a href="https://www.instagram.com/sau.iha/"><FaInstagram /></a>
            <a href="https://twitter.com/sauihat"><FaTwitter /></a>
          </div>
          <div className="copyright col-sm-12 d-flex justify-content-center">
          © {yil} Saüiha Tüm Hakları Saklıdır
          </div>
          <div className="sign col-sm-12 d-flex justify-content-center">
          made with ❤️ <span> By </span> <a href="https://github.com/dogruvolkan"> Volkan Doğru</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
