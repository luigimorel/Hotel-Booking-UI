import React from "react";
import ContactForm from "./ContactForm";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBusinessTime,
  FaMailBulk
} from "react-icons/fa";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="section">
        <ContactForm />
        <div>
          <h1 className="contact-header">Contact Us</h1>

          <div className="contact">
            <table>
              <tbody>
                <tr>
                  <td>
                    <FaWhatsapp />
                  </td>
                  <td>WhatsApp</td>
                  <td>+256 704 123 946</td>
                </tr>
                <tr>
                  <td>
                    <FaMailBulk />
                  </td>
                  <td>Email</td>
                  <td>info@silver-resort.com</td>
                </tr>
                <tr>
                  <td>
                    <FaBusinessTime />
                  </td>
                  <td>Opening Hours</td>
                  <td>0800 - 15300 hours</td>
                </tr>
                <tr>
                  <td>
                    <FaMapMarkerAlt />
                  </td>
                  <td>Location</td>
                  <td>Bugolobi, Kampala</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
