import React from "react";
import BreadCramp from "../_component/BreadCramp";
import AboutGrid from "./AboutGrid";
import SectionGap from "../_component/SectionGap";
import AboutGrid2 from "./AboutGrid2";
import AboutBox from "./AboutBox";

export default function AboutPage() {
  return (
    <section>
      <BreadCramp />
      <div className="custom-container">
        <AboutGrid />
        <SectionGap />
        <AboutGrid2 />
        <SectionGap />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-5">
          <AboutBox
            image={"/about-box-1.webp"}
            date={"jul 03, 2019"}
            comments={"0 comments"}
            title={"Retina. Now in colossal and..."}
            paragraph={
              "The idea behind iMac has never wavered: to craft the ultimate desktop experience. The best display, paired with high-performance processors, graphics, and storage — all within an incredibly thin, seamless..."
            }
          />
          <AboutBox
            image={"/about-box-2.webp"}
            date={"jul 03, 2019"}
            comments={"2 comments"}
            title={"Recession is a good opportu..."}
            paragraph={
              "Media prices are falling, so advertising becomes more profitable. The combination of low prices on media and weak competition gives companies the opportunity to cheaply grab market share. Then came..."
            }
          />
          <AboutBox
            image={"/about-box-3.webp"}
            date={"jul 03, 2019"}
            comments={"0 comments"}
            title={"The main objectives of the ..."}
            paragraph={
              "Search of staff is not an easy task. According to the departmental heads' of personnel management words, in order to find a personnel who will correspond to the relevant customer..."
            }
          />
        </div>
        <SectionGap />
      </div>
    </section>
  );
}
