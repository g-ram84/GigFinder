import React from 'react';
import Button from './button.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Job Search" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button primary onClick={this.props.onConfirm}>Hire Me!</Button>
      </form>
    );
  }
}

export default SearchBar;