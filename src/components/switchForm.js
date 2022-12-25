function SwitchForm(props) {

	
	return (
		<div className="login-info-item">
			<div className="login-table">
				<div className="login-table-cell">
					<p>
						{props.prop.text}
					</p>
					<div className="login-btn" onClick={props.prop.switchForm}>
						{props.prop.buttonText}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SwitchForm;