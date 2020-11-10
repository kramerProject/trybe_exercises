import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    const {name, type, averageWeight, image} = this.props.data
    return (
      <div className="poke">
        <div className="poke-text">
          <h1>{name}</h1>
          <h1>{type}</h1>
          <h1>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</h1>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name:PropTypes.string,
    type:PropTypes.string,
    averageWeight:PropTypes.object
  })),
}

Pokemon.defaultProps = {
  data: {}
}
export default Pokemon;