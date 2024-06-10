import { useState, useRef, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import SearchSection from './Components/SearchSection'
import Feature from './Components/Feature'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Testimonials from './Components/Testimonials'




function App() {
  const [count, setCount] = useState(0);
  const [activeNav, setActiveNav] = useState("HeroSection")
  const [hashMapOfSection, setHashMapOfSection] = useState ({
      "Section 1": "HeroSection",
      "Section 2": "FeatureSection",
      "Section 3": "AboutSection",
      "Section 4": "TestimonialsSection",
      "Section 5": "ContactSection",
  })

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold to your preference
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(`${entry.target.getAttribute('data-section-name')} is in view`);
          let hashMap = hashMapOfSection;
          setActiveNav(hashMap[entry.target.getAttribute('data-section-name')]);
          
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section-name', `Section ${index + 1}`);
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);


  // useEffect(() => {
  //   console.log(activeNav)
  // }, [activeNav])
  

  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <HeroSection ref={sectionRefs[0]} />
      <SearchSection />
      <Feature ref={sectionRefs[1]} />
      <About ref={sectionRefs[2]} />
      <Testimonials ref={sectionRefs[3]} />
      <ContactUs ref={sectionRefs[4]} />
      <Footer />
    </>
  )
}

export default App
