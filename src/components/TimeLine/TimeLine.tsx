import React from 'react';
import { Chrono } from 'react-chrono';
import './TimeLine.css';
import { items } from './data';

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <Chrono
        slideShow={true}
        fliplayout={false}
        enableLayoutSwitch={false}
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: 'blue',
          secondary: 'grey',
          cardBgColor: 'white',
          cardForeColor: 'black',
        }}
      />
    </div>
  );
};

export default TimeLine;
