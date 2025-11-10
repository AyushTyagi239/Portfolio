import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate 1.5s load
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
