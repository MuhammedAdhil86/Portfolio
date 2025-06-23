import Navbar        from '../components/navbar/navbar';
import PageWrapper   from '../components/pagewrapper';
import HeroPart      from '../components/hero-pack/heropart';
import About         from '../components/aboutme/about';
import Skills        from '../components/skills/skills';
import Projects      from '../components/project/project';
import Contact       from '../components/contact/contact';
import Footer        from '../components/footer/footer';
import useScrollToHash from '../hooks/userScrollToHash';

export default function Home() {
  useScrollToHash();       // enables #hash scrolling

  return (
    <PageWrapper>
      <Navbar />

      <div id="top"><HeroPart /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </PageWrapper>
  );
}
