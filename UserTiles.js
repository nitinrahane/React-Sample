import React from "react";
import axios from "axios";

import UserList from "./UserList";
import Flyout1 from "./Flyout1";
import Service from "./Services";
export default class UserTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    //this.GetUserDetails();
    this.GetUserDetails_V1();
  }

  // GetUserDetails = async () => {
  //   let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  //   const persons = result.data;
  //   let personstemp = persons.map(x => ({ ...x, isFlyoutOpened: false }));
  //   this.setState({ persons: personstemp });
  // };

  GetUserDetails_V1 = async () => {
    let service = new Service();
    let result = await service.GetUserInformation();
    const persons = result.data;
    let personstemp = persons.map(x => ({ ...x, isFlyoutOpened: false }));
    this.setState({ persons: personstemp });
  };

  clickTile = id => {
    let persons = this.state.persons;
    let updatedPerson = persons.filter(x => x.id == id)[0];
    updatedPerson.isFlyoutOpened = true;
    this.setState({
      persons: persons
    });
  };

  GetUserDetailsToRender = () => {
    return this.state.persons.map((person, index) => {
      if (person) {
        return (
          <div key={person.id + person.name}>
            <UserList
              index={index}
              person={person}
              TileClick={this.clickTile}
            />
            {person.isFlyoutOpened && (
              <Flyout1
                currentUser={person}
                OnClose={this.OnClose}
                OnSave={this.OnSave}
                data={this.state}
              />
            )}
          </div>
        );
      }
    });
  };
  OnClose = id => {
    let persons = this.state.persons;
    let updatedPerson = persons.filter(x => x.id == id)[0];
    updatedPerson.isFlyoutOpened = false;
    this.setState({
      persons: persons
    });
  };

  OnSave = (id, name) => {
    let persons = this.state.persons;
    let updatedPerson = persons.filter(x => x.id == id)[0];
    updatedPerson.name = name;
    this.setState({
      persons: persons
    });
  };

  render() {
    return <div>{this.GetUserDetailsToRender()}</div>;
  }
}
