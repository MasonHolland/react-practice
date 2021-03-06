import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      features: [
        {
          id: 0,
          title: 'JSX',
          rating: 2
        },
        {
          id: 1,
          title: 'React DOM',
          rating: 4
        },
        {
          id: 2,
          title: 'Stateless Functional Components',
          rating: 1
        },
        {
          id: 3,
          title: 'Class Components',
          rating: 5
        },
        {
          id: 4,
          title: 'props',
          rating: 3
        }
      ]
    }

    this.rateFeature = this.rateFeature.bind(this)
  }

  rateFeature(id, rating) {
    const { features } = this.state
    this.setState({
      features: features.map(f =>
        (f.id !== id) ? f : ({ ...f, rating})
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="features">
            {this.state.features.map(f =>
              <div key={f.id}>
                <h3>{f.title}</h3>
                <StarRating starsSelected={f.rating}
                            onChange={rating => this.rateFeature(f.id, rating)} />
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
