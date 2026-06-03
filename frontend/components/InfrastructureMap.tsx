"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function InfrastructureMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [20, 20],
      zoom: 1.5,
    });

    const locations = [
      {
        name: "AWS us-west-1",
        coords: [-122.4194, 37.7749] as [number, number],
      },
      {
        name: "AWS us-east-1",
        coords: [-77.4874, 39.0438] as [number, number],
      },
      {
        name: "Azure London",
        coords: [-0.1276, 51.5074] as [number, number],
      },
      {
        name: "Google Tokyo",
        coords: [139.6917, 35.6895] as [number, number],
      },
      {
        name: "Meta Singapore",
        coords: [103.8198, 1.3521] as [number, number],
      },
      {
        name: "Azure Sydney",
        coords: [151.2093, -33.8688] as [number, number],
      },
      {
        name: "AWS Frankfurt",
        coords: [8.6821, 50.1109] as [number, number],
      },
    ];

    map.on("load", () => {
      locations.forEach((location) => {
        new maplibregl.Marker({
          color: "#22c55e",
        })
          .setLngLat(location.coords)
          .setPopup(
            new maplibregl.Popup().setHTML(
              `<strong>${location.name}</strong>`
            )
          )
          .addTo(map);
      });
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-[600px] w-full rounded-lg"
    />
  );
}