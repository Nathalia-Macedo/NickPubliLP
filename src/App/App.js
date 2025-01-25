import Navbar from "../Components/NavBar"
import Hero from "../Components/Hero"
import About from "../Components/About";
import Services from "../Components/Services";
import CallToAction from "../Components/CallToAction";
import Testimonials from "../Components/Testmonials";
import Footer from "../Components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <CallToAction/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;
