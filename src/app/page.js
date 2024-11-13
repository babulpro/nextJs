 

import About from "./lib/component/utilityCom/About";
import Contact from "./lib/component/utilityCom/Contact";
import Courses from "./lib/component/utilityCom/Courses";
import Hero from "./lib/component/utilityCom/Hero";
import Review from "./lib/component/utilityCom/Review";
import Teacher from "./lib/component/utilityCom/Teacher";
 

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Teacher/>
      <Courses/>
      <Review/>
      <Contact/>
      
       
      
    </div>
  );
}
