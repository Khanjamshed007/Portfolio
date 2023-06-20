import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../content/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsGithub } from "react-icons/bs";
const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <div>
                    <a href={i.url} target="blank">
                      View Demo
                    </a>
                    <a href={i.git} target="blank">
                      <BsGithub />
                      Github
                    </a>
                  </div>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
