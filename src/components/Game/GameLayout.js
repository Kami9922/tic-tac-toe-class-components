import React, { Component } from "react"
import Information from "../Information/Information"
import Field from "../Field/Field"
import { connect } from "react-redux"

class GameLayoutContainer extends Component {
	render() {
		const { dispatch } = this.props
		return (
			<div>
				<Information />
				<Field />
				<div
					className={
						"mx-auto border border-white rounded-[15px] w-52 p-[10px] bg-[#46af2b] hover:cursor-pointer"
					}
					onClick={() => {
						dispatch({ type: "SET_CURRENT_PLAYER", payload: "X" })
						dispatch({
							type: "SET_FIELD",
							payload: ["", "", "", "", "", "", "", "", ""],
						})
						dispatch({ type: "SET_IS_DRAW", payload: false })
						dispatch({ type: "SET_IS_GAME_ENDED", payload: false })
					}}
				>
					Начать заново
				</div>
			</div>
		)
	}
}

const GameLayout = connect()(GameLayoutContainer)

export default GameLayout
