import { connect } from "react-redux"
import React, { Component } from "react"

class InformationLayoutContainer extends Component {
	render() {
		const { stateOfGameValue } = this.props

		return (
			<div
				className={`${stateOfGameValue.includes("Победа") ? "bg-[#46af2b]" : ""} mb-6 text-4xl border border-white w-64 mx-auto rounded-[15px] p-[5px]`}
			>
				{stateOfGameValue}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	stateOfGameValue: state.stateOfGameValue,
})

const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer)

export default InformationLayout
