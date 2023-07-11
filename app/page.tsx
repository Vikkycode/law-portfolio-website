
import Navbar from './components/common/Navbar'
import Hero from './components/(home)/Hero'
import PracticeArea from './components/(home)/PracticeArea'
import Portfolio from './components/(home)/Portfolio'
import Experience from './components/(home)/Experience'
import Testimonial from './components/(home)/Testimonial'
import NewsLetter from './components/common/NewsLetter'
import Footer from './components/common/Footer'



export default function Home() {
  return (
    <main className=" w-full">
    <Navbar />
    <Hero />
    <PracticeArea />
    <Portfolio />
    <Experience />
    <Testimonial />
    <NewsLetter />
    <Footer />
    </main>
  )
}
