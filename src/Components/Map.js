import React from 'react';
// import styled from 'styled-components';
// import MapImg from '../Asstes/map.png';
import map2 from '../Asstes/map3.PNG'
// import PText from './PText';

import { Link } from 'react-router-dom';
const MapStyles = styled.div`
  background: url(${map2}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          {/* <h3 className="map__card__heading">Here is me</h3> */}
          {/* <PText>5 Remington Avenue Selden, NY 11784 </PText> */}
          <Link
            className="map__card__link"
            to="https://www.google.com/maps/place/5+Remington+Ave,+Selden,+NY+11784,+USA/@40.8798593,-73.0469824,17z/data=!3m1!4b1!4m5!3m4!1s0x89e84726c0df8dbd:0x364ae5e90e0c622d!8m2!3d40.8798553!4d-73.0447937"
            // target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </Link>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
