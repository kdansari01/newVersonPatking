import React from "react";
import "./card.css";
const Card = ({ title }) => {
  return (
    <div>
      <div class="cards-list">
        <div class="card 3">
          <div class="card_image">
            <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
          </div>
          <div class="card_title">
            <p>BOOK NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
