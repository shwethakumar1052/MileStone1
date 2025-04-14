// src/pages/MenuPage.js
import React from 'react';

const MenuPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">

        {/* Item 1 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://im.indiatimes.in/facebook/2018/Nov/gadbad_1543406878.jpg" className="card-img-top" alt="Gadbad Ice Cream" />
            <div className="card-body">
              <h5 className="card-title">Gadbad Ice Cream</h5>
              <p className="card-text">Layers of fruits, jelly, and creamy ice cream 🍨</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://hips.hearstapps.com/hmg-prod/images/dsc03299-sc-1623764031.jpeg?crop=0.8893333333333333xw:1xh;center,top&resize=1200:*" className="card-img-top" alt="Sundae Special" />
            <div className="card-body">
              <h5 className="card-title">Sundae Special</h5>
              <p className="card-text">Rich chocolate sundae with whipped cream and cherry 🍒</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://vaya.in/recipes/wp-content/uploads/2018/11/Royal-falooda.jpg" className="card-img-top" alt="Royal Falooda" />
            <div className="card-body">
              <h5 className="card-title">Royal Falooda</h5>
              <p className="card-text">A rich, royal treat with basil seeds, vermicelli, and ice cream 🌸</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* You can keep adding more items just like above */}

      </div>
    </div>
  );
};

export default MenuPage;
