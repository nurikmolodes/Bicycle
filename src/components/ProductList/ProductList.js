import React, { useState } from 'react';
import Product from './common/Product';
import './Product.css';

export const products = [
  { id: 1, name: 'Dutch Cruiser', description: 'A classic bike with a retro feel.', seller: 'John Doe', location: 'Amsterdam', condition: 'Good', price: 120, image: '/images/bikes/bike-01.jpg' },
  { id: 2, name: 'City Commuter', description: 'Ideal for daily commutes.', seller: 'Jane Smith', location: 'Utrecht', condition: 'Very Good', price: 150, image: '/images/bikes/bike-02.jpg' },
  { id: 3, name: 'Retro Town', description: 'Stylish and comfortable.', seller: 'Alice Johnson', location: 'Rotterdam', condition: 'Excellent', price: 180, image: '/images/bikes/bike-03.jpg' },
  { id: 4, name: 'Dutch Roadster', description: 'A sturdy bike for all weathers.', seller: 'Mike Brown', location: 'The Hague', condition: 'Good', price: 130, image: '/images/bikes/bike-04.jpg' },
  { id: 5, name: 'Classic Dutch', description: 'A reliable old bike.', seller: 'Sarah Davis', location: 'Haarlem', condition: 'Fair', price: 100, image: '/images/bikes/bike-05.jpg' },
  { id: 6, name: 'Sporty City', description: 'Perfect for urban cycling.', seller: 'James Wilson', location: 'Leiden', condition: 'Very Good', price: 160, image: '/images/bikes/bike-06.jpg' },
  { id: 7, name: 'Eco-Friendly', description: 'A green choice for the environment.', seller: 'Emily Miller', location: 'Eindhoven', condition: 'Excellent', price: 200, image: '/images/bikes/bike-07.jpg' },
  { id: 8, name: 'Lightweight Urban', description: 'Easy to carry and store.', seller: 'David Taylor', location: 'Groningen', condition: 'Good', price: 140, image: '/images/bikes/bike-01.jpg' },
  { id: 9, name: 'Rugged Explorer', description: 'For the adventurous spirit.', seller: 'Linda Anderson', location: 'Nijmegen', condition: 'Fair', price: 110, image: '/images/bikes/bike-02.jpg' },
  { id: 10, name: 'Speedy City', description: 'Fast and furious.', seller: 'Robert Harris', location: 'Tilburg', condition: 'Very Good', price: 170, image: '/images/bikes/bike-03.jpg' },
  { id: 11, name: 'Family Tandem', description: 'Double the fun.', seller: 'Patricia Clark', location: 'Almere', condition: 'Good', price: 190, image: '/images/bikes/bike-04.jpg' },
  { id: 12, name: 'Folding Commuter', description: 'Great for mixed-mode commuting.', seller: 'Jennifer Lewis', location: 'Breda', condition: 'Good', price: 125, image: '/images/bikes/bike-05.jpg' },
  { id: 13, name: 'Electric Assist', description: 'A little extra power.', seller: 'William Young', location: 'Nieuwegein', condition: 'Excellent', price: 210, image: '/images/bikes/bike-06.jpg' },
  { id: 14, name: 'Touring Dutch', description: 'Built for long-distance comfort.', seller: 'Barbara Hall', location: 'Amersfoort', condition: 'Good', price: 180, image: '/images/bikes/bike-07.jpg' },
  { id: 15, name: 'Hip City', description: 'Stand out in the crowd.', seller: 'Richard Allen', location: 'Apeldoorn', condition: 'Very Good', price: 155, image: '/images/bikes/bike-08.jpg' },
  { id: 16, name: 'Senior’s Comfort', description: 'Easy and comfortable.', seller: 'Mary Wright', location: 'Zwolle', condition: 'Good', price: 130, image: '/images/bikes/bike-01.jpg' },
  { id: 17, name: 'Stylish Cruiser', description: 'Cruise in style.', seller: 'Joseph Scott', location: 'Enschede', condition: 'Fair', price: 105, image: '/images/bikes/bike-02.jpg' },
  { id: 18, name: 'Vintage Dutch', description: 'A classic bike with a retro feel.', seller: 'John Doe', location: 'Amsterdam', condition: 'Good', price: 120, image: '/images/bikes/bike-03.jpg' },
  { id: 19, name: 'City Commuter', description: 'Ideal for daily commutes.', seller: 'Jane Smith', location: 'Utrecht', condition: 'Very Good', price: 150, image: '/images/bikes/bike-04.jpg' },
  { id: 20, name: 'Retro Town', description: 'Stylish and comfortable.', seller: 'Alice Johnson', location: 'Rotterdam', condition: 'Excellent', price: 180, image: '/images/bikes/bike-05.jpg' },
];

function ProductList({ addToCart, searchTerm }) {
  const initialProductsToShow = 16; // Change this to 16 to display 4 products in each row
  const [visibleProducts, setVisibleProducts] = useState(initialProductsToShow);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 16); // Increase by 16 for each "Load More" click
  };

  const hideProducts = () => {
    setVisibleProducts(initialProductsToShow);
  };

  // Filter products based on the search term
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4"> {/* Use 'row-cols-md-4' to display 4 products in a row on medium and larger screens */}
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="col mb-4">
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="row">
          <div className="col-12">
            <button onClick={showMoreProducts} className="view-more-button">
              LOAD MORE...
            </button>
          </div>
        </div>
      )}
      {visibleProducts >= filteredProducts.length && (
        <div className="row">
          <div className="col-12">
            <button onClick={hideProducts} className="hide-button">
              HIDE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
