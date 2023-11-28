import React from "react";

const Page2 = () => {
  return (
    <>
      <div className="top">
        <div className="h2">Nifa Updates:: </div>
        <div className="div">
          <div id="marqueeq">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="3"
              scrolldelay="1"
              onmouseover="this.stop()"
              onmouseout="this.start()"
            >
              <p>
                <strong style={{ color: "#b11e6f", fontFamily: "sans-serif" }}>
                  All NIFA courses are now available worldwide through our Live
                  and Interactive Online Classes. Please&nbsp;download the NIFA
                  app from our online classes page to register for a
                  complimentary trial class.
                </strong>
              </p>
            </marquee>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="welcome">
          Welcome To National Institute of Fine Arts
        </div>
        <p>
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>
        <p>
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.
        </p>
        <div className="national">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes.
        </div>
        <button>Read More</button>
      </div>
    </>
  );
};

export default Page2;
