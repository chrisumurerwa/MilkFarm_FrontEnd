import React, { useState } from 'react';
import "../Styles/Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Search options specific to a milk farm project
  const searchOptions = [
    // Product-related searches
    'Milk Types',
    'Dairy Products',
    'Organic Milk',
    'Fresh Milk',
    'Pasteurized Milk',
    
    // Farm-related searches
    'Farm Locations',
    'Milk Collection Centers',
    'Dairy Farms',
    
    // Production searches
    'Production Process',
    'Milk Quality',
    'Dairy Certifications',
    
    // Customer-related searches
    'Delivery Services',
    'Subscription Plans',
    'Customer Support',
    
    // Technical searches
    'Milk Testing',
    'Nutritional Information',
    'Packaging Details'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search milk farm products, services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          list="search-suggestions"
        />
        <datalist id="search-suggestions">
          {searchOptions.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;