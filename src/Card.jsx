import "./App.css";
import './assets/new_york_city.jpg';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.image} className="cityImage"/>
                <h2>{props.cityName}</h2>
                <a href={props.aboutLink} target="_blank">
                    <button>Learn More</button>
                </a>
                
            </div>
        </>
    )
}

export default Card;