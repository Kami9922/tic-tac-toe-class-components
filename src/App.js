import Game from "./components/Game/Game"
import React, { Component } from "react"

export default class App extends Component {
	render() {
		return (
			<div className="text-center">
				<header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white">
					<Game />
				</header>
			</div>
		)
	}
}
