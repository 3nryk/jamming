import React, {Component} from 'react';
import './Track.css';

class Track extends Component{
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }
  renderAction() {
    if (this.props.isRemoval) {
      <a className="Track-action" >-</a>
    } else {
      <a className="Track-action" onClick={this.addTrack}>+</a>
    }
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"><!-- + or - will go here --></a>
    </div>
  }
}

export default Track;
