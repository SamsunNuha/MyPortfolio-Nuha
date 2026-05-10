import './App.css';
import Header from './components/Header';
import Home_Contents from './components/Home_Contents';
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
      <Home_Contents />
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
