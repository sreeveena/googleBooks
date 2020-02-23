import React from "react";

function CardList({ children }) {
  return (
   
    <div className = 'container'>
      <div  className="row">
        <div className = "col-12">
          {children}
        </div>
      </div>
    </div>
  );
}
export default CardList;
