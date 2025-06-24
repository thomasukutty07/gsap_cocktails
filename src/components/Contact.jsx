import React from "react";
import { openingHours, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center ",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>Visit our store 456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time, index) => (
            <p key={time.day}>
              {time.day}:{time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreffer "
                  aria-label={link.name}
                >
                  <img src={link.icon} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
