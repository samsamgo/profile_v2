import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// AMOONA의 "위치 기반 모임 장소" 컨셉을 보여주는 데모 지도.
// API 키가 필요 없는 Leaflet + OpenStreetMap을 사용해
// 어떤 배포 환경에서도 항상 동작한다.
const SPOTS = [
  { name: "한강공원 러닝 모임", lat: 37.5283, lng: 126.9327 },
  { name: "남산 등산 모임", lat: 37.5512, lng: 126.9882 },
  { name: "잠실 농구 모임", lat: 37.5133, lng: 127.1001 },
  { name: "서울숲 요가 모임", lat: 37.5444, lng: 127.0374 },
];

export default function ProjectMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [37.5405, 127.0],
        zoom: 12,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      SPOTS.forEach((spot) => {
        L.circleMarker([spot.lat, spot.lng], {
          radius: 9,
          color: "#ee609c",
          weight: 2,
          fillColor: "#b465da",
          fillOpacity: 0.75,
        })
          .addTo(map)
          .bindPopup(`<strong>${spot.name}</strong>`);
      });
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="project-map"
      aria-label="AMOONA 모임 장소 데모 지도"
    />
  );
}
