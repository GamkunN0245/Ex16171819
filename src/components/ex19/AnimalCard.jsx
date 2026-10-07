import React from 'react';
import PropTypes from 'prop-types';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
}) {
  return (
    <div style={{
      border: '2px solid #e0a800',
      borderRadius: '8px',
      backgroundColor: '#ffc107',
      padding: '15px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'left'
    }}>
      <h2 style={{ color: '#a71d2a', marginTop: '0' }}>{name}</h2>
      <p style={{ fontStyle: 'italic', margin: '5px 0' }}>Scientific Name: {scientificName}</p>
      <p style={{ margin: '5px 0' }}>{size} kg</p>
      <p style={{ margin: '5px 0' }}>{diet.join(', ')}.</p>
      <button 
        onClick={() => showAdditional(additional)}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
          fontWeight: 'bold'
        }}
      >
        More Info
      </button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};