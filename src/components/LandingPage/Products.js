import React from "react";
import styled from "styled-components";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "Rp.50.000/pcs",
      desc: "Chicken burger with chicken patty seasoned with spices and herbs to enhance its flavor.",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "Rp.30.000/pcs",
      desc: "Toasted Bread with banana and blackberries as toppings",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "Rp.35.000/pcs",
      desc: "Egg Sandwich decorate with boiled egg in top of it",
    },

    {
      image: product4,
      name: "Raspberry Cake",
      price: "Rp.30.000/pcs",
      desc: "Raspberry Cake slathered in lemon cheese cream decorate with extra berries",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #81b622;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
