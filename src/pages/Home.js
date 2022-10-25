import React from "react";
import Droneimg from "../Assets/Images/back.jpg";
import Img1 from "../Assets/Images/biz.jpg";
import Img2 from "../Assets/Images/dronebasin.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Redbull from "../Assets/Images/Sponsor/redbull.png";
import British from "../Assets/Images/Sponsor/british.png";
import Teknokent from "../Assets/Images/Sponsor/teknokent.png"

const Home = () => {
  return (
    <div>
      <div className="background-area">
        <img src={Droneimg} alt="saü drone iha"></img>
        <div className="back-text">
          <h2>
            SAKARYA ÜNİVERSİTESİ <br /> İNSANSIZ HAVA ARAÇLARI <br /> TOPLULUĞU
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdw1kqymnKih-v0Xl2dTHzvwvvW51Y7T_bZjUUGG7fjpMRsEw/viewform"
            className=" shadow"
          >
            Kayıt Olmak İster misiniz ?
          </a>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>BİZ KİMİZ</h1>
              <p>
                Genel olarak Sakarya Üniversitesi ve Sakarya Uygulamalı Bilimler
                Üniversitesi’nden aynı amacı misyon edinmiş “SAÜ İHA Topluluğu
                ve Poyraz Havacılık” çatısı altında toplanan gençleriz.
                Projelerimiz Multidisipliner olduğundan farklı bölümlerden bir
                çok Öğrenci, akademisyen ve mentor bulunmakta. Gerek
                topluluğumuzda gerek Teknoloji takımlarımızın hiç birinde üyeler
                arasında üstünlük söz konusu değildir fakat her organizasyonda
                olduğu gibi bizim de bir idari yapımız mevcut. İdari yapı
                başarıyı getirecek organizasyonun yönetilmesi için oldukça önem
                arz ediyor. Burada temel aldığımız unsur ise liyakat esaslı
                görevlendirme.
              </p>
            </div>
            <div className="col-sm-6">
              <img src={Img1} className="img-thumbnail shadow" alt="saü-iha-rektör"/>
            </div>
          </div>
        </div>
      </div>
      <div className="basin">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>Basında Biz</h1>
              <div className="card ">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="haber-yil">2022</p>
                    </div>
                    <div className="col-sm-9">
                      <p>
                        <b>medyabar</b>
                      </p>
                      <p>
                        Sakarya Üniversitesi (SAÜ) topluluk tanıtım günlerinde
                        öğrenciler, topluluklarını tanıtmak amacıyla stant
                        kurdu. O topluluklardan biri de Sakarya Üniversitesi
                        İnsansız Hava Araçları (SAÜ İHA) topluluğuydu.
                        <a href="https://medyabar.com/haber/12374457/rektor-al-sau-iha-toplulugu-tanitim-standini-gezdi">
                          Devamını oku ➡
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="haber-yil">2022</p>
                    </div>
                    <div className="col-sm-9">
                      <p>
                        <b>haber sakarya</b>
                      </p>
                      <p>
                        Sakarya Üniversitesi bünyesinde daha fazla ekonomik akım
                        çıkararak farklı alanlarda öğrencileri ve sektörü bir
                        araya getirmeyi hedeflediklerini söyleyen topluluk
                        ekibi, sektörün güncelliğini yakalayabilen öğrenciler
                        yetiştirmek istediklerini belirtti.
                        <a href="https://haber.sakarya.edu.tr/amacimiz-nitelikli-ogrenci-yetistirmek-h109295.html">
                          Devamını oku ➡
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="haber-yil">2022</p>
                    </div>
                    <div className="col-sm-9">
                      <p>
                        <b>lchaberajansi</b>
                      </p>
                      <p>
                        Sakarya Üniversitesi’nde (SAÜ) yeni eğitim-öğretim
                        döneminin başlamasıyla birlikte faaliyetlerine yeniden
                        başlayacak olan öğrenci toplulukları için topluluk
                        tanıtım günleri gerçekleştirildi. Sakarya Üniversitesi
                        Rektörü Prof. Dr. Hamza Al stantları tek tek dolaşarak..
                        <a href="https://lchaberajansi.com/rektor-al-topluluk-stantlarini-ziyaret-etti/">
                          Devamını oku ➡
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="haber-yil">2022</p>
                    </div>
                    <div className="col-sm-9">
                      <p>
                        <b>adapostasi</b>
                      </p>
                      <p>
                        Sakarya Üniversitesi (SAÜ) topluluk tanıtım günlerinde
                        öğrenciler, topluluklarını tanıtmak amacıyla stant
                        kurdu. SAÜ İHA Topluluğu Başkanı Bünyamin Ethem Demir,
                        “Biz temelde nitelikli öğrenci yetiştirerek
                        üniversitemize yardımcı olmak istiyoruz” dedi.
                        <a href="https://www.adapostasi.com/haber/12380033/amacimiz-nitelikli-ogrenci-yetistirmek">
                          Devamını oku ➡
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img src={Img2} className="shadow img-thumbnail" alt="sau-iha-basın"/>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsor">
        <div className="container">
          <h1>Sponsorlarımız</h1>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            dots={false}
            autoplay
          >
            <div className="item">
              <div className="card">
                <img src={Redbull} alt="redbull"/>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={British} alt="british-culture"/>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={Teknokent} alt="teknokent"/>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="iletisim">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h1>İletişim</h1>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="600"
                    height="400"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=sakarya%20%C3%BCniversitesi%20bilgisayar%20ve%20bili%C5%9Fim&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  <a href="https://123movies-to.org"></a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <form action="https://formspree.io/f/xvoybnje" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Adınız ve Soyadınız
                  </label>
                  <input
                    name="isim"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Mehmet Türker"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Adresiniz
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="isim@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tel" className="form-label">
                    Telefon Numaranız
                  </label>
                  <input
                    name="telefon"
                    type="tel"
                    className="form-control"
                    id="tel"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mesaj" className="form-label">
                    Mesajınız
                  </label>
                  <textarea
                    name="mesaj"
                    className="form-control"
                    id="mesaj"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary px-5 py-2">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
