import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../content/index";

const Technologies = () => {
  return (
    <div id="technologies">
      <h2>Technologies</h2>
      <section>
        {technologies.map((i,index) => (
          <motion.div key={index}>
            <h3>{i.name}</h3>
            <img src={i.icon} alt="icons"/>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Technologies;
