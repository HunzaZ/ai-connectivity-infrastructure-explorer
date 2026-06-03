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
      style:
        "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [0, 20],
      zoom: 1.5,
    });

    const locations = [
      {
        name: "AWS us-west-1",
        coords: [-122.4194, 37.7749],
      },
      {
        name: "AWS us-east-1",
        coords: [-77.4874, 39.0438],
      },
      {
        name: "Azure London",
        coords: [-0.1276, 51.5074],
      },
      {
        name: "Google Tokyo",
        coords: [139.6917, 35.6895],
      },
      {
        name: "Meta Singapore",
        coords: [103.8198, 1.3521],
      },
      {
        name: "Azure Sydney",
        coords: [151.2093, -33.8688],
      },
      {
        name: "AWS Frankfurt",
        coords: [8.6821, 50.1109],
      },
    ];

    map.on("load", () => {
      const routes = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-122.4194, 37.7749],
                [-77.4874, 39.0438],
              ],
            },
            properties: {},
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-77.4874, 39.0438],
                [-0.1276, 51.5074],
              ],
            },
            properties: {},
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-0.1276, 51.5074],
                [139.6917, 35.6895],
              ],
            },
            properties: {},
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [139.6917, 35.6895],
                [103.8198, 1.3521],
              ],
            },
            properties: {},
          },
        ],
      };

      map.addSource("fiber-routes", {
        type: "geojson",
        data: routes as any,
      });

      map.addLayer({
        id: "fiber-routes",
        type: "line",
        source: "fiber-routes",
        paint: {
          "line-color": "#8b5cf6",
          "line-width": 3,
          "line-opacity": 0.9,
        },
      });

      locations.forEach((location) => {
        new maplibregl.Marker({
          color: "#22c55e",
        })
          .setLngLat(location.coords as [number, number])
          .setPopup(
            new maplibregl.Popup().setHTML(
              `<strong>${location.name}</strong>`
            )
          )
          .addTo(map);
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-[600px] w-full overflow-hidden rounded-lg"
    />
  );
}