import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Product from "./components/Product"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Product />
    </main>
  )
}

export default App