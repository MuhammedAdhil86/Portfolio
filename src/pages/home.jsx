import React from 'react'
import Navbar from '../components/navbar/navbar'
import HeroPart from '../components/hero/heropart'
import About from '../components/aboutme/about'
import PageWrapper from "../components/pagewrapper";
import Skills from '../components/skills/skills';
import Projects from '../components/project/project';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';



export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <HeroPart />
      <About />
    
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
    </PageWrapper>
  );
}