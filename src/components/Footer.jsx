import React from "react";
import me from "../assets/images/jklogo.png";
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />
        <h2>Jamshed Khan</h2>
        <p>Motivation is temporary , but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.linkedin.com/in/jamshed-khan-148a421b5/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Khanjamshed007" target="blank">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
