import React, { Component } from 'react';
import JediLightsaber from '../_assets/img/jedi-lightsaber.svg';
import SithLightsaber from '../_assets/img/sith-lightsaber.svg';
import R2D2 from '../_assets/img/r2d2.svg';


export default class CharacterDetail extends Component {

  createAppearanceList = () => {
    if (this.props.movieList !== undefined) {
      return this.props.movieList.map((film, i) => {
        let moment = require('moment');
        return <li className="list-group-item" key={i}>{`${film.title} – Released on ${moment(film.release_date).format('MMMM Do YYYY')}`}</li>
      });
    };
  };

  renderIcon = () => {
    if (this.props.character) {
      let characterName = this.props.character.name;
      if (characterName === "Obi-wan Kenobi") {
        return <img className="detail-icon" alt="Jedi Lightsaber" src={JediLightsaber} />
      } else if (characterName === "Luke Skywalker") {
        return <img className="detail-icon" alt="Jedi Lightsaber" src={JediLightsaber} />
      } else if (characterName === "R2-D2") {
        return <img className="detail-icon" alt="R2-D2" src={R2D2}/>
      } else if (characterName === "Darth Vader") {
        return <img className="detail-icon" alt="Sith Lightsaber" src={SithLightsaber}/>
      } else {
        return <img className="detail-icon" alt="Jedi Lightsaber" src={JediLightsaber} />
      };
    };
  };

  render() {
    if (this.props.movieList.length === 0) {
      return (
        <div className="col-sm loading-container">
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-sm">
          <div id={`${this.props.character.name}-card`} className="character-detail">
            <h2>{this.props.character.name} {this.renderIcon()}</h2>
            <ul className="list-group">
              {this.props.movieList ? this.createAppearanceList() : null}
            </ul>
            {/*<div className="appearance-list">
                {this.props.movieList ? this.createAppearanceList() : null}
            </div>*/}
          </div>
        </div>
      )
    }
  }
};
