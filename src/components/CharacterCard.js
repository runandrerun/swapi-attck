import React, { Component } from 'react';

export default class CharacterCard extends Component {

  handleClick = (e) => {
    this.props.clearMovieList();
    this.props.selectCharacter(this.props.character);
  };

  render() {
    return (
      <div className="col-sm">
        <div id={`${this.props.character.name}-card`} className="character-card" onClick={(e) => this.handleClick(e)}>
          {this.props.character.name}
        </div>
      </div>
    )
  }
};
