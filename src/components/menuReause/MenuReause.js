import BasicButtonExample from '../basicButtonExample/BasicButtonExample';

const MenuReuse = () => {
	const features = ['Todo List', 'Calendar', 'Reminders', 'Planning'];
	const company = ['History', 'Our Team', 'Blog'];
	return (
		<>
			<div className="navigateBar-menu">
				<ul className="navigateBar-menu-wrapper">
					<BasicButtonExample title="Features" itemsList={features} />
					<BasicButtonExample title="Company" itemsList={company} />
					<li className="navigateBar-menu-item">Careers</li>
					<li className="navigateBar-menu-item">About</li>
				</ul>
			</div>
			<div className="navigateBar-auth">
				<button className="navigateBar-auth-login">Login</button>
				<button className="navigateBar-auth-register">Register</button>
			</div>
		</>
	);
};
export default MenuReuse;
