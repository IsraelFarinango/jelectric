import Logo from "../../assets/img/logo2.png"
import "./nav.css"
export default function Nav() {
  return (
    <header className="bg-withe text-dark ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <div className="logo">
            <img src={Logo} alt="Logo" width="182" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center mx-auto" id="navbarText">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-dark" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#services">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#contact">Contactos</a>
              </li>
            </ul>
          </div>
          <div className="phone-number">
           <a href="#"> <span className=""><i class="lab la-whatsapp"></i> 0994567890</span></a>
          </div>
        </div>
      </nav>
    </header>
  )
}