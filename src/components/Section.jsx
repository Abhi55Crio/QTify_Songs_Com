import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import Card from '../components/Card';
import Carousel from './Carousel';

const Section = ({ title, data }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className='section'>
      <div className="header">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>

      {data?.length ? (
        <div className="wrapper">
          {carouselToggle ? (
            <>
              <Carousel data={data} componentRender={(ele) => <Card data={ele} type="albums" />} />
            </>
          ) : (
            <>
              {data.map((item) => (
                <Card key={item.id} data={item} type="albums" />
              ))}
            </>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Section;