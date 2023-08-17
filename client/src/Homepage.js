import "./index.css";
import Hero from "./Hero";
import SectionMenuAndMenuContainer from "./pages/SectionMenuAndMenuContainer";
import FAQs from "./components/Faq";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";




function Homepage() {
  return (
    <div className="App">
      <Hero />
      <SectionMenuAndMenuContainer />
      <FAQs/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
export default Homepage;
