import React, {Component} from 'react'
import Pokemon from './Pokemon'
import PropTypes from 'prop-types'
import pokemons from './data';
import Buttons from './Buttons'

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pokemons:this.props.data
    }
  }

  handleButton = (event) => {
    let { value }  = event.target
    let filter = "" 
    if (value === "All")  {
      filter = this.props.data
    } else {
      filter = pokemons.filter(pokemon => pokemon.type === value)
    }
    this.setState(() => ({
      index: 0,
      pokemons: filter
    }))
  }

  handleClick = (event) => {
    let { index, pokemons } = this.state
    if (index === pokemons.length - 1) {
      index = 0
    } else {
      index += 1
    }
    this.setState(() => ({
      index: index
    }))
  }
  render() {
    const { index, pokemons } = this.state
    const pokeTypes = this.props.data.map(pokemon => pokemon.type).filter((type, index, self) => index === self.indexOf(type))

    return (
      <div className="poke-container">
        <Pokemon key={index} data={pokemons[index]} />
        <div className="button-container">
          <button className="button" value="All" onClick={this.handleButton} >All</button>
          {pokeTypes.map(type => <Buttons value={type} onClick={this.handleButton} />)}
        </div>

        <button className="next-button" onClick={this.handleClick} disabled={pokemons.length <= 1}>Next</button>
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