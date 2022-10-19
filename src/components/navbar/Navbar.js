import { Component } from 'react';
import MenuReuse from '../menuReause/MenuReause';
import OffCanvasExample from '../offCanvasExample/OffCanvasExample';
import GamburgerM from '../../images/icon-menu.svg';
import './navbar.scss';
class Navbar extends Component {
	state = {
		show: false,
	};
	handleShow = () => {
		this.setState({ show: true });
	};
	handleClose = () => {
		this.setState({ show: false });
	};
	render() {
		return (
			<div className="navigateBar">
				<OffCanvasExample close={this.handleClose} show={this.state.show} />
				<div className="navigateBar-wrapper">
					<div className="navigateBar-logo">snap</div>
					{+this.props.screenWidth > 375 ? <MenuReuse /> : null}
					<div className="navigateBar-hamburger">
						<img src={GamburgerM} alt="hamburger" onClick={this.handleShow} />
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
