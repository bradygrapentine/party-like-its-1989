import React, { Component } from 'react'

class ReleaseDate extends Component {
  render() {
    return (
      <h5 className="releaseDate">
        {' '}
        {this.props.title} was released on: {this.props.releaseDate}
      </h5>
    )
  }
}

export default ReleaseDate
