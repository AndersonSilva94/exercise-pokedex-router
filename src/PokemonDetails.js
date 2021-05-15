import React, { Component } from "react";

class PokemonDetails extends Component {
  render() {
    const {
      pokemons,
      match: {
        params: { idPoke },
      },
    } = this.props;
    const filteredPok = pokemons.find((poke) => poke.id === parseInt(idPoke));
    const { name, type, averageWeight, summary, foundAt } = filteredPok;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>
          Peso: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        <p>{summary}</p>
        {foundAt.map(({ location, map }) => (
          <div key={ location }>
            <h4>{location}</h4>
            <img src={map} alt={`mapa do pokemon ${name}`} />
          </div>
        ))}
      </div>
    );
  }
}

export default PokemonDetails;
