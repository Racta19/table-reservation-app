import React from 'react'

import heroFood from "../assets/restauranfood.jpg"
import cardPic1 from "../assets/greek salad.jpg"
import cardPic2 from "../assets/bruchetta.svg"
import cardPic3 from "../assets/lemon dessert.jpg"

import Card from "../components/card"
import './Home.css'

const cardData = [
    {
        index: 1,
        img: cardPic1,
        name: "Greek salad",
        price: "$ 12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        index: 2,
        img: cardPic2,
        name: "Bruchetta",
        price: "$ 5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
    },
    {
        index: 3,
        img: cardPic3,
        name: "Lemon Dessert",
        price: "$ 5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

const Home = () => {
  return (
      <div className="App">
          <section className="hero">
              <div className="heroColumn1">
                  <h2>Little Lemon </h2>
                  <h4>Chicago</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="button-primary" type="submit">Reserve a Table</button>
              </div>
              <div className="heroColumn2">
                  <img src={heroFood} alt='heroPic' />
              </div>
          </section>
          <section className="highlight">
              <div className="highlightHeading">
                  <h3>Specials</h3>
                  <button className="button-primary" type="submit">Online Menu</button>
              </div>
              <div className="cardBox">
                  {
                      cardData.map((data) => {
                          return (
                              <Card key={data.index} img={data.img} name={data.name} price={data.price} description={data.description} />
                          )
                      })
                  }
              </div>
          </section>       
      </div>
  )
}

export default Home