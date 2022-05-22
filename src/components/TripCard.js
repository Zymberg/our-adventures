import React from "react";
import { Route } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function TripCard({ displayedTrip }) {


    return (

        <div className="tripCardDisplay">
             <div className="icon-home">
                <Link to="/">
                    <AiTwotoneHome />
                </Link>
                </div>
            <Route path={`/tripCard/${displayedTrip.name}`}>
                <div className="container">
                    <h1 className="h1Card">{displayedTrip.location}</h1>
                    <img className="cardIMG" src={displayedTrip.image} alt="error" />
                    <div>
                        <p className="tripP">{displayedTrip.name} </p>
                        <p className="description" >" {displayedTrip.description} "</p>
                    </div>
                </div>
            </Route>
        </div>

    )
}

export default TripCard;