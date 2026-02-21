import Layout from './components/Layout'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import Process from './sections/Process'
import Contact from './sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Process />
      <Contact />
    </Layout>
  )
}

export default App
