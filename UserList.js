import React from "react";

export default class UserList extends React.Component {
  handleClickTile = id => {
    this.props.TileClick(id);
  };

  render() {
    const persons = this.props.person;
    return (
      <div id="layout-content" className="layout-content-wrapper UserTile">
        <a href="#" onClick={e => this.handleClickTile(persons.id)}>
          {persons.name}
        </a>
        <div className="panel-list">
          <div>
            <h4>Name : {persons.name}</h4>
            <span>
             ID: {persons.id} <br/>
             UserId : {persons.username}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
