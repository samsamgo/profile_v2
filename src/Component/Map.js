import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      // 이미 로드된 경우
      loadMap();
    } else {
      // 아직 로드 안 됨 - onload 콜백 등록
      const checkKakao = setInterval(() => {
        if (window.kakao && window.kakao.maps) {
          clearInterval(checkKakao);
          loadMap();
        }
      }, 100);
    }

    function loadMap() {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        if (!mapContainer) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 4,
        };
        new window.kakao.maps.Map(mapContainer, options);
        setMapLoaded(true);
      });
    }
  }, []);

  return (
    <Container id="map">
      {!mapLoaded && <p style={{ color: "white" }}>지도를 불러오는 중...</p>}
    </Container>
  );
};

export default Map;
