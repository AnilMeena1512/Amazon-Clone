import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-PC/3_nonprimeheader.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="1234512"
            title="Ikigai: The Japanese secret to a long and happy life"
            price={3.5}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL320_SR228,320_.jpg"
            alt=""
          />

          <Product
            id="1234511"
            title="The Psychology of Money"
            price={2.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"
            alt=""
          />
        </div>

        <div className="home_row">
          <Product
            id="1234510"
            title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)"
            price={335}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41I4ZIBgc3S._AC_SX184_.jpg"
            alt=""
          />
          <Product
            id="1234569"
            title="Mi Notebook Horizon"
            price={750}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
            alt=""
          />
          <Product
            id="1234568"
            title="Max Women's Regular T-Shirt"
            price={6.8}
            rating={3}
            image="https://m.media-amazon.com/images/I/51cVz0oHK1S.jpg"
            alt=""
          />
        </div>

        <div className="home_row">
          {/* Product */}
          <Product
            id="1234567"
            title="Start With Why: How Great Leaders Inspire Everyone To Take Action "
            price={5}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/51XeVKQCuNL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
