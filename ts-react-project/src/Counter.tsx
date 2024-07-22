import React, { Component } from 'react';

// Définir l'état du composant
interface CounterState {
  count: number;
}

// Composant de classe avec état typé
class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    // Initialiser l'état
    this.state = {
      count: 0,
    };
  }

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Compte : {this.state.count}</p>
        <button onClick={this.increment}>Incrément</button>
      </div>
    );
  }
}

export default Counter;
