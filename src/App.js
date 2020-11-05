import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "./components/Header/MainHeader";
import Content from "./components/Content/Content";
import "./App.css";
import styled from "styled-components";

export default function App() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    let key = '';
    const fetchApod = () => {
      axios
        .get('http://localhost:3000/config.json')
        .then((res) => {
          key = res.data.nasakey;
          axios.get('https://api.nasa.gov/planetary/apod?' + key)
            .then((res) => {
              setApod(res.data);
            })
            .catch((err) => {
              console.log('Something went wrong. Here is a placeholder, enjoy!');
              let placeHolderData = {};
              placeHolderData.title = 'Fifty Gravitational Wave Events Illustrated';
              placeHolderData.date = '2020-11-04';
              placeHolderData.explanation = 'Over fifty gravitational wave events have now been detected. These events mark the distant, violent collisions of two black holes, a black hole and a neutron star, or two neutron stars. Most of the 50 events were detected in 2019 by the LIGO gravitational wave detectors in the USA and the VIRGO detector in Europe. In the featured illustration summarizing the masses of the first 50 events, blue dots indicate higher-mass black holes while orange dots denote lower-mass neutron stars. Astrophysicists are currently uncertain, though, about the nature of events marked in white involving masses that appear to be in the middle -- between two and five solar masses. The night sky in optical light is dominated by nearby and bright planets and stars that have been known since the dawn of humanity. In contrast, the sky in gravitational waves is dominated by distant and dark black holes that have only been known about for less than five years. This contrast is enlightening -- understanding the gravitational wave sky is already reshaping humanity\'s knowledge not only of star birth and death across the universe, but properties of the universe itself.';
              placeHolderData.hdurl = 'placeHolderImage.jpg';
              setApod(placeHolderData);
            }
            ).catch((err) => {
              console.log('Error loading config there needs to be a file called config.json with a key call nasakey');
            }

            )
        })

    };
    fetchApod();
  }, []);

  const StyledPage = styled.div`
  background-color: ${(pr) => pr.theme.backgroundColor};
  text-align: center;
  `;

  return (
    <StyledPage>
      <MainHeader italic apod={apod} />
      <Content italic apod={apod} />
    </StyledPage>
  );

}

