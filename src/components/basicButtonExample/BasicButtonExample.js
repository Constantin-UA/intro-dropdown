import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Planning from '../../images/icon-planning.svg';
import Reminders from '../../images/icon-reminders.svg';
import Todo from '../../images/icon-todo.svg';
import Calendar from '../../images/icon-calendar.svg';
import { Component } from 'react';

import './basicButtonExample.scss';
class BasicButtonExample extends Component {
	state = {
		icons: [Todo, Calendar, Reminders, Planning],
	};
	render() {
		const { title, itemsList } = this.props;
		return (
			<DropdownButton id={`dropdown-${title}-button`} title={title}>
				{itemsList.map((item, idx) => {
					const action = idx + 1;
					return (
						<Dropdown.Item href={`#/action-${action}`} key={idx}>
							{title === 'Features' ? (
								<div className="dropdown-item-img">
									<img src={this.state.icons[idx]} alt={item} />
								</div>
							) : null}
							<div className="dropdown-item-text">{item}</div>
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		);
	}
}

export default BasicButtonExample;
