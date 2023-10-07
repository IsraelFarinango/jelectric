import "./hero.css"
export default function Hero() {
    return (
        <section className="">
            <div className="hero">
                <div className="hero-cover">
                    <h1 className="text-white w-100 text-center d-block">JELECTRIC - IBARRA</h1>
                    <p className="text-white d-block text-center align-middle mb-1">Seguridad y Confianza en Cada Conexión.</p>
                    <ul class="list-inline d-flex justify-content-between text-white mx-auto">
                        <li class="list-inline-item">Instalaciones</li>
                        <li class="list-inline-item">Mantenimiento</li>
                        <li class="list-inline-item">Diseño de iluminación</li>
                        <li class="list-inline-item">Asesoria técnica</li>
                    </ul>
                    <a className="btn btn-primary text-white d-flex mx-auto mt-5">Contactar</a>
                </div>
            </div>
        </section>
    )
}