import { connect } from "react-redux";
import styles from "./../../css/information.module.css";
import React, { Component } from "react";

class InformationLayoutContainer extends Component {
	render() {
		const { stateOfGameValue } = this.props;

		return (
			<div
				className={`${styles.information} ${stateOfGameValue.includes(`Победа`) ? styles["information-win"] : styles.information}`}
			>
				{stateOfGameValue}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	stateOfGameValue: state.stateOfGameValue,
});

const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);

export default InformationLayout;
