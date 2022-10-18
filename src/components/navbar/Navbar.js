import { Component } from 'react';
import BasicButtonExample from '../basicButtonExample/BasicButtonExample';

import './navbar.scss';

class Navbar extends Component {
	state = {
		features: ['Todo List', 'Calendar', 'Reminders', 'Planning'],
		company: ['History', 'Our Team', 'Blog'],
	};
	render() {
		return (
			<div className="navigateBar">
				<div className="navigateBar-wrapper">
					<div className="navigateBar-logo">snap</div>
					<div className="navigateBar-menu">
						<ul className="navigateBar-menu-wrapper">
							<BasicButtonExample title="Features" itemsList={this.state.features} />
							<BasicButtonExample title="Company" itemsList={this.state.company} />
							<li className="navigateBar-menu-item">Careers</li>
							<li className="navigateBar-menu-item">About</li>
						</ul>
					</div>
					<div className="navigateBar-auth">
						<button className="navigateBar-auth-login">Login</button>
						<button className="navigateBar-auth-register">Register</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;
