import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/content';
import CurvedLoop from './CurvedLoop'
import TextType from './TextType'
import StaggeredMenu from './StaggeredMenu';


const HeroSection = () => {
 return (
  <section className="hero section-padding" style={{ marginTop: '73px' }}>
    <div className="container">
      {/* <div className="curved-loop-wrapper" style={{ marginTop: '60px' }}>
        <CurvedLoop marqueeText={"    AI Accelerated       Smart Scalable"
        } 
        speed={1.1}/>
      </div> */}

      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* <TextType textColors={"white"} text = {["Smart Tech", "Lead with AI", "Powering Your Business"]}/> */}
      </motion.p>

    </div>
     <StaggeredMenu  items={[
          { label: "Home", link: "/" },
          { label: "Tender Analyst", link: "/usecase/tender-analysis" },
          { label: "SLM", link: "/usecase/chatbot" },
          
        ]}
        colors={["#5227FF", "#B19EEF", "#311B92"]}/>
  </section>
);

};

export default HeroSection;