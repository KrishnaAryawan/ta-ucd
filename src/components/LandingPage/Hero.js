import React from "react";
import styled from "styled-components";
import hero from "../../assets/hero.jpg";
export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
        <div className="info">
          <h2>Opening Promotion</h2>
          <em>
            Looking for a great dining experience at a fraction of the cost?
            Look no further than our restaurant! For a limited time only, enjoy
            promo price at The Yard Ubud.
          </em>
          <a href="/ordernow">
            <button>ORDER NOW</button>
          </a>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 12vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 8%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: white;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 40%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #81b622;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #3d550c;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
