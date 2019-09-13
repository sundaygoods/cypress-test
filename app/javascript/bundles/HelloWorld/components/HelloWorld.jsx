import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Form = styled.form`
  display: inline-grid;
  grid-gap: 25px;
`;

const Button = styled.button``;

const Label = styled.label``;

const Greeting = styled.h3``;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

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

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({name: ''});
  };

  render() {
    return (
      <Container>
        {this.state.name !== '' &&
          <Greeting>
            Hello, {this.state.name}!
          </Greeting>
        }
        <hr />
        <Form onSubmit={this.onSubmit}>
          <Label htmlFor="name">
            Say hello to:
          </Label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
          <Button>
            Clear
          </Button>
          <Switch>
            <input type="checkbox"/>
            <span class="slider round"></span>
          </Switch>
          <Switch class="switch">
            <input type="checkbox"/>
            <span class="slider"></span>
          </Switch>
        </Form>
      </Container>
    );
  }
}
