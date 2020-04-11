import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleChange = (event) => {
    const { search } = this.props;
    this.setState({
      term: event.currentTarget.value
    });
    search(event.currentTarget.value);
  }

  render() {
    const { term } = this.state;
    return (
      <input value={term} type="text" className="form-search form-search" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
