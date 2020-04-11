import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectGif } = this.props;
    const { id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
