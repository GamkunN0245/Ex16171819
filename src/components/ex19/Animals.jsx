import React from 'react';
import AnimalCard from './AnimalCard';
import animalsData from './animal';

export default function Animals() {
  const showAdditional = (additional) => {
    const text = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(text);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Animals</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {animalsData.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
          />
        ))}
      </div>
    </div>
  );
}