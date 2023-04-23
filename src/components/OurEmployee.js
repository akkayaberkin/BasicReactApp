import OurEmployeeItem from '../components/OurEmployeeItem';
import React from 'react';
import { Data } from '../helpers/Data';
import '../styles/OurEmployee.css';

export const OurEmployee = () => {
  return (
    <div className="ourEmployee">
      <h1 className="ourEmployeeTitle">Çalışanlarımız</h1>
      <div className="ourEmployeeList">
        {Data.map((ourEmployeeItem, key) => {
          return (
            <OurEmployeeItem
              key={key}
              image={ourEmployeeItem.image}
              name={ourEmployeeItem.name}
              content={ourEmployeeItem.content}
              price={ourEmployeeItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
