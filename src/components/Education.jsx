import React from "react";
import { motion } from "framer-motion";
import { SiCodingninjas } from "react-icons/si";
import { MdApartment } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";

const Education = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      y: "100%",
    },
    two: {
      opacity: 0,
      y: "100%",
    },
    three: {
      opacity: 0,
      y: "100%",
    },
  };
  return (
    <div id="education">
      <h2>Education</h2>
      <section>
        <motion.div
          className="box1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <SiCodingninjas />
          <h2>Full Stack Web Development</h2>
          <p>Coding Ninjas</p>
          <h5>June 2022 - April 2023</h5>
        </motion.div>
        <motion.div
          className="box2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{ delay: 0.3 }}
        >
          <MdApartment />
          <h2>B.E Electrical Engineering</h2>
          <p>Anjuman-i-Islam Kalsekar Technical Campus</p>
          <h5>March 2018- April 2022</h5>
          <h4>CGPA - 7.60</h4>
        </motion.div>
        <motion.div
          className="box3"
          whileInView={animations.whileInView}
          initial={animations.three}
          transition={{ delay: 0.6 }}
        >
          <BsBuilding />
          <h2>Senior Secondary</h2>
          <p>Eden High School and Jr.College</p>
          <h5>2018</h5>
          <h4>Percentage - 59.38%</h4>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;
