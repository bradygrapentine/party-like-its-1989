import React, { Component } from 'react'
import Movie from './components/Movie'

export class App extends Component {
  state = {
    results: [],
  }

  fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=44f9f452be88057e15959be8257069c0'
    )
    const data = await response.json()
    this.setState({ results: data.results })
    console.log(data)
    console.log(this.state.results)
  }

  // fetchData = async () => {
  //   await axios.get('http://www.dnd5eapi.co/api/monsters').then(response => {
  //     this.setState({ results: response.data.results })
  //   })
  // }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <>
        <section></section>
        <main>
          <h1>1989's Best Flicks</h1>
          <ul>
            {this.state.results.map(movie => {
              return (
                <>
                  <Movie
                    id={movie.id}
                    title={movie.title}
                    poster={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                    overview={movie.overview}
                    releaseDate={movie.release_date}
                  />
                </>
              )
            })}
          </ul>
        </main>
        <section></section>
      </>
    )
  }
}
