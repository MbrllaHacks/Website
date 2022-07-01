import a from "./../../Assets/a.svg";
import disc from "./../../Assets/disc.svg";
import twitter from "./../../Assets/twitter.svg";
import insta from "./../../Assets/instagram.svg";
import pc2 from "./../../Assets/pc2.svg";
import prin from "./../../Assets/prin.svg";
import "./contact.css";

function Contact() {
  return (
    <section id="contact">
      <div class="section__text">
        <h3 class="section__header">Still have questions?</h3>
        <h5 class="section__subheader">
          Contact us at{" "}
          <a href="mailto:contact@mbrllahacks.ca">contact@mbrllahacks.ca</a>
        </h5>
        <div class="sign-up-container">
          <img class="contact-prin" alt="prin" src={prin}></img>
          <div class="sign-up-box">
            <h5>Sign up for updates!</h5>
            <a href="#send">
              <button class="button__send">Send</button>
            </a>
          </div>
        </div>

        <div class="links">
          <a href="#@" className="nel">
            <img src={a}></img>
          </a>
          <a href="#Discord">
            <img src={disc}></img>
          </a>{" "}
          <a href="#Twitter">
            <img src={twitter} alt="Twitter"></img>
          </a>{" "}
          <a href="#Instagram">
            <img src={insta} alt="Twitter"></img>
          </a>
        </div>
      </div>
      <img class="contact-img" src={pc2} alt="Pc2"></img>
    </section>
  );
}

export default Contact;
