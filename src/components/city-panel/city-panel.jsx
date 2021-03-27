import React from 'react';
import {cities} from '/src/consts';
import CityBrick from '/src/components/city-brick/city-brick';

const CityPanel = () => {
  console.log('RENDER PANEL_CITY');
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, id) => {
          return (
            <CityBrick
              key={id}
              city={city}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default CityPanel;


