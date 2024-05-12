// GlobeComponent.tsx
import React from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        width="100%"
        height="100%"
        layers={[
          {
            id: 'copenhagen',
            type: 'marker',
            position: [12.5022, 55.6761], // Longitude and Latitude for Copenhagen
            marker: {
              radius: 10,
              color: 'red',
              stroke: 'white',
              strokeWidth: 2,
            },
          },
        ]}
      />
    </div>
  );
};

export default GlobeComponent;