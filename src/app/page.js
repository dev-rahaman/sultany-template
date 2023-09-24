import About from "./about/page";
import Blog from "./blog/page";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";
import "./globals.css";
import Homes from "./homes/page";
import Map from "./components/Map";

export default function Home() {
  return (
    <main>
      <Homes />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Map />
    </main>
  );
}
