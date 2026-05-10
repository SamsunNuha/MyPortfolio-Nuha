import './App.css';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import SocialBar from './components/SocialBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Feats from './components/Feats';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <HomeContent />
      <SocialBar />
      <About />
      <Skills />
      <Projects />
      <Feats />
      <Contact />
    </div>
  );
}

export default App;
