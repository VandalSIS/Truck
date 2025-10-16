import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <img
        className="screenshot-capture"
        alt="Screenshot capture"
        src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/screenshot-capture---2025-08-13---21-05-05-1.png"
      />

      <img
        className="rectangle"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/rectangle-44.png"
      />

      <img
        className="vector"
        alt="Vector"
        src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/vector-10.svg"
      />

      <img
        className="img"
        alt="Vector"
        src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/vector-13.svg"
      />

      <div className="text-wrapper">World Of IPIEXPRESS Transport</div>

      <div className="frame">
        <p className="div">Lorem ipsum eget a auctor velit.</p>

        <div className="text-wrapper-2">About Us</div>

        <div className="text-wrapper-3">Contact Us</div>

        <div className="text-wrapper-4">Our Services</div>

        <div className="text-wrapper-5">FAQ Page</div>

        <div className="text-wrapper-6">Open Positions</div>

        <div className="text-wrapper-7">Get in Touch</div>

        <div className="text-wrapper-8">FAQ Page</div>

        <div className="text-wrapper-9">Suport 24/7</div>

        <div className="text-wrapper-10">Careers</div>

        <div className="text-wrapper-11">Global Network</div>

        <img
          className="line"
          alt="Line"
          src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/line-38.svg"
        />

        <img
          className="line-2"
          alt="Line"
          src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/line-38.svg"
        />

        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/vector-10-1.svg"
        />

        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/vector-10-1.svg"
        />

        <div className="text-wrapper-12">Our Devision</div>

        <div className="text-wrapper-13">Contact Info</div>

        <div className="text-wrapper-14">IPIEXPRESS</div>

        <div className="text-wrapper-15">2025. All Rights Reserved.</div>

        <img
          className="mask-group"
          alt="Mask group"
          src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/mask-group@2x.png"
        />
      </div>

      <div className="frame-2">
        <div className="div-wrapper">
          <div className="text-wrapper-16">Get a quote</div>
        </div>

        <div className="search">
          <img
            className="vector-4"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/vector.svg"
          />
        </div>

        <Link to="/home-3">
          <img
            className="image-removebg"
            alt="Image removebg"
            src="https://cdn.animaapp.com/projects/68c367638464b4d7f868904d/releases/68f13c8c7a40b4019cb45c3a/img/image-removebg-preview--2--1@2x.png"
          />
        </Link>

        <div className="navbar">
          <Link to="/home-3" style={{ textDecoration: 'none' }}>
            <div className="text-wrapper-16">Home</div>
          </Link>

          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <div className="text-wrapper-16">About us</div>
          </Link>

          <Link to="/services" style={{ textDecoration: 'none' }}>
            <div className="text-wrapper-16">Services</div>
          </Link>

          <Link to="/contact-us" style={{ textDecoration: 'none' }}>
            <div className="text-wrapper-16">Contacts</div>
          </Link>
        </div>

        <div className="MC-DOT">
          MC 1199353 <br />
          DOT 3565814
        </div>
      </div>

      <div className="rectangle-2" />

      <div className="text-wrapper-17">Contact Us</div>

      <div className="text-wrapper-18">+767 575 765 60</div>

      <p className="p">
        Lorem ipsum eget a auctor velit et venenatis ante amet neque etiam arcu
        mi amet eu diam duis purus dictum.
      </p>

      <div className="frame-3">
        <div className="text-wrapper-19">Write message</div>
      </div>

      <div className="frame-4">
        <div className="text-wrapper-19">Email</div>
      </div>

      <div className="frame-5">
        <div className="text-wrapper-19">First and Last name</div>
      </div>

      <div className="text-wrapper-20">Support Center</div>

      <div className="text-wrapper-21">info@ipiexpress.com</div>

      <p className="text-wrapper-22">USA, New York - 1080</p>

      <div className="text-wrapper-23">+767 575 765 60</div>

      <div className="text-wrapper-24">Str. First Avenue, 1</div>

      <div className="text-wrapper-25">Write to us</div>

      <div className="text-wrapper-26">Our Location</div>

      <div className="frame-6">
        <div className="text-wrapper-27">Send</div>
      </div>
    </div>
  );
};
