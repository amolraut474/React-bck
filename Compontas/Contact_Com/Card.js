import React from 'react'
import './Card.css';
const cardsData = [
    {
        icon: <i class="bi bi-telephone-outbound-fill"></i>,
        title: 'Our Phone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        descriptionlast: '+1234567890',
    },
    {
        icon: <i class="bi bi-envelope-at-fill"></i>,
        title: 'Our E-mail',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        descriptionlast: 'Example@gmail.com',
    },
    {
        icon: <i class="bi bi-pin-map-fill"></i>,
        title: 'Our Location',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        descriptionlast: 'Lorem ipsum dolor sit amet, consectetur',
    },
  

];
const CardSection = ({ cards }) => {
    return (
        <div class="card-container">
            <div class="card-row">

                {cards.map((card, index) => (
                    <div key={index} className="Custom_Card">
                        <span class="card-item_num">01.</span>
                        <div><h2 class="card-icon-c">{card.icon}</h2></div>
                        <div className='card-title-box'><h2 class="card-title">{card.title}</h2>
                            <p className='card-desciption'>{card.description}</p><p className='last-des'>{card.descriptionlast}</p></div>

                    </div>
                ))}
            </div>
        </div>


    );
};
function Card() {
  return (
    <div class="card-section">
         
            <CardSection cards={cardsData} />
        </div>
  )
}

export default Card;
