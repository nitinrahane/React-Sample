import React from "react";
class Flyout1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.currentUser.name
    };
  }

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
   
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <select
          name="cars"
          id="cars"
          defaultValue={this.props.currentUser.name}
        >
          {this.props.data.persons.map(a => (
            <option key={a.name} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            this.props.OnSave(this.props.currentUser.id, this.state.inputValue)
          }
        >
          Save
        </button>
        <button onClick={()=> {this.props.OnClose(this.props.currentUser.id)}}>Close</button>
      </div>
    );
  }
}

export default Flyout1;
