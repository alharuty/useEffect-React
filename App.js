import React, { useState, useEffect } from 'react';

export function App() {
  const [cuenta, setCuenta] = useState(0);
  
  useEffect(() => {
    if (cuenta !== 0 & cuenta % 5 === 0) {
      console.log("El numero es divisible entre 5");
    }
  }, [cuenta]);
  return (
    <div>
      <h1> La cuenta es: {cuenta} </h1>
      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
    </div>
  );
}
