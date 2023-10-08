import "./card.css"
const images = require.context("../../assets/img", true);
export default function Card(props) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card pt-3 cards" style={{ "width": "18rem" }}>
                <img src={images(props.params.url)} className="card-img-top mx-auto" alt="..."
                    style={{ "width": "100px", "height": "100px" }} />
                <div className="card-body">
                    <h3 className="text-center">{props.params.name}</h3>
                    <p className="card-text text-justify">{props.params.description}</p>
                </div>
            </div>
        </div>
    )
}