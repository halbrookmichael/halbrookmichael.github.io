import PropTypes from 'prop-types';

import '../styles/footer.scss'

const Footer = (props) => {
	return (
		<section id="footer">
			<div className="footer-content container">
				<p className="copyright">&copy; Altered Pixels. All rights reserved.</p>
				<p className="email">halbrookmichael@gmail.com</p>
				<div className="social">* * * *</div>
			</div>
		</section>
	)
}

export default Footer;