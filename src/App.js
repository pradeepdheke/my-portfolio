import './App.css';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
export const App = () => {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Hero/>
        <Skills/>
        <Projects/>
        <AboutMe/>
        <Footer/>
      </div>
    </div>
  )
}


export default App;
