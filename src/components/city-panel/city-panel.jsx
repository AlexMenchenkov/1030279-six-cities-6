import React from 'react';
import {cities} from '/src/consts';
import CityBrick from '/src/components/city-brick/city-brick';
import {props} from './city-brick-prop';

const CityPanel = ({cityChecked}) => {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, id) => {
          const checked = cityChecked === city;
          return (
            <CityBrick
              key={id}
              city={city}
              checked={checked}
            />
          );
        })}
      </ul>
    </section>
  );
};

CityPanel.propTypes = props;

export default React.memo(CityPanel);


