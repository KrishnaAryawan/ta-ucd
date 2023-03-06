import React from "react";
import styled from "styled-components";
import logo from "../../assets/TheYard.png";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>The Yard Ubud is restaurant located in Ubud, Gianyar, Bali.</p>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
            The Yard Ubud is a garden theme restaurant that incorporates
            elements of nature into its decor and ambiance. The overall
            atmosphere of the restaurant is typically designed to mimic a garden
            or outdoor space, with lush greenery, flowers, and natural materials
            like wood and stone.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>@warungkebunubud</p>
          <p>Jl. Hanoman no 99x, Padang Tegal, Ubud, Gianyar, Bali</p>
        </div>
      </Section>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: #3d550c;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #81b622;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #3d550c;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;
