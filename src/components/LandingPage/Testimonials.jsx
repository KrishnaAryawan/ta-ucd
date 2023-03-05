import React from "react";
import styled from "styled-components";
import avatar1 from "../../assets/avatar1.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <b>Person 1</b>
            <p>
              Love the atmosphere!!! we enjoyed while we're there it almost like
              our garden.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <b>Person 2</b>
            <p>The food is really good!!</p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar1} alt="" />
            </div>
            <b>Person 3</b>
            <p>The price of food is really reasonable and fair.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: #81b622;
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        b {
          color: #81b622;
          font-size: 1.5rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #81b622;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
