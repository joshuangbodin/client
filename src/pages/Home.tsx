import Footer from "../components/Footer";
import About from "../components/home/About";
import Splash from "../components/home/Splash";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Splash />
      <About />
      <Footer />
    </main>
  );
}
