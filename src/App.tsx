import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proposals from './components/Proposals';
import About from './components/About';
import Demands from './components/Demands';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-950">
      <Navbar />
      <main>
        <Hero />
        <Proposals />
        <About />
        <Demands />
      </main>
      <Footer />
    </div>
  );
}
