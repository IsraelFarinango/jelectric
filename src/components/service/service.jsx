import "./service.css"
import Card from "../card/card";
import ConfigJSON from "../../assets/json/config.json"
export default function Service() {
    return (
        <section className="service-section pb-5" id="services">
            <div className="service-header">
                <h2>Servicios de Electricidad</h2>
            </div>
            <div className="service-grid container mt-5">
                <div className="row">
                    {Object.values(ConfigJSON.service).map((value, index)=>{
                        return(
                            <Card params={value}/>
                        )
                    })}
                </div>
            </div>
            <a href="#" className="btn d-flex mx-auto">Cotizar</a>
        </section>
    )
}