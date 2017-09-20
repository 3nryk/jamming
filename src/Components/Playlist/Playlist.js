import React, {Component} from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component{
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* in task 21, comment out <TrackList /> since it doesn't work without any props */}
        <!-- Add a TrackList component -->
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
