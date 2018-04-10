import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../css/Tutorial.css';
import { Button, Modal } from 'react-bootstrap';
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

class Tutorial extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleHide = this.handleHide.bind(this);

		this.state = {
			show: false
		};
	}

	handleHide() {
		this.setState({ show: false });
	}
	
	render() {
		return (
			<div className="modal-container" style={{ height: 500 }}>
				<Button
					bsStyle="primary"
					bsSize="large"
					onClick={() => this.setState({ show: true })}
				>
				Getting Started!
				</Button>

				<Modal
					show={this.state.show}
					onHide={this.handleHide}
					container={this}
					aria-labelledby="contained-modal-title"
				>
				
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title">
						Contained Modal
					</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Insert text here.
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

// render(<Tutorial />);

export default Tutorial;