import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

// App
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar hide={false}/>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
