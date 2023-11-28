import React from "react";

const Page3 = () => {
  return (
    <div className="page3">
      <div className="l">
        <div className="l-container">
          <div className="online">Online Classes</div>
          <div className="dear">
            Dear Students/Parents, Nifa presents its Learning App for your
            regular art practice in which we have added many amazing features
            Like: Step-by-step recorded demo videos prepared by your faculty
            members. Regular assessment of your practise through assignment
            section. Live class section from same app. Attendance, payment
            invoice, art news, announcements, important information and direct
            connect with the management team are some more features. So hurry up
            n join now to experience personalised coaching by experts sitting at
            your home.
            <div className="wish">
              We wish u Happy Learning. Stay Safe n Healthy.
            </div>
          </div>
          <button>Read More</button>
          <div className="download">Download The App</div>
          <img
            className="img1"
            src="https://www.nifafinearts.com/images/gplay.png"
            alt=""
          />
          <img
            className="img2"
            src="https://www.nifafinearts.com/images/gplay.png"
            alt=""
          />
        </div>
      </div>
      <div className="r">
        <iframe
          width="680"
          height="410"
          style={{border: '20px solid white', marginTop: "11vw", marginLeft: "0vw"}}
          src="https://www.youtube.com/embed/uUl6khUMWc8?si=TKujhHGIEc5y9RHU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Page3;
