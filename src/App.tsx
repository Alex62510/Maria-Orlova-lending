import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Products from "./components/Products.tsx";
import Contact from "./components/Contacts.tsx";
import Footer from "./components/Footer.tsx";
import Person from "./components/Person.tsx";
import Company from "./components/Company.tsx";

function App() {

  return (
    <>
      <Hero />
      <About />
      <Products />
        <Company/>
        <Person/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
