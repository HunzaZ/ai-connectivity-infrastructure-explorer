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
        name: "San Francisco Data Center",
        coords: [-122.4194, 37.7749] as [number, number],
      },
      {
        name: "New York Data Center",
        coords: [-74.006, 40.7128] as [number, number],
      },
      {
        name: "London Cloud Region",
        coords: [-0.1276, 51.5074] as [number, number],
      },
      {
        name: "Tokyo Cloud Region",
        coords: [139.6917, 35.6895] as [number, number],
      },
      {
        name: "Singapore Cloud Region",
        coords: [103.8198, 1.3521] as [number, number],
      },
    ];

    map.on("load", () => {
      const fiberRoutes = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-122.4194, 37.7749],
                [-74.006, 40.7128],
              ],
            },
            properties: {},
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-74.006, 40.7128],
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
        data: fiberRoutes as any,
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
        const marker = new maplibregl.Marker({
          color: "#22c55e",
        })
          .setLngLat(location.coords)
          .setPopup(
            new maplibregl.Popup().setHTML(`
              <div style="padding:4px">
                <strong>${location.name}</strong>
              </div>
            `)
          );

        marker.addTo(map);
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-[600px] w-full rounded-lg overflow-hidden"
    />
  );
}