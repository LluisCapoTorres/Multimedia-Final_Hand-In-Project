import React, { useState } from 'react';
import './App.css';
import MultimediaSection from './components/MultimediaSection';
import ActivityCart from './components/ActivityCart';
import { activities } from './data/activities';

function App() {
  // State to manage the user's selected activities
  const [cart, setCart] = useState([]);

  // Adds a selected activity to the cart
  const addToCart = (activity) => {
    setCart([...cart, activity]);
  };

  // Removes an activity from the cart by index
  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      {/* Main header section */}
      <header className="hero-header">
        <h1>Visit Ciutadella de Menorca</h1>
        <p>The Jewel of the Mediterranean</p>
      </header>

      <main>
        {/* Section containing video, image, and audio content */}
        <MultimediaSection />

        <hr />

        {/* Interactive activities section */}
        <section className="activities-section">
          <h2>Plan Your Adventure</h2>
          <div className="activity-layout">

            {/* List of available activities */}
            <div className="activity-list">
              {activities.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                  <p className="price">€{activity.price}</p>

                  {/* Button to add an activity to the cart */}
                  <button
                    onClick={() => addToCart(activity)}
                    className="add-btn"
                  >
                    Add to Itinerary
                  </button>
                </div>
              ))}
            </div>

            {/* Cart component displaying selected activities */}
            <div className="cart-wrapper">
              <ActivityCart
                cart={cart}
                removeActivity={removeFromCart}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Page footer */}
      <footer>
        <p>
          &copy; Ciutadella de Menorca Tourism Board.
          Built with React by Lluís Cristòfol Capó Torres.
        </p>
      </footer>
    </div>
  );
}

export default App;
