import React, { Component } from 'react';
import { fetchCharacter, fetchMovie } from '../adapters';
import CharacterData from '../data/data.json';
import CharacterDetail from '../components/CharacterDetail';
import CharacterCard from '../components/CharacterCard';

export default class CharactersContainer extends Component {

  state = {
    selectedCharacter: '',
    movieList: [],
    selectedCharacterData: null,
    characters: null,
  };

  componentDidMount() {
    return this.setState({
      characters: CharacterData.characters
    });
  };

  selectCharacter = (character) => {
    this.setState({
      selectedCharacter: character.name
    });
    if (this.state.selectedCharacter) {
      fetchCharacter(character.url)
      .then(characterData => {
        characterData.films.forEach(movie => {
          this.createMovieList(movie);
        });
        return this.setState({
          selectedCharacterData: characterData
        });
      })
    };
  };

  buildCharacterCards = () => {
    return this.state.characters.map(character => {
      return <CharacterCard key={character.name} character={character} selectCharacter={this.selectCharacter} createMovieList={this.createMovieList} clearMovieList={this.clearMovieList}/>
    });
  };

  buildCharacterDetail = () => {
    return <CharacterDetail character={this.state.selectedCharacterData} movieList={this.state.movieList} />
  };

  createMovieList = (movie) => {
    return fetchMovie(movie).then(data => {
      return this.setState({
        movieList: [ ...this.state.movieList, data ]
      })
    });
  };

  clearMovieList = () => {
    return this.setState({
      movieList: []
    });
  };

  render() {
    return(
      <div className="container characters-container">
        <div className="row row-eq-height">
          {this.state.characters ? this.buildCharacterCards() : null}
        </div>
        <div className="row">
          {this.state.selectedCharacterData ? this.buildCharacterDetail() : null}
        </div>
      </div>
    )
  }
};
