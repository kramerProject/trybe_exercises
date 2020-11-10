import React, {Component} from 'react'
import Pokemon from './Pokemon'
import PropTypes from 'prop-types'

class Pokedex extends Component {
  render() {
    const pokemons = this.props.data
    return (
      <div className="poke-container">
        {pokemons.map(poke => <Pokemon key={poke.id} data={poke} />)}
      </div>
    )
  }
}

Pokedex.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name:PropTypes.string,
    type:PropTypes.string,
    averageWeight:PropTypes.object,
    image:PropTypes.string,
    moreInfo:PropTypes.string,
  })),
}


export default Pokedex;