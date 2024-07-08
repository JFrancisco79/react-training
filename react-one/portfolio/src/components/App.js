import React, { Component } from "react"; // Component inside {} is under react library/module
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import portrait from "../assets/portrait.png";  

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    };

    render() {
        return (
            <div>
                <img src={portrait} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Joe.</p>
                <Title />
                <p>
                    I'm always looking forward to working on meaningful
                    projects.
                </p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Manila, and code every day.</p>
                        <p>
                            My favorite language is JavaScript, and I think
                            React.js is awesome.
                        </p>
                        <p>
                            Besides coding, i love reading and listening to
                            music.
                        </p>
                        <button onClick={this.toggleDisplayBio}>
                            Show Less
                        </button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>
                            Read More
                        </button>
                    </div>
                )}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App; // allows App.js to be imported to other JS file.
