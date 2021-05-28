import React, { Component } from 'react'

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
        <h1>Hello, Fetch</h1>
        <div>
          <ul>
            {this.state.results.map(movie => {
              return (
                <li key={movie.id}>
                  <a
                    href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=44f9f452be88057e15959be8257069c0`}
                  >
                    {movie.original_title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}
