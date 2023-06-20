import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsBoxArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/images/jklogo.png";
const Home = () => {
  const projectcount = useRef(null);

  const animationprojectcount = () => {
    animate(0, 20, {
      duration: 1.5,
      onUpdate: (v) => (projectcount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Jamshed Khan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:khanjamshed404@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsBoxArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
                <motion.span
                  ref={projectcount}
                  whileInView={animationprojectcount}
                ></motion.span>
              
            </p>
            <span>Projects Done</span>
          </article>

          <article data-special>
            <p>Contact</p>
            <span>khanjamshed404@gmail.com</span>
          </article>
        </div>
      </section>
      <section>
        <img src={me} alt="Jamshed khan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
