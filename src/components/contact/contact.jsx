import "./contact.css"
export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-header">
                <h2>Contactate</h2>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 px-5">
                            <div className="card py-5 border-0">
                                <p className="card-text card-justify">
                                    Tines problemas con tus conexiones electricas o necesitas asesoramiento en tus proyectos?,
                                    escribeme estare gustoso de atenderte.
                                </p>
                                <a className="btn contact-btn"> Enviar mensaje <i class="las la-envelope"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 py-3 ms-3">
                                <h2 className="card-title text-color-primary"> Sigueme</h2>
                                <div class="d-flex">
                                    <a href="https://www.facebook.com/afsoftware96" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <i class="lab la-facebook-square text-color-primary icon"></i>
                                    </a>
                                    <a href="https://www.instagram.com/ismaelfari96/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i class="lab la-instagram text-color-primary icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}