import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <img src={this.props.poster} />
        <a
          href={`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=44f9f452be88057e15959be8257069c0`}
        >
          {this.props.title}
        </a>
        <h5>{this.props.releaseDate}</h5>
        <p>{this.props.overview}</p>
      </li>
    )
  }
}

export default Movie
