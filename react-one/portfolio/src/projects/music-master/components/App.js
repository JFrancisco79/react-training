import React, { Component } from "react"; // Component inside {} is under react library/module
import Artist from "./Artist.js";
import Tracks from "./Tracks.js";
import Search from "./Search.js";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
    state = { artist: null, tracks: [] };

    componentDidMount(){
        this.searchArtist("gang of youths");
    }

    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.artists.total) {
                    const artist = json.artists.items[0];
                    this.setState({ artist });
                    this.searchTopTracks(artist.id);
                }
            })
            .catch((error) => alert(error.message));
    };

    searchTopTracks = (id) => {
        fetch(`${API_ADDRESS}/artist/${id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => this.setState({ tracks: json.tracks }))
            .catch((error) => alert(error.message));
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h3>Music Master</h3>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App; // allows App.js to be imported to other JS file.
