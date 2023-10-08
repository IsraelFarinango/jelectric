import Nav from "../components/nav/nav"
import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Service from "../components/service/service"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Wsp from "../components/watsapp/whatsapp"
export default function Index(){
    return(
        <div className="index">
            <Nav/>
            <main className="main">
                <Hero/>
                <About/>
                <Service/>
                <Contact/>
                <Footer/>
            </main>
            <Wsp/>
        </div>
    )
}