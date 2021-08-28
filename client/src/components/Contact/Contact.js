import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageUser, setMessageUser] = useState("");

  const contact = () => {
    axios
      .post("http://localhost:5000/ContactUs", {
        fullName: fullName,
        email: email,
        message: message,
      })
      .then((response) => {
        setMessageUser("message send successfully");
      })
      .catch((err) => {
        setMessageUser("message not send");
        throw err;
      });
  };

  return (
    <>
      <div className="contact">
        <h1 style={{ color: "black" }}> About Us</h1>
        <ion-icon name="mail-outline">
          <span style={{ color: "black", fontSize: "1.25rem" }}>Email:</span>{" "}
          booksworms@yahoo.com
        </ion-icon>
        <br></br>
        <ion-icon name="call-outline">
          <span style={{ color: "black", fontSize: "1.25rem" }}>Tel:</span>{" "}
          00962-798-777-222
        </ion-icon>
        <br></br>
        <ion-icon name="location-outline">
          <span style={{ color: "black", fontSize: "1.25rem" }}>Location:</span>{" "}
          Jordan-Amman-abdullah ghosha street-abdullah bilding
        </ion-icon>
      </div>
      <div className="contact">
        <table className="table-contact">
          <tbody>
            <tr>
              <td>
                <label>Full Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="full Name here "
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email :</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="email here "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Message: </label>
              </td>
              <td>
                <textarea
                  rows="5"
                  placeholder="message here "
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="button" onClick={contact}>
                  send
                </button>
              </td>
            </tr>
            <tr>
              <th>{messageUser}</th>
            </tr>
          </tbody>
        </table>
        <FloatingWhatsApp/>
      </div>
    </>
  );
}
