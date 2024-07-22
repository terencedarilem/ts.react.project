import React from 'react';

// Définir les types des props
interface GreetingProps {
  name: string;
}

// Composant fonctionnel avec des props typées
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name}!</div>;
};

export default Greeting;
