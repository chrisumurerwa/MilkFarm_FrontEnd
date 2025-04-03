import React from 'react';
import '../Styles/SingleProduct.css';
import Image from '../assets/P1.png';
function SingleProduct() {
  return (
    <div className="product-container">
      <div className="product-content">
        <img src={Image}alt="Milk and Cheese" className="product-image" />
        <div className="product-details">
          <h2 className="product-title">OUR DAIRY PRODUCTS</h2>
          <p className="product-description">
            We provide our customers with a wide variety of high-quality dairy products, including fresh milk, creamy butter, and delicious cheese. 
            Our products are sourced directly from our farm to ensure freshness and natural taste.
          </p>
          <h3 className="product-subtitle">Our Featured Products:</h3>
          <ul className="product-list">
            <li><strong>Fresh Milk:</strong> Pure, farm-fresh milk rich in nutrients.</li>
            <li><strong>Cheese:</strong> A variety of cheese options including cheddar, mozzarella, and gouda.</li>
            <li><strong>Butter:</strong> Creamy, rich butter perfect for cooking and baking.</li>
            <li><strong>Yogurt:</strong> Natural and flavored yogurt packed with probiotics.</li>
          </ul>
          <p className="product-note">
            Experience the purest taste from farm to table. All our dairy products are made with love and care, ensuring top-notch quality and freshness.
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;