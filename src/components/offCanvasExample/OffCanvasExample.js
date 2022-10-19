import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuReuse from '../menuReause/MenuReause';

function OffCanvasExample({ show, close }) {
	return (
		<Offcanvas
			show={show}
			onHide={close}
			placement="end"
			style={{ width: '65%', 'background-color': 'hsl(0, 0%, 98%)' }}
		>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title> </Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<MenuReuse />
			</Offcanvas.Body>
		</Offcanvas>
	);
}
export default OffCanvasExample;
