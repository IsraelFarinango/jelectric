import "./about.css"
import ProfileImg from "../../assets/img/profile.png"
export default function About() {
    return (
        <section className="about-section p-5">
            <div class="card mb-3 mx-auto p-3 border-0">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={ProfileImg} class="img-fluid rounded-start" alt="jeison farinango" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body ms-3">
                            <h2 class="card-title mb-5 fs-2  d-flex justify-content-center text-color-primary">Electricista Jeison Farinango</h2>
                            <p class="card-text text-justify">
                                Profesional técnico con amplios conocimientos en el diseño de iluminación,
                                mantenimiento preventivo y correctivo de instalaciones eléctricas residenciales.
                                Mi enfoque se centra en la seguridad, la eficiencia y la satisfacción del cliente,
                                siguiendo rigurosamente los estándares de seguridad en cada proyecto. Si necesitas 
                                asistencia eléctrica confiable, ¡no dudes en contactarme!.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}