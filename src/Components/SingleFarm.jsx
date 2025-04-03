import React from "react";
import "../Styles/SingleFarm.css";
import Image from "../assets/cheese.jpeg";
import Image1 from "../assets/milk.jpeg";

function SingleFarm() {
  return (
    <div className="single-farm-container">
      <div className="farm-cards">
        <h2 className="farm-title">WHY MILK-FARM?</h2>
        <p className="farm-description">
          We believe it's the best way to inspire our community to try useful & natural products,
          which we hope they like.
        </p>
        <h3 className="product-title">Our Key Products</h3>
        
        <div className="product-sections">
          <div className="product-row">
            <img src={Image1} alt="Fresh Dairy Milk" className="farm-image left" />
            <div className="product-content">
              <h4>Fresh Dairy Milk</h4>
              <p>Our farm produces fresh, organic milk that is rich in nutrients, ensuring a healthy diet for our consumers.</p>
            </div>
          </div>
          
          <div className="product-row reverse">
            <div className="product-content">
              <h4>Organic Cheese</h4>
              <p>Our cheese is crafted using traditional methods, providing a delicious and natural taste with high protein content.</p>
            </div>
            <img src={Image} alt="Organic Cheese" className="farm-image right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFarm;
