import "./hero.css"
export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero">
                <div className="hero-cover">
                    <h1 className="text-white w-100 text-center d-block">JELECTRIC - IBARRA</h1>
                    <p className="text-white d-block text-center align-middle mb-1">Seguridad y Confianza en Cada Conexión.</p>
                    <ul className="list-inline d-flex justify-content-between text-white mx-auto">
                        <li className="list-inline-item">Instalaciones</li>
                        <li className="list-inline-item">Mantenimiento</li>
                        <li className="list-inline-item">Diseño de iluminación</li>
                        <li className="list-inline-item">Asesoria técnica</li>
                    </ul>
                    <a className="btn btn-primary text-white d-flex mx-auto mt-5" href="#contact">Contactar</a>
                </div>
            </div>
        </section>
    )
}