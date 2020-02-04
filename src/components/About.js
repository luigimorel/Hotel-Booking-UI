import React, { Component } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Hero from "./Hero";

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
          </Banner>
        </Hero>
      </section>
    );
  }
}
