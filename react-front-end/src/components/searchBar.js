import React from 'react';

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
        <input type="submit" value="Hire Me!" method="GET" action="/results" />
      </form>
    );
  }
}

export default SearchBar;