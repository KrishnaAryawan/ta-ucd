import React from "react";
import styled from "styled-components";
import background from "../assets/ingredients.jpg";
import Services1 from "../assets/Services1.svg";
import Services2 from "../assets/Services2.svg";
import Services3 from "../assets/Services3.svg";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <>
      <Section id="services">
        <div className="title">
          <h1 className="green">What we do?</h1>
          <p>
            A restaurant that has great tools, chef, and great taste would be a
            culinary haven for food lovers.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <img src={Services2} alt="" />
            <p>
              Such a restaurant would have great kitchen equipment and tools,
              including high-quality knives, cookware, and appliances. The
              kitchen are well-organized and efficient, allowing the chef and
              their team to work seamlessly and produce amazing dishes.
            </p>
          </div>
          <div className="service green">
            <img src={Services1} alt="" />
            <p>
              The chef and team are highly skilled and experienced, with a deep
              knowledge of different cuisines and cooking techniques. They would
              have a passion for using fresh, locally sourced ingredients to
              create flavorful and creative dishes.
            </p>
          </div>
          <div className="service">
            <img src={Services3} alt="" />
            <p>
              The food is outstanding, with a perfect balance of flavors,
              textures, and presentation. Each dish are expertly crafted and
              plated, highlighting the ingredients and the chef's skill.
            </p>
          </div>
        </div>
      </Section>
      <Section2 id="ingredients">
        <div className="background">
          <img src={background} alt="" />
        </div>
        <div className="content">
          <h1>We Use Fresh Ingredients For Our Food!</h1>
          <h2>
            We Buy the Ingredients from Local Market in Ubud on Daily Basis
          </h2>
        </div>
      </Section2>
    </>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #81b622;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #3d550c;
        }
      }
    }
    .green {
      button {
        background-color: #3d550c;
        &:hover {
          background-color: #81b622;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;

const Section2 = styled.div`
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    h1 {
      position: absolute;
      top: 35%;
      left: 12%;
      font-size: 4rem;
      width: 100%;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 30%;
      width: 100%;
    }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 100%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 100%;
      }
    }
  }
`;
