import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';

import ImageHeroDesktop from '../../images/image-hero-desktop.png';
import ImageHeroMobile from '../../images/image-hero-mobile.png';
import Databiz from '../../images/client-databiz.svg';
import AudioPhile from '../../images/client-audiophile.svg';
import Meet from '../../images/client-meet.svg';
import Maker from '../../images/client-maker.svg';
import './mainPage.scss';
class MainPage extends Component {
	state = {
		screenWidth: window.screen.width,
	};
	render() {
		return (
			<section className="mainPage">
				<Navbar screenWidth={this.state.screenWidth} />
				<div className="mainPage-wrapper">
					<div className="mainPage-First">
						<div className="mainPage-card">
							<div className="mainPage-card-title">
								Make
								{+this.state.screenWidth > 375 ? <br /> : ' '}
								remote work
							</div>
							<div className="mainPage-card-text">
								Get your team in sync, no matter your location. Streamline processes, create team
								rituals, and watch productivity soar.
							</div>
							<button className="mainPage-card-button">Learn more</button>
						</div>
						<div className="mainPage-footer">
							<div className="mainPage-footer-logo">
								<img src={Databiz} alt="databiz" />
							</div>
							<div className="mainPage-footer-logo">
								<img src={AudioPhile} alt="AudioPhile" />
							</div>
							<div className="mainPage-footer-logo">
								<img src={Meet} alt="Meet" />
							</div>
							<div className="mainPage-footer-logo">
								<img src={Maker} alt="Maker" />
							</div>
						</div>
					</div>
					<div className="mainPage-Second">
						<ImageSelecter />
					</div>
				</div>
			</section>
		);
	}
}
const ImageSelecter = () => {
	const screens = [ImageHeroDesktop, ImageHeroMobile];
	if (+window.screen.width <= 375)
		return <img src={screens[1]} alt="Main" className="mainPageImg" />;
	if (+window.screen.width > 375)
		return <img src={screens[0]} alt="Main" className="mainPageImg" />;
};
export default MainPage;
