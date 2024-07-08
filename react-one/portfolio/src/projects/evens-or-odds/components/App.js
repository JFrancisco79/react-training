import React, { Component } from "react"; // Component inside {} is under react library/module
import { connect } from "react-redux";
import { startGame, cancelGame } from "../actions/settings";
import { fecthNewDeck } from "../actions/deck";
import fetchStates from "../reducers/fetchStates";
import Instructions from "./Instructions";
import DrawCard from "./DrawCard";
import Card from "./Card";
import Guess from "./Guess";
import GameState from "./GameState";

class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fecthNewDeck();
    };

    render() {
        const { cancelGame, message, fetchState } = this.props;
        if (fetchState === fetchStates.error) {
            return (
                <div>
                    <p>Please try and reload the app. An error occured.</p>
                    <p>{message}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Evens or Odds</h3>
                    {this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <GameState />
                            <Guess />
                            <br />
                            <DrawCard />
                            <hr />
                            <Card />
                            <hr />
                            <button onClick={cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits</h3>
                            <br />
                            <button onClick={this.startGame}>Start Game</button>
                            <hr />
                            <Instructions />
                        </div>
                    )}
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const {
        settings: { gameStarted },
        deck: { fetchState, message },
    } = state;
    return {
        gameStarted,
        fetchState,
        message,
    };
};

const componentConnector = connect(mapStateToProps, {
    startGame,
    cancelGame,
    fecthNewDeck,
});

export default componentConnector(App);
