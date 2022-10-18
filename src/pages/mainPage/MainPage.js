import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import ImageHero from '../../images/image-hero-desktop.png';
import Databiz from '../../images/client-databiz.svg';
import AudioPhile from '../../images/client-audiophile.svg';
import Meet from '../../images/client-meet.svg';
import Maker from '../../images/client-maker.svg';
import './mainPage.scss';
class MainPage extends Component {
	render() {
		return (
			<section className="mainPage">
				<Navbar />
				<div className="mainPage-wrapper">
					<div className="mainPage-First">
						<div className="mainPage-card">
							<div className="mainPage-card-title">
								Make
								<br />
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
						<img src={ImageHero} alt="Main" className="mainPageImg" />
					</div>
				</div>
			</section>
		);
	}
}
export default MainPage;
