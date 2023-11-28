import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <h1 className="h1">Welcome to the National Institute of Fine Arts</h1>
        </div>
        <div className="right">
          <div className="number1">
            <i class="ri-phone-fill"></i> 9555112200
          </div>
          <div className="number1">
            <i class="ri-phone-fill"></i> 9810130552
          </div>
          <a href="">
            <i class="ri-mail-line"></i> admission@nifafinearts.com
          </a>
          <div className="icons">
            <i class="ri-facebook-fill"></i> <i class="ri-twitter-fill"></i>{" "}
            <i class="ri-instagram-line"></i> <i class="ri-youtube-line"></i>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className="lef">
          <img
            src="https://www.nifafinearts.com/images/nifa-new-logo.png"
            alt=""
          />
        </div>
        <div className="rig">
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="courses">Courses</div>
          <div className="activities">Activities</div>
          <div className="art-gallery">Art Gallery</div>
          <div className="franchise">Franchise</div>
          <div className="online-classes">Online Classes</div>
          <div className="videos">Videos</div>
          <div className="payfee">Payfee</div>
          <div className="contact">Contact</div>
        </div>
      </div>
      {/* footer */}
      <div className="main">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;
