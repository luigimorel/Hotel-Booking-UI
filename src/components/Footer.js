import React, { Component } from "react";
import logo from "../images/logo.png";
export default class Footer extends Component {
  render() {
    const today = new Date();
    const thisYear = today.getFullYear();
    return (
      <footer>
        <div className="container">
          <div className="footer-cols">
            <ul>
              <li>
                <img src={logo} alt="" />
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Shows</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
            <ul>
              <li>Shop & Learn</li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Shows</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
            <ul>
              <li>Lorem Shop</li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Shows</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom footer-center">
          Copyright &copy; {thisYear}, Beach Resort Inc.
        </div>
      </footer>
    );
  }
}
