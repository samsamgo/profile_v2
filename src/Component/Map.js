import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = () => {
  useEffect(() => {
    const { kakao } = window;
    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 8,
      };
      const map = new kakao.maps.Map(mapContainer, options);
    });
  }, []);

  return <Container id="map" />;
};

export default Map;
