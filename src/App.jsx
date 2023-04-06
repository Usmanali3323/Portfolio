import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Social from "./components/social";
import About from "./components/About";
import Portflio from "./components/Portflio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {

  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Portflio/>
    <Experience/>
    <Contact/>
    <Social/>
    </div>
  )
}

export default App
