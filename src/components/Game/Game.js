import { Component, useEffect } from "react";
import GameLayout from "./GameLayout";
import { connect } from "react-redux";

class GameContainer extends Component {
	componentDidUpdate(prevProps) {
		const { currentPlayer, isGameEnded, isDraw } = this.props;

		// Проверяем, изменились ли нужные значения
		if (
			prevProps.isDraw !== isDraw ||
			prevProps.isGameEnded !== isGameEnded ||
			prevProps.currentPlayer !== currentPlayer
		) {
			this.changingGameValue();
		}
	}

	changingGameValue = () => {
		const { currentPlayer, isGameEnded, isDraw, dispatch } = this.props;
		let stateOfGameValue;

		if (isDraw) {
			stateOfGameValue = `Ничья`;
			dispatch({ type: "SET_STATE_GAME_VALUE", payload: stateOfGameValue });
		} else if (isGameEnded) {
			stateOfGameValue = `Победа ${currentPlayer}`;
			dispatch({ type: "SET_STATE_GAME_VALUE", payload: stateOfGameValue });
		} else {
			stateOfGameValue = `Ходит ${currentPlayer}`;
			dispatch({ type: "SET_STATE_GAME_VALUE", payload: stateOfGameValue });
		}
	};

	render() {
		return <GameLayout />;
	}
}
const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
});

const Game = connect(mapStateToProps)(GameContainer);

export default Game;
