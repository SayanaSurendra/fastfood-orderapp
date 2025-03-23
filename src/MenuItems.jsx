import React from 'react';
import FoodItem from './FoodItem';

const MenuItems = ({ menu }) => {


  return (
    <div  >
      <h3 className='text-center mt-5 pt-2'>Fast Food Menu</h3>
      <div className='container'>
        <div className='row my-5 align-items-center justify-content-center'>

          {menu.map((item) => (
            <div className="col-md-4 mb-3">
              <FoodItem key={item.id} item={item} /></div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default MenuItems;