/* eslint-disable react/prop-types */
import "./Card.css"
import { Link } from "react-router-dom";

// TODO: Aplicar los prop-types con lo visto en el curso de Fazt
function Card({title="TITULO POR DEFECTO", description="DESCRIPCION"}) {
    return (
        <div className="Card">
            <Link to={title}><h2>{title}</h2></Link>
            <p>{description}</p>
        </div>
    )
}

export default Card;