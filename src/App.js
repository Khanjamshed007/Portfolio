import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header, { Navbar } from "./components/Header";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [menu, setMenu] = useState(false);
  return (
      <>
        <Navbar menu={menu} setMenu={setMenu} />
        <Header menu={menu} setMenu={setMenu} />
        <Home />
        <Education />
        <Work />
        <Timeline />
        <Technologies />
        <Contact />
        <Footer />
        <Toaster />
      </>
  );
}

export default App;
