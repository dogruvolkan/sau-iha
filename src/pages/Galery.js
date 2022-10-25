import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Img1 from "../Assets/Images/Galery/1.jpg";
import Img2 from "../Assets/Images/Galery/2.jpg";
import Img3 from "../Assets/Images/Galery/3.jpg";
import Img4 from "../Assets/Images/Galery/4.jpg";
import Img5 from "../Assets/Images/Galery/5.jpg";
import Img6 from "../Assets/Images/Galery/6.jpg";
import Img7 from "../Assets/Images/Galery/7.jpg";
import Img8 from "../Assets/Images/Galery/8.jpg";
import Img9 from "../Assets/Images/Galery/9.jpg";
import Img10 from "../Assets/Images/Galery/10.jpg";
import Img11 from "../Assets/Images/Galery/11.jpg";
import Img12 from "../Assets/Images/Galery/12.jpg";
import Img13 from "../Assets/Images/Galery/13.jpg";
import Img14 from "../Assets/Images/Galery/14.jpg";
import Img15 from "../Assets/Images/Galery/15.jpg";
import Img16 from "../Assets/Images/Galery/16.jpg";
import Img17 from "../Assets/Images/Galery/17.jpg";
import Img18 from "../Assets/Images/Galery/18.jpg";
import Img19 from "../Assets/Images/Galery/19.jpg";

const images = [Img1, Img2, Img3,Img4, Img5, Img6,Img7, Img8, Img9 , Img10, Img11 , Img12 , Img13, Img14, Img15 , Img16 , Img17, Img18 , Img19 ];

const Galery = () => {
 
  return (
    <>
     

      <div className="galery">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt="sauiha resim"
                className="img-thumbnail"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Galery;
