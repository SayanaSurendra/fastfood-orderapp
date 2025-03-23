import React from 'react';

const FoodItem = ({item}) => {
    return (
        <div className='card' style={{width: "25rem"}}>
            <img src={item.image} alt=" burger image" />
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">SEK {item.price}</p>
            <a href="#" class="btn btn-primary">Add To Order</a>
            </div>
        </div>
    );
};

export default FoodItem;