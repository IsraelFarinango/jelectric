import Logo from "../../assets/img/logo2.png"
import "./nav.css"
export default function Nav() {
  return (
    <header className="bg-withe text-dark ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <div className="logo">
            <img src={Logo} alt="Logo" width="182" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center mx-auto" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">Contactos</a>
              </li>
            </ul>
          </div>
          <div className="phone-number">
           <label> <span className=""><i className="lab la-whatsapp"></i> 0990187208</span></label>
          </div>
        </div>
      </nav>
    </header>
  )
}