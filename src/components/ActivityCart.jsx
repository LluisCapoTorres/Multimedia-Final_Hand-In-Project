import React from 'react';

// Component that displays the selected activities and total price
const ActivityCart = ({ cart, removeActivity }) => {
  // Calculate the total price of all activities in the cart
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      {/* Cart title */}
      <h3 className="cart-title">Your Trip Itinerary</h3>

      {/* Show message if the cart is empty */}
      {cart.length === 0 ? (
        <p className="empty-msg">No activities selected yet.</p>
      ) : (
        // List of selected activities
        <div className="cart-items-wrapper">
          {cart.map((item, index) => (
            <div key={index} className="cart-item-row">
              {/* Activity information */}
              <div className="item-info">
                <span className="item-name">{item.title}</span>
                <span className="item-price">€{item.price}</span>
              </div>

              {/* Button to remove an activity from the cart */}
              <button
                onClick={() => removeActivity(index)}
                className="remove-btn-modern"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart footer showing the total amount */}
      <div className="cart-footer">
        <span>Total Amount:</span>
        <span className="total-price">€{total}</span>
      </div>
    </div>
  );
};

export default ActivityCart;
