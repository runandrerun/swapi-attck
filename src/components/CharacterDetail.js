import React, { Component } from 'react';
import { fetchMovie } from '../adapters';

export default class CharacterDetail extends Component {

  state = {
    loading: true
  }

  createAppearanceList = () => {
    if (this.props.movieList !== undefined) {
      return this.props.movieList.map((film, i) => {
        let moment = require('moment');
        return <div key={i}>{`${film.title} – Released on ${moment(film.release_date).format('MMMM Do YYYY')}`}</div>
      });
    };
  };

  render() {
    if (this.props.movieList.length === 0) {
      return (
        <div className="col-sm loading-container">
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-sm">
          <div id={`${this.props.character.name}-card`} className="character-detail">
            <h2>{this.props.character.name}</h2>
            <div className="appearance-list">
                {this.props.movieList ? this.createAppearanceList() : null}    
            </div>
          </div>
        </div>
      )
    }
  }
};
