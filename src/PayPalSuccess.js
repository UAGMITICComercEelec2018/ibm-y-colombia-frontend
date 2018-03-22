import React, { Component, Fragment } from 'react';

class PayPalSuccess extends Component {
	render() {
		return <p>HelloWorld</p>
	}

	componentDidMount() {
		this.setState(['someKey': 'othervalue']);
	}
}

export default PayPalSuccess;

