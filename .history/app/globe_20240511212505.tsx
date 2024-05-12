// GlobeComponent.tsx
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.addLayer({
        id: "copenhagen",
        type: "marker",
        position: [12.5022, 55.6761], // Longitude and Latitude for Copenhagen
        marker: {
          radius: 10,
          color: "red",
          stroke: "white",
          strokeWidth: 2,
        },
      });
    }
  }, []);

  return (
    <div ref={globeRef} style={{ width: "100%", height: "400px" }}>
      <Globe
        style={{ width: "100%", height: "100%" }}
        layers={[
          {
            id: "copenhagen",
            type: "marker",
            position: [12.5022, 55.6761], // Longitude and Latitude for Copenhagen
            marker: {
              radius: 10,
              color: "red",
              stroke: "white",
              strokeWidth: 2,
            },
          },
        ]}
        // Add other globe configurations here
      />
    </div>
  );
};

export default GlobeComponent;
