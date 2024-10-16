import React from "react";
import './AboutSection.css'
import aboutImg1 from '../Assets/aboutimg.png'
import aboutImg2 from '../Assets/aboutimg2.png'




const AboutSection = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h2>About us</h2>
        <span>“Our Commitment to Agriculture”</span>
        <p>
          Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
          tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
          augue vivamus lorem justo scelerisque in. Malesuada gravida urna
          pellentesque turpis magna. Semper neque eu velit aliquam in augue
          ullamcorper nisl. Et dolor urna sollicitudin praesent metus facilisis.
          Dui tellus habitasse mi aliquet consequat eget. Interdum semper fames
          consequat nisl varius fermentum elit. In et suscipit ullamcorper augue
          ac nullam porttitor elit amet. Orci cras malesuada ac sit hendrerit
          tellus fringilla risus. Turpis ultricies libero lobortis in viverra.
          Arcu imperdiet sapien mauris posuere. Suspendisse molestie senectus
          tincidunt laoreet tellus et velit faucibus dictum. Lectus nunc proin
          rhoncus elit non.
        </p>
        <div className="about-btn">
            <button>Learn more</button>
        </div>
      </div>

      <div className="about-img">
        <img src={aboutImg1} alt="farm with crops" className="img-1" />        
        <img src={aboutImg2} alt="farm with crops" className="img-2" />        
      </div>
    </div>
  );
};

export default AboutSection;
