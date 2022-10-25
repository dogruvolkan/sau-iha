import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Ethem from "../Assets/Images/Yonetim/Ethem Demir.jpg";
import Hasan from "../Assets/Images/Yonetim/Hasan Şahin.jpeg";
import Esra from "../Assets/Images/Yonetim/Esra Kızılelma.jpg";
import Muhammed from "../Assets/Images/Yonetim/Muhammed Büte.jpeg";
import Sevgin from "../Assets/Images/Yonetim/Sevgin Işıl Gürel.jpeg";
import Merve from "../Assets/Images/Yonetim/Merve Kılınc.jpeg";
import Yakup from "../Assets/Images/Yonetim/Yakup Ahmet Yolcu.JPG";

const Management = () => {
  return (
    <>
      <div className="cards-area">
        <div className="container">
          <h4>Yönetim</h4>
          <div className="cards">
            <div className="card-1">
              <div className="card">
                <img src={Ethem} alt="ethem" />
                <h5>Bünyamin Ethem Demir</h5>
                <p>
                  <b>Başkan</b>
                </p>
                <div className="cont">
                  <p>Bilişim Sistemleri Mühendisliği</p>
                  <a href="mailto:bunyamin.demir1@ogr.sakarya.edu.tr">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-2">
              <div className="card">
                <img src={Hasan} alt="hasan" />
                <h5>Hasan Hüseyin Şahin</h5>
                <p>
                  <b>Başkan Yardımcısı</b>
                </p>
                <div className="cont">
                  <p>Makine Mühendisliği</p>
                  <a href="mailto:hasan.sahin19@ogr.sakarya.edu.tr">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={Esra} alt="esra" />
                <h5>Esra Kızılelma</h5>
                <p>
                  <b>Sekreter</b>
                </p>
                <div className="cont">
                  <p>Bilgisayar Mühendisliği</p>
                  <a href="mailto:esra.kizilelma@ogr.sakarya.edu.tr">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-2">
              <div className="card">
                <img src={Muhammed} alt="muhammed" />
                <h5>Muhammed Büte</h5>
                <p>
                  <b>İnsan Kaynakları</b>
                </p>
                <div className="cont">
                  <p>Bilişim Sistemleri Mühendisliği</p>
                  <a href="mailto:muhammed.bute@ogr.sakarya.edu.tr">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={Sevgin} alt="sevgin" />
                <h5>Sevgin Işıl Gürel</h5>
                <p>
                  <b>Sosyal Medya Sorumlusu</b>
                </p>
                <div className="cont">
                  <p>Elektrik Elektronik Mühendisliği</p>
                  <a href="mailto:sevgin.gurel@ogr.sakarya.edu.tr">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-2">
              <div className="card">
                <img src={Merve} alt="merve" />
                <h5>Merve Kılınç</h5>
                <p>
                  <b>Kurumsal İletişim</b>
                </p>
                <div className="cont">
                  <p>Metaluruji ve Malzeme Mühendisliği</p>
                  <a href="mailto:merve.kilinc1@ogr.sakarya.edu.tr">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={Yakup} alt="yakup" />
                <h5>Yakup Ahmet Yolcu</h5>
                <p>
                  <b>Medya ve Tanıtım</b>
                </p>
                <div className="cont">
                  <p>Bilişim Sistemleri Mühendisliği</p>
                  <a href="mailto:yolcuahmetyakup@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
