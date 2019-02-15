import React from 'react'
import { Link } from 'gatsby'
import { navigateTo } from "gatsby-link";

import Layout from '../components/layout'
import SEO from '../components/seo'

import contact from '../images/contact.svg';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
        <Layout>
        <SEO title="Contact" />
          <div className="contactForm">
            <div className="aboveForm">
                <div style={{textAlign: `center`,}}>
                    <img style={{maxWidth: `300px`, marginTop: `20px`,}} src={contact} alt="Contact me for Web Design needs" />
                </div>
                <div>
                    <h2>Contact me</h2>
                    <p style={{fontWeight: `bold`,}}>Whether you want to contact me about building you a site, collaborating, or you want to learn more about 
            web design and/or development, don't hesitate to drop me a message!</p>
                </div>
            </div>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <div className="formName">
                <label>Name
                  <input type="text" name="name" onChange={this.handleChange} placeholder="John Doe" />
                </label>
              </div>
              <div className="formEmail">
                <label>Email
                  <input type="email" name="email" onChange={this.handleChange} placeholder="name@website.com" />
                </label>
              </div>
              <div className="formMessage">
                <label>Reason for contact
                  <textarea rows="5" name="message" onChange={this.handleChange} placeholder="Web Design/Development, SEO, SSL Certification, Maintenance, Optimization, etc." />
                </label>
              </div>
              <div className="formSubmit">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </Layout>
    );
  }
}