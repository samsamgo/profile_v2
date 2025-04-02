import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

const Map = () => {
  useEffect(() => {
    // 이미 스크립트가 있는지 확인 (중복 로딩 방지)
    if (!document.getElementById("kakao-map-script")) {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e465cf9651ae8fc1554493a6ae90583&autoload=false";
      script.async = true;

      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978),
            level: 3,
          };
          new window.kakao.maps.Map(container, options);
        });
      };

      document.head.appendChild(script);
    }
  }, []);

  return <Container id="map">지도를 불러오는 중...</Container>;
};

export default Map;
