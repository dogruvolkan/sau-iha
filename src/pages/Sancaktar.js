import React from "react";
import Sancaktarimg from "../Assets/Images/team/sancaktar.jpg"

const Sancaktar = () => {
  return (
    <div className="sancaktar">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={Sancaktarimg} alt="sancaktarimg" className="img-thumbnail"/>
          </div>
          <div className="col-sm-6">
            <p>
              2019 yılından beri teknofest uluslararası İHA yarışmalarına
              katılan Sancaktar İHA takımı son 2 yıldır bilgi ve tecrübelerini
              aktarmak, arkalarında devam ettirecek yeni nesil bırakmak adına
              yan takımlar kurmakta. Geçtiğimiz yıl 4 adet takımla beraber yola
              çıkan sancaktar yarışmaya sancaktar ve Poyraz olarak 2 takımla
              katılmıştır Sancaktar İHA takımı 120 takım arasından 4. Olmuş
              Poyraz Takımı ise 460 başvurudan finale geçerek yarışmada 20.
              Olmuştur. Bu sene SAÜ İHA ile birlikte tekrardan aynı amaçla yeni
              alt takımlar kuracaktır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sancaktar;
