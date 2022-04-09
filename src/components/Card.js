import React from "react";


export default function Card(props) {
    return (
        <div className="container flex">
            <div className="--card-image">
                <img src={props.item.imageUrl} alt={props.item.title} />
            </div>
            <div className="--card-info flex">
                <div className="--location-info flex">
                    <p className="--location-icon"><i className="fa-solid fa-location-dot"></i></p>
                    <p className="--card-country">{props.item.location}</p>
                    <a className="google-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="--card-title">{props.item.title}</h1>
                <p className="--card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="--card-description">{props.item.description}</p>
            </div>
        </div>
    )
}