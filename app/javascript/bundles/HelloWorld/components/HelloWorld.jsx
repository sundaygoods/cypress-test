import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;
const Label = styled.label``;
const Greeting = styled.h3``;

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  buttonOnClick = (event) => {
    event.preventDefault();
    this.setState({name: ''});
  };

  render() {
    return (
      <div>
        {this.state.name !== '' &&
          <Greeting>
            Hello, {this.state.name}!
          </Greeting>
        }
        <hr />
        <form >
          <Label htmlFor="name">
            Say hello to:
          </Label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
          <Button onClick={this.buttonOnClick}>
            Clear
          </Button>
        </form>
      </div>
    );
  }
}
