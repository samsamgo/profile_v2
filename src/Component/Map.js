import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  const [address] = useState({});
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(36.7722496, 126.451712);
  const [lat] = useState(36.7722496);
  const [lng] = useState(126.451712);
  const mapOptions = {
    center: position,
    level: 8,
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const positions = [
      {
        position: new kakao.maps.LatLng(33.450701, 126.570667),
        title: "제주특별자치도 제주시 첨단로 242",
      },
      {
        position: new kakao.maps.LatLng(lat, lng),
        title: address.address,
      },
    ];

    // 내위치 커스텀 오버레이 생성
    // const customOverlayContent = `
    //   <div class="customoverlay">
    //     <span style="border 2px soled black">내위치</span>
    //   </div>`;
    // const customOverlay = new kakao.maps.CustomOverlay({
    //   map,
    //   position,
    //   content: customOverlayContent,
    // });

    // 다른 위치 마커와 인포윈도우 생성
    // positions.slice(1).forEach((item) => {
    //   const marker = new kakao.maps.Marker({
    //     map,
    //     position: item.position,
    //     title: item.title,
    //     image: new kakao.maps.MarkerImage(
    //       "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
    //       new kakao.maps.Size(24, 35)
    //     ),
    //   });
    //   const infoWindow = new kakao.maps.InfoWindow({
    //     content: `<div style="width:200px; text-align :center; color: black; font-size: 14px;">${item.title}</div>`,
    //   });
    //   kakao.maps.event.addListener(marker, "click", function () {
    //     infoWindow.open(map, marker);
    //   });
    // });
  }, [mapOptions]);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "100%", color: "black" }}
    ></div>
  );
};

export default Map;
