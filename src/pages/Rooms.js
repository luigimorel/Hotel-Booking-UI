import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
