import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlApi: [],
      loading: true,
    };
    this.addDog = this.addDog.bind(this);
  }

  componentDidMount() {
    this.ApiFetch();
  }

  addDog() {
    this.ApiFetch();
  }

  async ApiFetch() {
    const urlApi = await fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json());
    this.setState((previous) => ({
      urlApi: [...previous.urlApi,
        urlApi.message],
      loading: false,
    }));
  }

  render() {
    const { urlApi, loading } = this.state;
    return (
      <div>
        {(loading)
          ? <h1>Loading...</h1>
          : urlApi.map((dog) => <img src={ dog } key={ dog } alt="Foto Cachorro" />)}
        <button type="button" onClick={ this.addDog }> Adiciona Dog</button>
      </div>
    );
  }
}
export default App;
