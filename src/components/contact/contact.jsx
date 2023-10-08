import "./contact.css"
export default function Contact() {
    const openEmailApplication=()=>{
        window.open("mailto:jeison.farinango504@gmail.com");
    }
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
                                <button className="btn contact-btn" onClick={openEmailApplication}> Enviar mensaje <i className="las la-envelope fs-2 align-middle"></i></button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 py-3 ms-3">
                                <h2 className="card-title text-color-primary"> Sigueme</h2>
                                <div className="d-flex">
                                    <a href="https://www.facebook.com/jeison.farinango.56" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <i className="lab la-facebook-square text-color-primary icon"></i>
                                    </a>
                                    <a href="https://www.instagram.com/alexio_fary/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i className="lab la-instagram text-color-primary icon"></i>
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