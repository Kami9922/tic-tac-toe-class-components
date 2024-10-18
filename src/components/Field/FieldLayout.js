import { WIN_PATTERNS } from "../../constants"
import { connect } from "react-redux"
import { Component } from "react"

class FieldLayoutContainer extends Component {
	checkForDraw = (arrayToCheck) => {
		if (!arrayToCheck.includes("")) {
			this.props.dispatch({ type: "SET_IS_GAME_ENDED", payload: true })
			this.props.dispatch({ type: "SET_IS_DRAW", payload: true })
		}
	}

	render() {
		const { dispatch, field, currentPlayer, isGameEnded } = this.props

		return (
			<div className="flex justify-center flex-wrap w-[626px] h-[625px] border border-white mb-6">
				{field.map((item, index) => {
					return (
						<div
							key={index}
							className="w-52 h-52 bg-red-300 border border-white flex justify-center items-center text-9xl cursor-pointer"
							onClick={() => {
								if (!isGameEnded && field[index] === "") {
									const newField = [...field]
									newField[index] = currentPlayer
									dispatch({ type: "SET_FIELD", payload: newField })
									if (
										WIN_PATTERNS.some((pattern) =>
											pattern.every((index) => newField[index] === currentPlayer),
										)
									) {
										dispatch({ type: "SET_IS_GAME_ENDED", payload: true })
									} else {
										dispatch({
											type: "SET_CURRENT_PLAYER",
											payload: currentPlayer === "X" ? "O" : "X",
										})
										this.checkForDraw(newField)
									}
								}
							}}
						>
							{item}
						</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
})

const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer)

export default FieldLayout
